import styled from "styled-components"

export const Container = styled.section`
  width: clamp(300px, 60vw, 400px);
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 40px 60px;
  border-radius: 20px;
  min-height: 500px;
  text-align: center;
  background-color: ${({theme}) => theme.COLORS.TRANSPARENT};
  color: ${({theme}) => theme.COLORS.TEXT_COLOR};
.stars{
  display: flex;
  gap: 10px;
  margin: 0;
}
  p {
    font-size: 0.875rem;
    font-family: ${({theme}) => theme.FONTS[0]};
    font-weight: 700;
  }

  H3 {
    font-size: 1.25rem;
    font-family: ${({theme}) => theme.FONTS[1]};

  }

  svg {
    font-size: 2.5rem;
    color: #EBC351;
  }
`