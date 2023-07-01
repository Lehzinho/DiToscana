import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 20px;
  display: flex;
  gap: 20px;

  font-family: ${({theme}) => theme.FONTS[0]};

  .Nome {
    white-space: nowrap;
  }
  div {

    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    font-style: italic;
  }
  @media (max-width: 700px) {
    flex-wrap: wrap;
  }

`
