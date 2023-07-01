import styled from "styled-components";

export const Content = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  h2 {
    margin-top: 1.25rem;
    color: ${({ theme }) => theme.COLORS.GRAY_LIGHT};
    font-weight: 400;
  }
  img {
    margin: 2.5rem auto;
    width: clamp(18rem, 75vw, 40rem);
    height: clamp(13rem, 55vw,28.125rem);
    flex-shrink: 0;
  }
  div {
    border-radius: 10px;
    margin: 20px;
    text-align: center;
    background-color: ${({ theme }) => theme.COLORS.GRAY_LIGHT};
    padding: 20px;
    p {
      line-height: 28px;
      font-family: ${({ theme }) => theme.FONTS[0]};
      margin: 10px auto;
      text-align: center;
      width: 80%;
    }
    button {
      margin: 15px 0;
    }
  }
`;