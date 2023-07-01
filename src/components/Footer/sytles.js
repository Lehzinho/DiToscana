import styled from "styled-components";


export const Container = styled.footer `
padding: 20px clamp(20px, 6vw, 220px);
background-color: rgba(51, 51, 51, 0.5);
grid-area: footer;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
color: white;
text-align: center;
position: relative;
p{
    margin: 10px 0;
    margin-left: 25px;
    flex-basis: 100%;
}

@media (max-width: 850px) {
    flex-direction: column;
    gap: 20px;
    p{
        flex-basis: auto;
    }
}
`;

export const Address = styled.address `
width: 26.4%;
font-family: ${({theme})=> theme.FONTS[0]};
@media (max-width: 850px) {
    width: 100%;
}
`;
export const Social = styled.div `
margin: 0 auto;
width: 26.4%;
font-size: clamp(30px, 9vw, 50px) ;
justify-content: center;
display: flex;
gap: 20px;
`;
export const Nav = styled.nav `
width: 26.4%;

@media (max-width: 850px) {
display: none;
}
`;