import React, { useState } from "react";
import "./Navbar.css";
import styled from "styled-components";
const Nav = styled.nav`
  min-height: 9vh;
  background: #1c2022;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: sticky;
  top: 0;
`;

const Logo = styled.h1`
  font-size: 25px;
  color: white;
  transition:0.5s;
  :hover{
    transform:scale(1.2);
  }
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  align-items:center;
  li:nth-child(1),li:nth-child(2),li:nth-child(3){
    width:7rem;
    display:flex;
    justify-content:center;
  }
  li:nth-child(2),li:nth-child(4),li:nth-child(6) {
    margin: 0px 20px;
  }
  img{
    width:20px;
    transition:0.2s;
  }
  img:hover{
    transform:scale(1.5);
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const Item = styled.li``;

const Link = styled.a`
  color: white;
  text-decoration: none;
  cursor: pointer;
  
`;

const NavIcon = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  outline: none;
  @media (min-width: 769px) {
    display: none;
  }
`;

const Line = styled.span`
  display: block;
  border-radius: 50px;
  width: 25px;
  height: 3px;
  margin: 5px;
  background-color: #fff;
  transition: width 0.4s ease-in-out;
  :nth-child(2) {
    width: ${(props) => (props.open ? "40%" : "70%")};
  }
`;
const CloseContainer = styled.div`
  text-align: center;
  
`;

const Overlay = styled.div`
  position: absolute;
  height: ${(props) => (props.open ? "91vh" : 0)};
  width: 100vw;
  background: #1c2022;
  transition: height 0.4s ease-in-out;

  @media (min-width: 769px) {
    display: none;
  }
`;

const OverlayMenu = styled.ul`
  list-style: none;
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);

  li {
    opacity: ${(props) => (props.open ? 1 : 0)};
    font-size: 25px;
    margin: 50px 0px;
    transition: opacity 0.4s ease-in-out;
  }

  li:nth-child(2) {
    margin: 50px 0px;
  }
`;

function Navbar(props) {
  const [toggle, toggleNav] = useState(false);
  const [socials, toggleSocials] = useState(false);
  function handleClick(e){
    e.preventDefault()
  }
  return (
    <>
      <Nav>
        <Logo>Yograj</Logo>
        <Menu>
          <Item>
            <Link href="#projects" onClick={handleClick} className="hover-underline-animation"> Projects</Link>
          </Item>
          <Item>
            <Link className="hover-underline-animation" onClick={handleClick}> Skills</Link>
          </Item>
          <Item>
            <Link className="hover-underline-animation" onClick={handleClick}> Contact Me</Link>
          </Item>
          <Item><Link href="https://github.com/yogitheboss" target="_blank"><img src="github.png" alt="" /></Link></Item>
          <Item><Link href="https://www.linkedin.com/in/yograj-rajput-205316229" target="_blank"><img src="LinkedIN_white.png" alt="" /></Link></Item>
          <Item><Link href="https://twitter.com/Yograj_Rajput__" target="_blank"><img src="Twitter_white.png" alt="" /></Link></Item>
        </Menu>
        <NavIcon onClick={() => toggleNav(!toggle)}>
          <Line open={toggle} />
          <Line open={toggle} />
          <Line open={toggle} />
        </NavIcon>
      </Nav>
      <Overlay open={toggle}>
        <OverlayMenu open={toggle}>
          <Item>
            <Link className="hover-underline-animation"> Contact Me</Link>
          </Item>
          <Item>
            <Link className="hover-underline-animation"> Projects</Link>
          </Item>
          <Item>
            <Link className="hover-underline-animation"> Skills</Link>
          </Item>
          <Item>
            <Link onClick={() => toggleSocials(!socials)} className="hover-underline-animation"> Socials</Link>
          </Item>
        </OverlayMenu>
      </Overlay>
      <Overlay open={socials}>
        <OverlayMenu open={socials}>
          <CloseContainer>
            <button onClick={() => toggleSocials(!socials)}>
              <img src="realclose.png" alt="close" />
            </button>
          </CloseContainer>
          <Item>
            <Link className="hover-underline-animation" target="#" href="https://twitter.com/Yograj_Rajput__">
              Twitter
            </Link>
          </Item>
          <Item>
            <Link
            className="hover-underline-animation"
              target="#"
              href="https://www.linkedin.com/in/yograj-rajput-205316229/"
            >
              LinkedIn
            </Link>
          </Item>
          <Item>
            <Link className="hover-underline-animation" target="#" href="https://github.com/yogitheboss">
              Github
            </Link>
          </Item>
        </OverlayMenu>
      </Overlay>
    </>
  );
}

export default Navbar;
