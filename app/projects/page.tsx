"use client"

import ConnectButton from "@/components/ConnectButton";
import usePolkadot from "@/hooks/usePolkadot";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Button, Input, Spinner, Snippet } from "@nextui-org/react";
import { web3AccountsSubscribe, web3Enable } from "@polkadot/extension-dapp";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function Page() {

  const { createProject, loading, projects } = usePolkadot();

  const [stage, setStage] = useState(0)
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")

  const router = useRouter()

  async function onClick() {
    if (stage < 2) {
      setStage(s => s + 1)
      return
    }
    if (name && description) {
      const projectId = await createProject(name, description)
      if (projectId) {
        router.push(`/projects/${projectId?._hex}`)
      }
    }
  }

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="flex items-end justify-end w-full p-4">
        <ConnectButton />
      </div>
      <div className="px-32 py-12 flex flex-col gap-5">

        <div className="relative">
          <Card className="w-[50rem] bg-light-background" shadow="sm">
            <CardHeader className="flex gap-3">
              <div className="aspect-square w-12 h-12 flex items-center justify-center">
                <Image
                  alt="logo"
                  radius="sm"
                  src="/logo_bg.svg"
                  height={40}
                  width={40}
                />
              </div>
              <div className="flex flex-col grow">
                <p className="text-md">Create New Project</p>
                <p className="text-small text-default-500">Deploy a new project contract and begin scheduling tasks</p>
              </div>
              <div>
                <Button onClick={onClick} color="primary" variant="flat">
                  Create
                </Button>
              </div>
            </CardHeader>
            <Divider />
            <CardBody>
              {stage > 0 &&
                <>
                  <Input type="text" className="py-2" variant={"bordered"} size="sm" label="Name" value={name} onChange={e => setName(e.target.value)} />
                </>
              }
              {stage > 1 &&
                <>
                  <Input type="text" className="py-2" variant={"bordered"} size="sm" label="Description" value={description} onChange={e => setDescription(e.target.value)} />
                </>
              }

              <p className="text-right text-sm font-light">Plan, finance and roadmap your next big project or venture</p>
            </CardBody>
          </Card>
          {loading &&
            <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center bg-background bg-opacity-85 z-50">
              <Spinner color="secondary" />
            </div>
          }
        </div>

        <p className="text-[2.2rem] text-text font-thin tracking-wider">Projects</p>

        <div className="flex flex-col gap-4">
          {projects.map((project) => (
            <div className="flex flex-col gap-1.5 items-end">
              <Card className="w-full bg-light-background" shadow="sm">
                <CardBody className="flex flex-col items-start gap-3 overflow-hidden">
                  <div className="flex justify-between w-full items-center">
                    <p className="text-text text-md capitalize">{project.name}</p>
                    <Link showAnchorIcon href={`/projects/0x${(project.id).toString(16)}`}/>
                  </div>
                  <Divider/>
                  <p className="text-neutral-500 text-xs">{project.description}</p>
                  <div className="flex justify-end w-full">
                  <Snippet size="sm" codeString={project.contractAddress} symbol="> " color="primary">{project.contractAddress.slice(0, 8)}</Snippet>
                  </div>
                </CardBody>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}