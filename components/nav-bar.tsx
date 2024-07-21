
"use client"
import React from "react";
import { 
  Navbar, 
  NavbarBrand, 
  NavbarContent, 
  NavbarItem, 
  Link, 
  Button
} from "@nextui-org/react";
import { Logo } from "./logo";
import ConnectButton from "./ConnectButton";

const Nav: React.FC = () => {
  return (
    <Navbar maxWidth="full" classNames={{"wrapper": "p-5"}}>
      <NavbarBrand>
        <i className=""></i>
        <p className="font-bold text-inherit"> Branchy </p>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/projects">
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page" color="secondary">
            Create
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/userProfile">
            Profile
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <ConnectButton/>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

export default Nav;
