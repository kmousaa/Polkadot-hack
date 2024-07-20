"use client"

import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { Button } from "@nextui-org/button";
import Nav from "@/components/nav-bar";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <ParallaxProvider>
      <Parallax speed={-10}>
        <div>
          <Nav />
          <div className="flex bg-background flex-col h-screen items-center justify-center gap-4 py-8 md:py-10">
            <Hero/>
            <Button color="primary">Hello World!</Button>
            <Button color="secondary">Hello World!</Button>
          </div>
        </div>
      </Parallax>
    </ParallaxProvider>
    
  );
}