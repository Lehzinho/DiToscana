import styled from "styled-components";
import Background from "../../assets/peakpx.jpg";

export const Container = styled.div`
  max-width: 1440px;
  display: grid;
  margin: 0 auto;
  grid-template-rows: min-content auto min-content;
  grid-template-areas: "nav" "content" "footer";
  position: relative;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    width: 20px;
    height: 100%;
    z-index: 1;
  }

  &::before {
    left: 0;
    background: linear-gradient(to left, transparent, #757575);
  }

  &::after {
    right: 0;
    background: linear-gradient(to right, transparent, #757575);
  }

  background-image: url(${Background});
  background-repeat: repeat;

  @media (max-width: 1000px) {
    width: 100vw;
    &::before,
    &::after {
      display: none;
    }
  }
`;

export const Content = styled.section`
  height: 100%;
  width: 100%;
  grid-area: content;
  color: white;

  h2 {
    margin-top: 90px;
    font-family: ${({ theme }) => theme.FONTS[2]};
    font-weight: 400;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  img {
    width: clamp(250px, 60vw, 800px);
    height: clamp(150px, 45vw, 485px);
  }
`;

export const Combos = styled.div`
  margin-top: 80px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  padding: 0 80px;
  background-color: ${({ theme }) => theme.COLORS.TRANSPARENT};
  text-align: center;

  p,
  h2 {
    color: ${({ theme }) => theme.COLORS.TEXT_COLOR};
  }

  p {
    line-height: 30px;
    margin-top: 10px;
    font-size: 1.5rem;
  }

  div:nth-child(2) {
    width: clamp(150px, 60vw, 600px);
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 45px 0;
    flex-wrap: wrap;
    gap: 50px;

    img {
      border-radius: 5px;
      width: 230px;
      height: 240px;
    }
  }
  @media (max-width: 900px) {
    padding: 0;
    div:nth-child(2) {
      flex-direction: column;
      padding: 0;
    }
  }
`;

export const Produtos = styled.div`
  --ImgWidth: clamp(250px, 35vw, 400px);
  --ImgGap: clamp(20px, 5vw, 80px);

  text-align: center;
  h2 {
    margin-top: 20px;
  }

  div {
    display: flex;
    align-items: center;

    svg {
      font-size: 3rem;

      &:first-child {
        margin-left: auto;
      }

      &:nth-child(3) {
        margin-right: auto;
      }
    }
  }

  .Images {
    display: flex;
    gap: var(--ImgGap);
    width: calc(var(--ImgWidth) * 2 + var(--ImgGap) + 45px);
    overflow: hidden;
    scroll-behavior: smooth;
    margin-top: 30px;
    padding: 20px;

    img {
      border-radius: 5px;
      width: var(--ImgWidth);
      height: clamp(250px, 35vw, 400px);
      box-shadow: 0 0 15px ${({ theme }) => theme.COLORS.TRASPARENT};
    }
  }
  @media (max-width: 650px) {
    .Images {
      width: 270px;
    }
  }
`;

export const Avaliacoes = styled.div`
  text-align: center;
  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;
    align-items: center;
    margin: 40px 0;
  }
  a {
    margin-bottom: 40px;
  }
`;
