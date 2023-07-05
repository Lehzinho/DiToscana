import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.COLORS.GRAY_LIGHT};
  margin: 40px;
  padding: 0 40px;
  border-radius: 10px;

  h1 {
    margin-top: 40px;
    font-family: ${({ theme }) => theme.FONTS[1]};
    font-size: clamp(1.125rem, 5vw, 3.75rem);
  }

  span {
    flex: 1;
    border-bottom: 3px dotted black;
  }

  .Title {
    display: flex;
    justify-content: space-between;
  }

  .Info {
    margin: 40px 0;
    text-align: center;
    font-weight: bold;
    color: ${({ theme }) => theme.COLORS.RED_DARK};
  }

  a {
    margin: 45px auto;
  }
  @media (max-width: 1000px) {
    margin: 0;
  }
`;
export const Bordas = styled.div`
  div {
    margin: 12px;
  }
`;
export const PizzaTradicional = styled.div``;
export const PizzaEspecial = styled.div``;
export const PizzaDoces = styled.div``;
export const Esfihas = styled.div``;
export const EsfihaDoce = styled.div`
  h1 {
    margin-bottom: 40px;
  }
`;
