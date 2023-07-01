import { FaSearchLocation } from "react-icons/fa";
import { Contato, Content, Horario, Local } from "./styles.js";

export const Contact = () => {
  return (
    <Content>
      <Contato>
        <h2>Contato</h2>
        <form>
          <input type="text" />
          <input type="text" />
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <button>Enviar</button>
        </form>
      </Contato>
      <Horario>
        <h2>Horário de Funcionamento</h2>
        <table>
          <tr>
            <td>Domingo</td>
            <td>18:00 - 23:00 h</td>
            <td>Quinta-feira</td>
            <td>18:00 - 22:00 h</td>
          </tr>
          <tr>
            <td>Segunda</td>
            <td>18:00 - 22:00 h</td>
            <td>Sexta-feira</td>
            <td>18:00 - 23:00 h</td>
          </tr>
          <tr>
            <td>Terça</td>
            <td className="fechado">Fechado</td>
            <td>Sábado</td>
            <td>18:00 - 23:00 h</td>
          </tr>
          <tr>
            <td>Quarta</td>
            <td>18:00 - 22:00 h</td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </Horario>
      <Local>
        <h2>
          Onde nos encontrar <FaSearchLocation />
        </h2>
        <div className="container">
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3799.965557181493!2d-48.60881998511854!3d-17.746261987864514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a7317e991783bf%3A0x53d217d9375bd569!2sDi%20Toscana%20Pizzaria!5e0!3m2!1spt-BR!2sbr!4v1688231356270!5m2!1spt-BR!2sbr"
              width="600"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="address">
            <h3>Di Toscana Pizzaria</h3>
            <p>Avenida Caxambú, Qd 25 Lt 08E sala 5</p>
            <p>Caldas do Oeste</p>
            <p>Caldas Novas, Goiás - Brasil</p>
            <p>(64) 99245-0606</p>
          </div>
        </div>
      </Local>
    </Content>
  );
};
