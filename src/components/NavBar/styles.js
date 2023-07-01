import styled from "styled-components";

export const Container = styled.div `
  width: 100%;
  grid-area: nav;
`;

export const Logo = styled.div `
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: rgba(51, 51, 51, 0.5);
  padding-top: 10px;

  img {
    width: clamp(80px, 25vw, 300px);
    height: clamp(45px, 15vw, 170px);
  }

  @media (max-width: 500px) {
    justify-content: space-between;
  }
`;

export const Nav = styled.nav `
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  
  justify-content: center;
  align-self: start;



  ul {
    font-size:1.5rem;
    margin-top: 40px;
    display: flex;
    flex-wrap: wrap;
    
    gap: 40px;
  }

  @media (max-width: 500px) {
    display: none;
  }
`;

export const MobileNav = styled.div `
  width: 30px;
  height: 40px;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  text-justify: inter-word;
  margin-right: 10px;
  right: 0;
  display: none;
  font-size: 10px;
  position: relative;

  a,
  a:visited {
    font-size: 0.875rem;
    font-family: ${({ theme }) => theme.FONTS[0]};
    color: ${({ theme }) => theme.COLORS.GRAY_LIGHT};
  }

  span {
    width: ${(props) => (props.activeValue ? "3px" : "90%")};
    transform: rotate(${(props) => (props.activeValue ? "90deg" : "")});
    display: inline-block;
    height: 2px;
    border-radius: 15px;
    box-shadow: 0 10px 0 white, 0 -10px 0 white;
    margin-top: 20px;
    background-color: red;
    transition: all 0.5s ease;
  }

  div {
    width: ${(props) => (props.activeValue ? "90px" : "0")};
    overflow: hidden;
    text-align: left;
    position: absolute;
    right: 0;
    bottom: -110px;
    padding: ${(props) => (props.activeValue ? "10px" : "0")};
    border-radius: 5px;
    box-shadow: 0 0 3px #3f3f3f;
    background-color: ${({ theme }) => theme.COLORS.TEXT_COLOR};
    transition: all 0.5s ease;

    ul {
      white-space: nowrap;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      gap: 5px;
    }
  }

  @media (max-width: 500px) {
    display: inline-block;
  }
`;