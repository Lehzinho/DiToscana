import React from "react";
import { Container } from "./sytles";

export const Button = ({ texto, tipo }) => {
  return (
    <Container href="https://wa.me/64992450606" target="_blank" tipo={tipo}>
      {texto}
    </Container>
  );
};
