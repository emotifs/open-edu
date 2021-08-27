import React, { useState, useEffect } from 'react';
import{
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem, 
    Container, 
    Dropdown, 
    DropdownItem, 
    DropdownToggle, 
    DropdownMenu, 


} from 'reactstrap';
import { Link } from 'react-router-dom';

const NavSec = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;

        if(offset > 200) {
            setScrolled(true);
        } else{
            setScrolled(false);
        }
    }

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);
  const toggle1 = () => setDropdownOpen(prevState => !prevState);
  const toggle2 = () => setDropdownOpen2(prevState => !prevState);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })

    let x = ['navbar'];
    if(scrolled) {
        x.push('fixed');
        x.push('nav-active');
    }

    return(
        <Container>
            <Navbar className={x.join(" ")} light expand="md">
                <Link to="/" className="navbar-brand">
                    Open <span>Edu</span>
                </Link>

                <NavbarToggler onClick={toggle} className="toggler"/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav navbar>
                        <NavItem>
                            <Link to="/">Home</Link>
                        </NavItem>
                        <NavItem>
                            <Dropdown isOpen={dropdownOpen2} toggle={toggle2}>
                            <DropdownToggle className="dropdown-projects" caret>
                                Study
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu">
                                <DropdownItem><Link to="/School">School</Link></DropdownItem>
                                <DropdownItem><Link to="/Univer">University</Link></DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        </NavItem>
                        <NavItem>
                            <Link to="/opportunities">Opportunities</Link>
                        </NavItem>
                        <NavItem>
                        <Dropdown isOpen={dropdownOpen} toggle={toggle1}>
                        <DropdownToggle className="dropdown-projects" caret>
                            Portfolio
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu">
                            <DropdownItem  className="."><Link to="/create-project">Create Project</Link></DropdownItem>
                            <DropdownItem className="."><Link to="/volunteering">Volunteering</Link></DropdownItem>
                            <DropdownItem className="."><Link to="/all-projects">Projects</Link></DropdownItem>
                        </DropdownMenu>
                        </Dropdown>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </Container>
    )
}

export default NavSec;