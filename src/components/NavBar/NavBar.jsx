import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { Container, Logo, MobileNav, Nav } from "./styles";

export const NavBar = () => {
  const [active, setActive] = useState(false);
  return (
    <Container>
      <Logo>
        <img src={logo} alt="" />

        <MobileNav onClick={() => setActive(!active)} activeValue={active}>
          <span></span>
          <div>
            <ul>
              <NavLink onClick={() => setActive(false)} to="/">
                <li>Início</li>
              </NavLink>
              <NavLink onClick={() => setActive(false)} to="/cardapio">
                <li>Cardápio</li>
              </NavLink>
              <NavLink onClick={() => setActive(false)} to="/about">
                <li>Sobre nós</li>
              </NavLink>
              <NavLink onClick={() => setActive(false)} to="/contact">
                <li>Contato</li>
              </NavLink>
            </ul>
          </div>
        </MobileNav>
      </Logo>
      <Nav>
        <ul>
          <NavLink to="/">
            <li>Início</li>
          </NavLink>
          <NavLink to="/cardapio">
            <li>Cardápio</li>
          </NavLink>
          <NavLink to="/about">
            <li>Sobre nós</li>
          </NavLink>
          <NavLink to="/contact">
            <li>Contato</li>
          </NavLink>
        </ul>
      </Nav>
    </Container>
  );
};
