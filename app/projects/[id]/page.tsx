"use client"

import usePolkadot from "@/hooks/usePolkadot";
import { Button, Card, CardBody, CardHeader, Checkbox, Divider, Image, Input, Radio, Spinner, Textarea } from "@nextui-org/react";
import { BigNumber } from "ethers";
import { useState } from "react";


export default function Page({ params }: { params: { id: string } }) {

  const { createTicket, projects, loading, closeTicket, reload } = usePolkadot()

  const [description, setDescription] = useState("")
  const [reward, setReward] = useState(0)
  
  const project = projects.find(v => v && parseInt(BigNumber.from(v.id)._hex, 16) == parseInt(params.id, 16))
  console.log(project)
  async function onClick() {
    if (!project) return;
    if (await createTicket(description, reward, project)) {
      window.location.reload()
    }
  }

  return (
    <div className="grid grid-cols-[55%_auto] overflow-x-hidden h-screen overflow-y-scroll">
      <div className="relative flex flex-col items-center w-full h-full p-10">
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
              <p className="text-md">Submit Milestone</p>
              <p className="text-small text-default-500">Outline a task, ticket, user story or milestone to be completed</p>
            </div>
            <div>
              <Button onClick={() => onClick()} color="primary" variant="flat">
                Create
              </Button>
            </div>
          </CardHeader>
          <Divider />
          <CardBody className="flex flex-col gap-3">
            <p className="text-xs text-default-400">The task description should be detailed and simple tickets with high rewards may get rejected, leading to reduced Karma. Avoid being too vague and overly ambition, or else you may lose Karma for not completing the milestone</p>
            <Textarea variant="bordered" size="sm" type="text" label="Description" value={description} onChange={e => setDescription(e.target.value)} />
            <Input variant="bordered" size="sm" type="number" label="Reward" value={reward.toString()} onChange={e => setReward(Number.parseInt(e.target.value))} />
            <p className="text-left text-default-500 text-sm font-light">Acquire the funding needed to progress your project to the next step!</p>
          </CardBody>
        </Card>
        {loading &&
          <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center bg-background bg-opacity-85 z-50">
            <Spinner color="secondary" />
          </div>
        }
      </div>
      <div className="flex flex-col p-14 gap-4">
        <p className="text-[2rem] text-text">{project?.name ?? "Project"}</p>
        <p className="text-lg text-default-500">{project?.owner ?? "0x0"}</p>
        <p className="text-md text-text pt-4">{project?.description ?? "Lorem ipsum dipsum"}</p>
        <Divider/>
        <div className="flex flex-col gap-3 overflow-y-scroll no-scrollbar">
          { project && project.tickets.map((ticket) => (
            <div className="flex flex-col gap-1.5 items-end">
              <Card className="w-full bg-light-background" shadow="sm">
                <CardBody className="flex flex-row items-center gap-3">
                  <div className="flex flex-col gap-2 grow">
                    <p className="text-text">Milestone #{(ticket.id + BigInt(1)).toString()}</p>
                    <p className="grow text-sm text-neutral-500 h-full capitalize">{ticket.description}</p>
                  </div>
                  <Divider orientation="vertical"/>
                  <div className="shrink-0 flex flex-col gap-2">
                    <Checkbox isSelected={ticket.completed} color="primary"><p className="text-sm text-neutral-500">Complete</p></Checkbox>
                    <p className="text-sm text-right font-semibold text-neutral-500">{ticket.reward.toString()} DEV</p>
                  </div>
                </CardBody>
              </Card>
              <Button variant="light" color="primary" size="sm" radius="lg" onClick={() => closeTicket(ticket.id, project).then(reload)}>
                Mark Completed
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}