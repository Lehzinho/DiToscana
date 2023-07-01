import Pizzaria from "../../assets/FotoPizzaria.png";
import { Button } from "../../components/Button/index";
import { Content } from "./styles.js";

export const About = () => {
  return (
    <Content>
      <h2>Sobre nós...</h2>
      <img src={Pizzaria} alt="" />
      <div>
        <p>
          Somos uma empresa familiar estabelecida em Caldas Novas desde janeiro
          de 2021, localizada na Av. Caxambú, em um bairro tranquilo da cidade.
          Nossa missão é oferecer uma experiência única em pizzas, com uma massa
          diferenciada e produtos de alta qualidade. Especializados em massa
          fina e suave, aprimoramos nossas técnicas durante um curso ministrado
          por um italiano na Irlanda.
        </p>
        <p>
          A qualidade da nossa pizza está diretamente relacionada ao cuidado e à
          dedicação que dedicamos à preparação da massa. Utilizamos um sistema
          de longa duração, onde a massa é maturada por 72 horas, garantindo que
          não ocorra fermentação após o consumo. Dessa forma, podemos
          proporcionar uma pizza excepcional em todos os aspectos. Estamos de
          portas abertas para receber você e sua família. Será um prazer tê-los
          como nossos clientes. Convidamos você a fazer uma visita ao nosso
          estabelecimento e desfrutar de uma experiência gastronômica única.
          Além disso, oferecemos a opção de fazer seu pedido, para que você
          possa saborear nossas deliciosas pizzas no conforto da sua casa.
          Esperamos poder atendê-lo em breve!
        </p>
        <Button texto="Peça já!" tipo={true} />
      </div>
    </Content>
  );
};
