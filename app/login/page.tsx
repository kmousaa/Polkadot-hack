"use client"
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { Button } from "@nextui-org/button";
import {Input} from "@nextui-org/input";
import {Card, CardBody, Divider} from "@nextui-org/react";
import Nav from "@/components/nav-bar";
import React, { useEffect, useState } from 'react';

import { web3Enable, web3AccountsSubscribe } from '@polkadot/extension-dapp';




export default function Login() {
    
    
    return (
        <div className="flex items-center justify-center h-screen">
            <Card className="w-96 p-1 ">
                <CardBody>
                    <p className="p-2">Log in</p>
                    <div className="flex w-full flex-wrap md:flex-nowrap gap-2">
                        <Input type="email" label="Email" placeholder="Enter your email" />
                    </div>
                </CardBody>
                
                <CardBody>
                    <div className="flex w-full flex-wrap md:flex-nowrap gap-2">
                        <Input type="email" label="Email" placeholder="Enter your email" />
                    </div>
                </CardBody>
                
                    <Button className="w-48 self-center p-4 m-1" color="primary">
                        Log In
                    </Button>
                    <Button className="w-48 self-center p-4" color="secondary" >
                        Sign Up
                        <Link href="/signUp"></Link>
                    </Button>
                
                
            </Card>
        </div>
        
        
    );
}    