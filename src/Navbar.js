import React from 'react';
import {IoIosMusicalNotes} from 'react-icons/io';
import styled from 'styled-components';

const Navbar = ({ openLibrary, setOpenLibrary })=>{
  const toggleLibrary = ()=>{
    setOpenLibrary(!openLibrary);
  }

  return (
    <Nav>
      <Heading>Vibes</Heading>
      <Button className={openLibrary ? 'active' : ''} title='library' onClick={toggleLibrary}><Span>Library</Span><IoIosMusicalNotes style={{fontSize: '1.5rem', pointerEvents: 'none'}}/></Button>
    </Nav>
  )
}

export default Navbar;


const Nav = styled.nav`
  width: 100%;
  margin: auto;
  padding: 2rem;
  display: flex;
  align-items:center;
  justify-content: space-between;
  
  @media screen and (min-width: 1024px){
    width: 85%;
  }
  @media screen and (min-height: 1300px){
    padding: 4rem;
  }
`

const Heading =  styled.h1`
  font-size: 2rem;
  letter-spacing: 1px;
  @media screen and (min-width: 1024px){
    font-size: 2.5rem;
  }
`

const Button = styled.button`
  background: none;
  cursor: pointer;
  border: 1px solid #000;
  font-size: inherit;
  font-family: inherit;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  z-index: 10;
  box-shadow: 5px 5px 0px rgba(0,0,0,0.6);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 6px 6px 0px rgba(0,0,0,0.4);
  }

  &:focus{
    outline-offset: 0.5rem;
    outline-width: 1px;
    outline-color: rgba(0,0,0,0.1);
  }

  &.active {
    box-shadow: 1px 1px 0px rgba(0,0,0,0.7);
  }

  @media screen and (min-width: 1024px){
    z-index: 1;
  }
`

const Span = styled.span`
  font-size: 1.1rem;
  letter-spacing: 1px;
  margin-right: 0.3rem;
  @media screen and (min-width: 1024px){
    font-size: 1.2rem;
  }
`