import styled from "styled-components"

export const Container = styled.button `
  display: inline-block;
  width: fit-content;
  height: 50px;
  padding: 12px 48px;
  margin-top: -25px;
  font-family: ${({theme}) => theme.FONTS[1]};
  background-color: ${({theme}) => theme.COLORS.RED_DARK};
  color: ${({theme}) => theme.COLORS.GRAY_LIGHT};
  border: none;
  border-radius: 5px;
  background-color: ${(props) => 
          (props.tipo ? 
                  (({theme})=> theme.COLORS.RED_DARK) : 
                  ({theme})=> theme.COLORS.GREEN_DARK)};
`