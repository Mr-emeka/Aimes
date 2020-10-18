import React from 'react'
import Toggler from '../../../component/custom/toggler/toggle'
import { Link } from 'react-router-dom'
import BrandName from './brand.styled'
import NavList from './nav-list.styled'
import { ReactComponent as Hamburger } from '../../../assets/icons/ham.svg';
import styled from 'styled-components'


const HamburgerContainer = styled.span`
align-self: center;
display:none;
@media screen and (max-width:780px){
    display:block;
}
svg{
    fill:  ${({ theme }) => theme.text};
    height: auto;
    width: 1.5rem;
    cursor:pointer;
}
`

export default ({ toggleTheme, theme, history, open, setOpen }) => {
    // const handleBackClick = (ref) => {
    //     `${ref}`.current.scrollIntoView({ behavior: 'smooth' })
    // }
    return (<nav className="navbar  p-4">
        <div className="d-flex align-items-center navbar-left">
            <BrandName className="brand"><Link to="/"><strong>Aimes</strong> </Link></BrandName>
        </div>
        <div className="d-flex navbar-right">
            {open ? '' : <HamburgerContainer className="mr-4" onClick={()=>setOpen(true)}>
                <Hamburger />
            </HamburgerContainer>}

            <NavList className="d-flex align-self-end mr-5  nav-list">
                <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                <li className="nav-item"><Link to="#about" className="nav-link">About</Link></li>
                <li className="nav-item"><Link to="#portfolio" className="nav-link">Portfolio</Link></li>
                <li className="nav-item"><Link to="/blog" className="nav-link">Blog</Link></li>
                <li className="nav-item"><Link to="#contact" className="nav-link">Contact</Link></li>
            </NavList>
            <Toggler toggleTheme={toggleTheme} theme={theme} />
        </div>
    </nav>)
}