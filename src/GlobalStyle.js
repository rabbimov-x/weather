import styled ,{ createGlobalStyle , css } from "styled-components";
import {ReactComponent as svg1} from './Icons/hour.svg'
import {ReactComponent as svg2} from './Icons/Search.svg'
import {ReactComponent as svg3} from './Icons/map.svg'
import {ReactComponent as svg4} from './Icons/c.svg'
import {ReactComponent as svg5} from './Icons/h.svg'
import {ReactComponent as svg6} from './Icons/hr.svg'
import {ReactComponent as svg7} from './Icons/lc.svg'
import {ReactComponent as svg8} from './Icons/lr.svg'
import {ReactComponent as svg9} from './Icons/s.svg'
import {ReactComponent as svg10} from './Icons/sl.svg'
import {ReactComponent as svg11} from './Icons/sn.svg'
import {ReactComponent as svg12} from './Icons/t.svg'
import {ReactComponent as svg13} from './Icons/hc.svg'
import {ReactComponent as svg14} from './Icons/wind.svg'
import {ReactComponent as svg15} from './Icons/hum.svg'
import {ReactComponent as svg16} from './Icons/run.svg'
import {ReactComponent as svg17} from './Icons/navigation.svg'





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
      background-color: red;

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
export const Button  = styled.button`
${font}
border: none;
outline: none;
padding: ${({pd})=>pd? pd : "5px 10px"};
margin: ${({mr})=>mr? mr : "0"};
border-radius: 4px;
background-color: ${({bg})=>bg? bg : "var(--cl-binafsha)"};
color: var(--cl-white);


@media (max-width: 767px) {
    &> div{
        height: 18px;
        width: 18px !important;
        
    }
    padding: 7px 10px;
    border-radius: 3;
}
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

.map{
    fill: white;
}
`
Icon.C = styled(svg4)`
${common}
width: 50%;

animation:anem 2.5s ease  infinite;
/* transition:all 2s ease; */


@keyframes anem {
    50% {
        transform: scale(1.04);
    }   
    49%{
        transform: scale(1);
    } 
}

`
Icon.H = styled(svg5)`
${common}
width: 100%;
#centershow{
    animation: center-anim 2s ease infinite;
    transform-box: fill-box;
    animation-delay: 2s;
    @keyframes center-anim {
        0%{
            transform: scaleY(0.5);
        }
        50%{
            transform: scaleY(1);
        }
        100%{
            transform: scaleY(1);
        }
    }
}
#centerdoll{
    animation: dol-anim 2s ease infinite;
    transform-box: fill-box;
    transform-origin: bottom;
    animation-delay: 2s;
    @keyframes dol-anim {
        0%{
            transform: translateY(-80%);
        }
        45%{
            transform: translateY(0);
        }
        50%{
            transform: translateY(-30%);
        }
        55%{
            transform: translateY(0);
        }
        60%{
            transform: translateY(-10%);
        }
        65%{
            transform: translateY(0);
        }
        100%{
            transform: translateY(0);
        }
    }
}

`
Icon.HR = styled(svg6)`
${common}
width: 100%;
#rundrop1,#rundrop2,#rundrop3 {
    animation: run-drop1 3s ease infinite;
    transform-box: fill-box;
    @keyframes run-drop1{  
        
        50%{
            transform: translateY(30px);
        }
        
        100%{
            transform: translateY(0px);
        }

    }
}


`
Icon.LC = styled(svg7)`
${common}
width: 100%;
`
Icon.LR = styled(svg8)`
${common}
width: 100%;
#lrundrop{
    animation: run-drop1 3s ease infinite;
    transform-box: fill-box;
    @keyframes run-drop1{  
        
        50%{
            transform: translateY(20px);
        }
        
        100%{
            transform: translateY(0px);
        }

    }
}
`
Icon.S = styled(svg9)`
${common}
width: 100%;
#srundrop{
    animation: run-drop1 3s ease infinite;
    transform-box: fill-box;
    @keyframes run-drop1{  
        
        50%{
            transform: translateY(20px);
        }
        
        100%{
            transform: translateY(0px);
        }

    }
}
`
Icon.SL = styled(svg10)`
${common}
width: 100%;
#sleets{ 
    animation: sleets 3s ease infinite;
    transform-box: fill-box;
    transform-origin: center;
    @keyframes sleets{  
        
        25%{
            transform: translateY(-0.5px);
        }
        50%{
            transform: translateY(0px);
        }
        
        100%{
            transform: translateY(0px);
        }

    }
}
`
Icon.SN = styled(svg11)`
${common}
width: 100%;
#snows{
    animation: snows 3s ease infinite;
    transform-box: fill-box;
    transform-origin: center;
    @keyframes snows{  
        
        50%{
            transform: translateY(-20px);
        }
        
        100%{
            transform: translateY(0px);
        }

    }
}
`
Icon.T = styled(svg12)`
${common}
width: 100%;
#Thunderstorm {
    animation: thunderstorm 4s ease  infinite;
    transform-box: fill-box;
    transform-origin: center;
    @keyframes thunderstorm{  
        
        2%{
            transform: translateY(-10px) rotate(5deg);
        }
        4%{
            transform: translateY(0px) rotate(-5deg);
        }
        6%{
            transform: translateY(-10px) rotate(5deg);
        }
        7%{
            transform: translateY(0px) rotate(-5deg);
        }
        
        8%{
            transform: translateY(0px);
        }

    }
}
`

Icon.HC = styled(svg13)`
${common}
    width: 100%;
    animation: dol-anim 15s  ease infinite;
    /* animation-delay: 2s; */
    animation-timing-function: linear;
    transform-box: fill-box;
    
    
    @keyframes dol-anim {
        30%{
            transform: translateX(20px);
        }
        70%{
            transform: translateX(-20px)}
        100%{
            transform: translateX(0);
        }
    
}
`

Icon.Wind = styled(svg14)`
${common}
`

Icon.Hum = styled(svg15)`
${common}
`

Icon.Run = styled(svg16)`
${common}
`
Icon.Navigation = styled(svg17)`
${common}
`