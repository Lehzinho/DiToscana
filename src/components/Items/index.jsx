import {Container} from "./styles.js";

export const Items = ({nome, ingredientes, preco}) => {
    return (
        <Container>
            <p className="Nome"><b>{nome}</b></p>
            {ingredientes &&
                <div>
                    {ingredientes.map((item, index) =>
                        <p key={index}>
                            {(index === 0 ? "( " : "") + item + (index === ingredientes.length - 1 || index === ingredientes.length - 2 ? " " : ", ") + (index === (ingredientes.length - 2) ? "e " : "") + (index === (ingredientes.length - 1) ? " )" : "")}
                        </p>
                    )}
                </div>
            }
            {preco &&   <span></span>}
            {preco &&   <p>{preco}</p>}
        </Container>
    )
}
