import { Route, Routes } from "react-router-dom";
import { About } from "../pages/About/index.jsx";
import { Cardapio } from "../pages/Cardapio/index.jsx";
import { Contact } from "../pages/Contact/index.jsx";
import { Home } from "../pages/Home/index.jsx";

4;
export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cardapio" element={<Cardapio />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
