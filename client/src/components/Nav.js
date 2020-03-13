import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from "reactstrap";
import "../styles/Nav.css";

const NavPort = props => {
  console.log(props);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Ocean Port</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink>Learning</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                {props.name}
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href="/reeffishinfo">Reef Info</DropdownItem>
                <DropdownItem href="/sharkinfo">Shark Info</DropdownItem>
                <DropdownItem href="/mammalsinfo">Mammal Info</DropdownItem>
                <DropdownItem href="/conservationinfo">Conservation Info</DropdownItem>
                
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink>Quizzes</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                {props.name}
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href="/reeffishquiz">Reef Quiz</DropdownItem>
                <DropdownItem href="/sharkquiz">Shark Quiz</DropdownItem>
                <DropdownItem href="/mammalsquiz">Mammal Quiz</DropdownItem>
                <DropdownItem href="/conservationquiz">Conservation Quiz</DropdownItem>
                
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="/badges/">Scores and Badges</NavLink>
            </NavItem>
          </Nav>

         
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavPort;
