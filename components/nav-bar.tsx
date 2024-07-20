import React from "react";
import { 
  Navbar, 
  NavbarBrand, 
  NavbarContent, 
  NavbarItem, 
  Link, 
  Button
} from "@nextui-org/react";

const Nav: React.FC = () => {
  return (
    <Navbar maxWidth="full" classNames={{"wrapper": "p-5"}}>
      <NavbarBrand>
        <i className="fa-regular fa-handshake gap-4"></i>
        <p className="font-bold text-inherit"> RewardTix </p>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Change
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page" color="secondary">
            Change
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Change
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="/login">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="/signUp" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

export default Nav;
