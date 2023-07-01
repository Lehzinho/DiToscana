import {
  EsfihasAbertas,
  EsfihasDoces,
  PizzasDoces,
  PizzasExpeciais,
  PizzasTradicionais,
} from "../../Content/Cardapio.js";
import { Button } from "../../components/Button/index.jsx";
import { Items } from "../../components/Items/index.jsx";
import {
  Bordas,
  Content,
  EsfihaDoce,
  Esfihas,
  PizzaDoces,
  PizzaEspecial,
  PizzaTradicional,
} from "./styles.js";

export const Cardapio = () => {
  return (
    <Content>
      <Bordas>
        <h1>Bordas Recheadas</h1>
        <div className="Title">
          <p>Catupiry, Cheddar</p>
          <span></span>
          <p>R$10.00</p>
        </div>
        <div className="Title">
          <p>Chocolate, Creme de avelã</p>
          <span></span>
          <p>R$10.00</p>
        </div>
        <div className="Title">
          <p>Mussarela</p>
          <span></span>
          <p>R$15.00</p>
        </div>
      </Bordas>
      <PizzaTradicional>
        <div className="Title">
          <h1>Pizzas Tradicionais </h1>
          <span></span>
          <h1>R$45.00</h1>
        </div>
        <div className="Info">
          <p>Cada Ingrediente adicionado R$6.00</p>
          <p>Mussarela adicionada R$12.00</p>
        </div>
        {PizzasTradicionais.map((item) => (
          <Items
            key={item.name}
            nome={item.name}
            ingredientes={item.ingredients}
          />
        ))}
      </PizzaTradicional>
      <PizzaEspecial>
        <div className="Title">
          <h1>Pizzas Especiais </h1>
          <span></span>
          <h1>R$60.00</h1>
        </div>
        <div className="Info">
          <p>Cada Ingrediente adicionado R$6.00</p>
          <p>Mussarela adicionada R$12.00</p>
        </div>
        {PizzasExpeciais.map((item) => (
          <Items
            key={item.name}
            nome={item.name}
            ingredientes={item.ingredients}
          />
        ))}
      </PizzaEspecial>
      <PizzaDoces>
        <div className="Title">
          <h1>Pizzas Doces </h1>
          <span></span>
          <h1>R$45.00</h1>
        </div>
        <div className="Info">
          <p>Cada Ingrediente adicionado R$6.00</p>
          <p>Mussarela adicionada R$12.00</p>
        </div>
        {PizzasDoces.map((item) => (
          <Items
            key={item.name}
            nome={item.name}
            ingredientes={item.ingredients}
          />
        ))}
      </PizzaDoces>
      <Esfihas>
        <div className="Title">
          <h1>Esfihas Abertas </h1>
        </div>
        <div className="Info">
          <p>Cada Ingrediente adicionado R$ 1.00</p>
          <p>Mussarela adicionada R$ 2,00</p>
        </div>
        {EsfihasAbertas.map((item) => (
          <Items key={item.name} nome={item.name} preco={item.preco} />
        ))}
      </Esfihas>
      <EsfihaDoce>
        <div className="Title">
          <h1>Esfihas Doces </h1>
        </div>
        {EsfihasDoces.map((item) => (
          <Items key={item.name} nome={item.name} preco={item.preco} />
        ))}
      </EsfihaDoce>
      <Button texto="Faça seu Pedido" tipo={false} />
    </Content>
  );
};
