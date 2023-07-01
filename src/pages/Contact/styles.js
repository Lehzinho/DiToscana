import styled from "styled-components";

export const Content = styled.div `
  padding: 0 145px;
  color: ${({ theme }) => theme.COLORS.GRAY_LIGHT};

  h2 {
    font-weight: normal;
  }

  @media (max-width: 1000px) {
    padding: 0 20px;
  }
`;

export const Contato = styled.div `
  text-align: center;
  width: 570px;
  margin: 40px auto;
  h2{
  margin-bottom: 40px;
}
  form {
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    
    input {
      width: 260px;
    }
  
    textarea {
      width: 95%;
    }
  
  }
`;

export const Horario = styled.div `
  background-color: ${({ theme }) => theme.COLORS.TRANSPARENT};
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: ${({ theme }) => theme.FONTS[0]};
  color: ${({ theme }) => theme.COLORS.TEXT_COLOR};
  margin: 40px auto;
  padding:40px 0;
  h2{
  margin-bottom: 40px;
}
  table {
    td:nth-child(even) {
      text-align: right;
      padding-right: 30px;
    }
  
    width: 60%;
  }
  
  .fechado {
    color: ${({ theme }) => theme.COLORS.RED_DARK};
  }
`;

export const Local = styled.div `
  margin: 40px auto;
h2{
  margin-bottom: 40px;
}
  .container {
    display: flex;
    justify-content: space-between;
    text-align: center;
  }
  .address{
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h3{
      font-size: 2.5rem;
    }
    p{
      margin-top: 10px;
      font-size: 1.5rem;
    }
  }
  svg {
    font-size: 1.75rem;
  }
`;