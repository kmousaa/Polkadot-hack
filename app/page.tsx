"use client"

import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { Button } from "@nextui-org/button";
import Nav from "@/components/nav-bar";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import Hero from "@/components/hero";
import InfoHero from "@/components/infoHero";

export default function Home() {
  return (
    <ParallaxProvider>
      <Nav />
      <Parallax speed={-10}>
        <div>
          <div className="flex bg-background flex-col h-screen items-center justify-center gap-4 py-8 md:py-10">
            <Hero/>
            <Button color="primary">Hello World!</Button>
            <Button color="secondary">Hello World!</Button>
          </div>
          <div className="flex bg-background flex-col h-screen items-center justify-center gap-4 py-8 md:py-10">
            <InfoHero/>
          </div>
        </div>
      </Parallax>
    </ParallaxProvider>
    
  );
}
