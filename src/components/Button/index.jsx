import React from "react";
import { Container } from "./sytles";

export const Button = ({texto, tipo}) => {
  return <Container tipo={tipo}>{texto}</Container>;
};
