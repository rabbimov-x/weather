import styled from "styled-components";



export const HomeStyle = styled.div`
 width: 100%;
 background: ${({colorbg})=>colorbg ? `var(${colorbg})` : "var(--cl-home-d2)"};
 display: flex;
 flex-wrap: wrap ;
 position: relative;

 .counterIn{
     display: flex; 
 }
 .counterOut{
     display: none;
     padding-top: 30px;
   
 }
 .themes{
     display: none;
 }
 .SearchLeft{
    display: none;
 }
 @media (max-width: 992px) {
 .counterOut{
    width: 100% !important;
    display: flex;
    align-items: center;
    /* padding: 0 !important; */
    height: fit-content;
 }
 .counterIn{
     display: none;
 }
 .SearchLeft{
    display: block;
    width: 70%;
    margin: 0 auto 15px auto;
    min-width: 280px;
  }
  .SearchRight{
      display: none;
      
  }
  
 .themes{
     display: block;
 }
 @media (max-width: 576px) {
    .SearchLeft{
        width: 90%; 
    }
 }
}
`

HomeStyle.Left = styled.div`
width: 60%;
padding:  67px 0 0 0;

.Slider{
    width: 100%;
    /* padding: 0 15px; */
}

@media (max-width: 992px) {
  width: 100%;
  padding: 30px  0 0 0;
}
@media (max-width: 576px) {
  width: 100%;
  .Slider{
    width: 90%;
    /* padding: 0 15px; */
}
}
`

HomeStyle.Right = styled.div`
width: 40%;
padding:  67px 0 0 0;
background: radial-gradient(100% 100% at 0% 0%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%);
box-shadow: inset -5px -5px 250px rgba(255, 255, 255, 0.02);
backdrop-filter: blur(42px);

@media (max-width: 992px) {
    width: 80%;
    padding-top: 0;
    margin:-60px auto 0 auto;
    box-shadow: none;
    background: transparent;
    backdrop-filter: none;
}

@media (max-width: 992px) {
    width: 100%;
}
`
export const FOrC = styled.div`

display: flex;
align-items: center;
width: fit-content;
height: fit-content;
background: rgba(255, 255, 255, 0.16);
border-radius: 100px;
margin-top: 5px;

`
FOrC.Button = styled.div`
border: none;
outline: none;
padding: 6px 20px;
/* padding: ${({bg})=> !bg ? "6px 0 6px 20px" :  "6px 20px 6px 20px"}; */
background: ${({bg})=> bg ? "rgba(255, 255, 255, 0.18)" : "transparent" }  !important ;
margin-left: ${({c})=> c ? "-10px" :  "0"};
border-radius: 100px;
cursor: pointer;
` 
export const Search = styled.div`
    width: 80%;
    height: fit-content;
    border: 1px solid rgba(255,255,255,0.18) !important;
    border-radius: 32px;    
    margin-top: 42px;  
    background-color: rgba(255,255,255,0.16);

    &> form{
        width: 100%;
        

        .SearchInputs{
            margin: 8px 8px 8px 24px;
            display: flex;
            height: 32px;
            box-sizing: border-box;
            align-items: center;


            .searchAllConters{
                flex: 1 1 auto;
                cursor: auto;
                font-size: 14px;
                line-height: 24px;
                outline: none;
                border: none;
                font-family: var(--familyL);
                background-color: transparent;
                letter-spacing: calc(-.006px + var(--text-tracking-pos, 0)*14px);
            }
            .searchButton{
                display: flex;
                justify-content: center;
                align-items: center;
                border: none;
                border-radius: 50%;
                height: 40px;
                width: 40px;
                /* backdrop-filter: blur(20px); */
                background-color: var(--cl-binafsha);
                outline: none;
            }
        }
    }
    
`
export const Hour = styled.div`
max-width: ${({maxw})=> maxw ? maxw :  "105px"};
/* width: 100%; */
height: fit-content;
background: rgba(255, 255, 255, 0.26);
border-radius: 100px;
margin: 36px auto 0 auto;

@media (max-width: 576px) {
    &>div{
        padding: 30px 10px 38px 10px;
    }
}
`