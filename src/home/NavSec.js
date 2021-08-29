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
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

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


    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })

    let x = ['navbar'];
    if(scrolled) {
        x.push('fixed');
        x.push('nav-active');
    }

    
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);
  const [dropdownOpen3, setDropdownOpen3] = useState(false);
  const toggle3 = () => setDropdownOpen3(prevState => !prevState);
  const toggle1 = () => setDropdownOpen(prevState => !prevState);
  const toggle2 = () => setDropdownOpen2(prevState => !prevState);

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
                            <Link to="/">Bosh Menyu</Link>
                        </NavItem>
                        <NavItem>
                            <Dropdown isOpen={dropdownOpen2} toggle={toggle2}>
                            <DropdownToggle className="dropdown-projects" caret>
                                Muassasa
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu">
                                <DropdownItem><Link to="/School">Maktab</Link></DropdownItem>
                                <DropdownItem><Link to="/Univer">Universitet</Link></DropdownItem>
                                <DropdownItem><Link to="/center">O'quv Markaz</Link></DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        </NavItem>
                        <NavItem>
                            <Link to="/opportunities">Imkoniyatlar</Link>
                        </NavItem>
                        <NavItem>
                        <Dropdown isOpen={dropdownOpen} toggle={toggle1}>
                        <DropdownToggle className="dropdown-projects" caret>
                            Portfel
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu">
                            <DropdownItem  className="."><Link to="/all-projects">Loyihalar</Link></DropdownItem>
                            <DropdownItem className="."><Link to="/portfolio">Mening portfelim</Link></DropdownItem>
                        </DropdownMenu>
                        </Dropdown>
                        </NavItem>
                        <NavItem>
                        <Dropdown isOpen={dropdownOpen3} toggle={toggle3}>
                        <DropdownToggle className="dropdown-projects">
                            <AccountCircleIcon/>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu">
                            <DropdownItem  className="."><Link to="/log-in">Kirish</Link></DropdownItem>
                            <DropdownItem className="."><Link to="/sign-up">Ro'yxatdan O'tish</Link></DropdownItem>
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