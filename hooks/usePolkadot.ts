
"use client"

import { connect, injected, prepareTransactionRequest, type WriteContractErrorType, writeContract, getAccount, getBalance, deployContract, getTransactionReceipt, waitForTransactionReceipt, readContract } from '@wagmi/core';
import { useEffect, useState } from 'react'
import { createConfig, http, useAccount } from 'wagmi';
import { moonbaseAlpha } from "wagmi/chains"

import contract from "@/contract.json"
import factory from "@/contractFactory.json"
import { parseEther } from 'viem';
import { getAddress } from 'ethers/lib/utils';
import { BigNumber, ContractFactory, ethers } from 'ethers';


const config = createConfig({
  chains: [moonbaseAlpha],
  transports: {
    [moonbaseAlpha.id]: http("https://moonbase-alpha.public.blastapi.io")
  }
});

interface Ticket {
  id: bigint,
  description: string;
  reward: bigint;
  completed: boolean;
  creator: string;
}

interface Project {
  
  id: bigint,
  contractAddress: string;
  name: string;
  description: string;
  owner: string;
  nTickets: bigint;
  tickets: Ticket[];

}

const factoryAddress = "0xc73c3a24e47364afb2d7d699bf516b13fb49535a"

const contractInterface = new ethers.utils.Interface(contract.output.abi);
const factoryInterface = new ethers.utils.Interface(factory.output.abi);

export default function usePolkadot() {
  const [loading, setLoading] = useState(false)
  const [account, setAccount] = useState<string>()
  const [balance, setBalance] = useState("")
  const [projects, setProjects] = useState<Project[]>([])


  async function connectWallet() {
    setLoading(true)
    const result = await connect(config, { connector: injected() })
    setLoading(false)

    console.log(result.accounts)

    if (result.accounts.length > 0) {
      setAccount(result.accounts[0])

      const balance = await getBalance(config, { address: result.accounts[0] })
      if (balance) {
        setBalance(`${balance.value} ${balance.symbol}`)
      }
      return true;
    }

    return false
  }

  async function runFunction() {
    if (!account) {
      const connectionResult = await connectWallet();
      if (!connectionResult) {
        console.error("Failed to connect wallet")
        return;
      }
    }
    try {
      const hash = await writeContract(config, {
        abi: contract.output.abi,
        address: '0xf163c1381610cff1ec2d71d6e23fd4e22f2a5a3b',
        functionName: 'completeTask',
        args: [
          "hello"
        ],
      })
      console.log(hash)
    } catch (e) {
      console.log(e)
    }
  }

  async function createProject(
    name: string, description: string
  ): Promise<BigNumber | null> {
    console.log(account)
    if (!account) {
      const connectionResult = await connectWallet();
      if (!connectionResult) {
        console.error("Failed to connect wallet")
        return null;
      }
    }

    setLoading(true)

    try {
      // writes to project factory
      console.log("writing contract")
      const hash = await writeContract(config, {
        abi: factory.output.abi,
        address: factoryAddress,
        functionName: 'createProject',
        args: [
          name, description
        ],
      })

      
      console.log("writen contract", hash);

      const receipt = await waitForTransactionReceipt(config, { hash })
      
      for (const log of receipt.logs) {
        try {
          console.log(log)
          const parsedLog = factoryInterface.parseLog(log);
          console.log('Parsed log:', parsedLog);

          if (parsedLog.name === 'ProjectCreated') {
            const returnValue = parsedLog.args[0]; 
            return (returnValue as BigNumber)
          }
        } catch (error) {
          console.error('Error parsing log:', error);
        }
      }
    } catch (e) {
      console.log(e)
    } finally {
      setLoading(false)
    }
    return null;
  }

  async function getProjects() {
    const nProjects = await readContract(config, {
      abi: factory.output.abi,
      address: factoryAddress,
      functionName: 'getProjectCount',
    }) as bigint
    
    
    const projects = await Promise.all([...new Array(Number(nProjects))].map(async (_, i) => {
      try {
        const projectAddress = await readContract(config, {
          abi: factory.output.abi,
          address: factoryAddress,
          functionName: 'getProject',
          args: [BigInt(i)]
        }) as `0x${string}`

        console.log(projectAddress)

        const result = await readContract(config, {
          abi: contract.output.abi,
          address: projectAddress,
          functionName: 'getProjectInfo',
        }) as [string, string, string, bigint]


        const tickets = await Promise.all([...new Array(Number(result[3]))].map(async (_, i) => {
          console.log("idx", i)
          try {
            const result = await readContract(config, {
              abi: contract.output.abi,
              address: projectAddress,
              functionName: 'getTicket',
              args: [BigInt(i)]
            }) as [string, bigint, string, boolean]

            const ticket = {
              id: BigInt(i),
              description: result[0],
              reward: result[1],
              creator: result[2],
              completed: result[3]
            } as Ticket
            return ticket;
          } catch (e) { console.log(e) }

          return null
        }))

        return {
          id: BigInt(i),
          contractAddress: projectAddress,
          name: result[0],
          description: result[1],
          owner: result[2],
          nTickets: result[3],
          tickets: tickets.filter(v => v !== null)
        } as Project
      } catch (e) { console.log(e) }

      return null
    }));

    setProjects(projects.filter(v => v !== null) as Project[])
  }

  async function createTicket(
    description: string, reward: number, project: Project
  ) {
    if (!account) {
      const connectionResult = await connectWallet();
      if (!connectionResult) {
        console.error("Failed to connect wallet")
        return null;
      }
    }

    setLoading(true)
    try {
      const hash = await writeContract(config, {
        abi: contract.output.abi,
        address: project.contractAddress as `0x${string}`,
        functionName: 'createTicket',
        args: [
          description
        ],
        value: BigInt(reward)
      })
      
      const receipt = await waitForTransactionReceipt(config, { hash })
      return true
    } catch (e) {
      console.log(e)
    } finally {
      
      setLoading(false)
    }
    return false
  }

  
  async function closeTicket(
    ticketId: bigint, project: Project
  ) {
    if (!account) {
      const connectionResult = await connectWallet();
      if (!connectionResult) {
        console.error("Failed to connect wallet")
        return null;
      }
    }

    setLoading(true)
    try {
      const hash = await writeContract(config, {
        abi: contract.output.abi,
        address: project.contractAddress as `0x${string}`,
        functionName: 'completeTicket',
        args: [
          ticketId
        ]
      })
      
      const receipt = await waitForTransactionReceipt(config, { hash })
      return true
    } catch (e) {
      console.log(e)
    } finally {
      
      setLoading(false)
    }
    return false
  }

  useEffect(() => {
  }, [account])

  useEffect(() => {
    getProjects()
  }, [])

  return {
    account,
    loading,
    balance,
    projects,
    connect: connectWallet,
    runFunction,
    createProject,
    createTicket,
    closeTicket,
    reload: getProjects
  }
}