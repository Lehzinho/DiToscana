import { BrowserRouter } from "react-router-dom";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar/NavBar";
import { Container } from "../pages/Home/styles";
import { AppRoutes } from "./app.routes";

export function Routes() {
  return (
    <BrowserRouter>
      <Container>
        <NavBar />
        <AppRoutes />
        <Footer />
      </Container>
    </BrowserRouter>
  );
}
