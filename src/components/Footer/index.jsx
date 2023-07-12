import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillPhone,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { NavLink } from "react-router-dom";

import { Address, Container, Nav, Social } from "./sytles";
export const Footer = () => {
  return (
    <Container>
      <Address>
        <ul>
          <li>
            <AiFillPhone />
            064-99245-0606
          </li>
          <li>Avenida Caxambú Qd. 25 Lt. 08E</li>
          <li>Caldas do Oeste - Caldas Novas</li>
          <li>Goiás - Brasil</li>
        </ul>
      </Address>
      <Social>
        <a href="https://www.instagram.com/ditoscanapizzaria/">
          <AiFillInstagram />
        </a>
        <a href="https://www.facebook.com/ditoscanapizzaria">
          <AiFillFacebook />
        </a>
        <a href="https://wa.me/64992450606">
          <AiOutlineWhatsApp />
        </a>
      </Social>
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
      <p>Copyright &copy; Todos os direitos reservados</p>
    </Container>
  );
};
