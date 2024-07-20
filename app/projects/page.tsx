"use client"

import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Button } from "@nextui-org/react";


export default function Page() {
  return (
    <div className="flex flex-col items-center px-32 py-20">
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
            <Button color="primary" variant="flat">
              Create +
            </Button>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p className="text-right text-sm font-light">Plan, finance and roadmap your next big project</p>
        </CardBody>
      </Card>
    </div>
  )
}