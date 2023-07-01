import React from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { avaliacoes } from "../../Content/Avaliacoes.js";
import Calzone from "../../assets/Calzone.png";
import Combo1 from "../../assets/Combo1.png";
import Pizza1 from "../../assets/HomePizza1.png";
import Pizza2 from "../../assets/Pizza1.png";
import Pizza3 from "../../assets/Pizza2.png";
import Pizza4 from "../../assets/Pizza3.png";
import { Button } from "../../components/Button";
import { Comments } from "../../components/Comments/index.jsx";
import { Avaliacoes, Combos, Content, Header, Produtos } from "./styles";

export const Home = () => {
  return (
    <Content>
      <Header>
        <h2>O sabor que conquista</h2>
        <img src={Pizza1} alt="Pizza" />
      </Header>
      <Combos>
        <div>
          <h2>Combo do mês</h2>
          <p>
            Cada mês lançaremos uma promoção <br /> especial. Aprovite!
          </p>
        </div>
        <div>
          <img src={Combo1} alt="" />
          <img src={Combo1} alt="" />
          <Button texto="Peça Já" tipo={true} />
        </div>
      </Combos>
      <Produtos>
        <h2>Nossos Produtos</h2>
        <div>
          <AiOutlineLeft />
          <div className="Images">
            <img src={Pizza4} alt="" />
            <img src={Pizza2} alt="" />
            <img src={Pizza3} alt="" />
            <img src={Calzone} alt="" />
          </div>
          <AiOutlineRight />
        </div>
      </Produtos>
      <Avaliacoes>
        <h2>Avaliações</h2>
        <div className="comments">
          {avaliacoes.map((item) => (
            <Comments
              nome={item.nome}
              grade={item.grade}
              context={item.context}
            />
          ))}
        </div>
        <Button texto="Faça seu pedido!" tipo={false} />
      </Avaliacoes>
    </Content>
  );
};
