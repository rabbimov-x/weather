import styled ,{ createGlobalStyle , css } from "styled-components";
import {ReactComponent as svg1} from './Icons/hour.svg'
import {ReactComponent as svg2} from './Icons/Search.svg'
import {ReactComponent as svg3} from './Icons/map.svg'

// import {ReactComponent as svg21} from './icons/unhappy.svg'



const allCommon = css `
width: ${({w})=>w? w : `100%`};
height: ${({h})=>h? h :`auto`}; 
position: ${({position})=>position? position : `relative`};
display: ${({display})=>display ? display : "block"};
flex-direction: ${({flex})=> flex? flex : "none"};
flex-wrap: ${({nowrap})=> nowrap? "nowrap" : "wrap"};
justify-content: ${({justify})=>justify? justify: "left" };
align-items: ${({align})=>align? align: "center" };
text-align: ${({textC})=>textC? textC : "left"};
padding: ${({pd})=>pd? pd : "0"};
margin: ${({mr})=>mr? mr : "0"};
color: ${({cl})=>cl? cl : "var(--cl-white)"};
`
const font = css`
font-family: ${({fontF})=> fontF ? fontF : "var(--familyL)"} ;
font-size: ${({size})=> size ? size : "var(--size24)"};
font-weight: ${({bold})=> bold ? bold : "300"};
padding: ${({pd})=>pd? pd : "0"};
margin: ${({mr})=>mr? mr : "0"};
display: ${({display})=>display ? display : "block"};

`

export const  GlobalStyle = createGlobalStyle`
  
  body{
      width: 100%;
      overflow-x: hidden;
      box-sizing: border-box;
      padding: 0;
      margin: 0;

  }

  *{
      box-sizing: border-box;
  }
`
export const H1 = styled.h1`
${font}

color : ${({color})=>color ? color : "var(--cl-white)"};
text-transform: uppercase;
text-shadow: -1.51px 2.26px 0.75px rgba(0, 0, 0, 0.1);
`


export const P = styled.p`
${font}
width: ${({w})=> w ? w : "" };
line-height: 120%;
font-style: normal;
color : ${({color})=>color ? color : "var(--cl-white)"};
text-shadow: ${({tSh})=> tSh ? "-1.39839px 2.09758px 0.699193px rgba(0, 0, 0, 0.1)" : "-1.51px 2.26px 0.75px rgba(0, 0, 0, 0.1)"};
filter: ${({fSh})=> fSh ? "drop-shadow(-4.51px 2.26px 0.75px rgba(0, 0, 0, 0.15))" : "none"};
`

export const Container = styled.div`
width: 100%;
display: ${({display})=>display ? display : "flex"};
flex-direction: ${({flex})=> flex? "column" : "none"};
flex-wrap: ${({nowrap})=> nowrap? "nowrap" : "wrap"};
justify-content: ${({justify})=>justify? justify: "left"};
align-items: ${({align})=>align? "center": "" };
padding: ${({pd})=>pd? pd : "0"} 5%;
`
export const Col12 = styled.div`    
      ${allCommon}
      width: 100%;
      padding: ${({pd})=>pd? pd : "0 var(--mp15)"} ;
`
export const Col10 = styled(Col12)`
    width: 83.333%;
`
export const Col8 = styled(Col12)`
    width: 66.666%;
    @media (max-width: 956px) {
        width: 100%;
    }
`
export const Col6 = styled(Col12)`
    width: 50%;
`
export const Col4 = styled(Col12)`
    width: 33.333%;
    @media (max-width: 757px) {
        width: 50%;
    }
    @media (max-width: 576px) {
        width: 80%;
        margin: 0 auto;
        padding: 0 auto;
    }
`
export const Col3  = styled(Col12)`
    width: 25%;
    @media (max-width: 757px) {
        width: 33.333%;
    }
    @media (max-width: 576px) {
        width: 50%;
        margin: 0 auto;
        padding : 0 auto ;
    }
    
`
export const Div = styled.div`
${allCommon}
top: ${({top})=>top? top : ""};
left: ${({left})=>left? left : ""};
right: ${({right})=>right? right : ""};
bottom: ${({bottom})=>bottom? bottom : ""};
`
export const Line = styled.div`
${allCommon}
height: 0;
border: 0.6px solid #FFFFFF;
`

export const LinkA = styled.a`
text-decoration: none;
cursor: pointer;
font-family: var(--font-familyR);
font-size: var(--size12);
font-weight: ${({bold})=> bold ? "600" : "500"};
display: flex;
align-items: center;
margin: ${({mr})=>mr? mr : "0 5px"};
color: ${({color})=> color ? color : "var(--cl-white)"};

&:hover{
    color: var(--cl-red);
    fill:red;
}
`
export const Icon = styled.div`

`
// Svg larga stel berilgan

const common = css`
width: ${({w})=>w? w : `var(--icon-w12)`};
height: auto;
margin: ${({mr})=>mr? mr : "0"};
display: ${({display})=>display? display : "block" };

 & path{
     fill: ${({color})=>color ? color : ``};
     
 }
`

export const  Img = styled.div`
${allCommon}

&> img{ 
    width: 100%;
    height: auto;
}
`

Icon.Hour = styled(svg1)`

${common}
`
Icon.Search = styled(svg2)`

${common}
`
Icon.Map = styled(svg3)`

${common}
`
