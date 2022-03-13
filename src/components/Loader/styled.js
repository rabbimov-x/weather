import styled from "styled-components"


export const LoaderStyle = styled.div`
width: 100%;
height: 100vh;
/* background-color: #1E242B; */
display: flex;
justify-content: center;
align-items: center;
background-color: var(--cl-binafsha);
.loader{
    width: 101px;
    margin: 50px auto;
    transition: all 0s linear;
    transform: scale(0.8);
    
}



.loader-one{
    width: 100px;
    height: 100px;
    border: 6px solid #fff;
    border-radius: 50%;
    border-top-color: transparent;
    border-bottom-color: transparent;
    padding: 10px;
    box-sizing: border-box;
    animation-name: anim2;
    animation-duration: 2s;
    animation-iteration-count: infinite ;
    animation-timing-function: linear;
}

.loader-two{
    width: 100%;
    height: 100%;
    border: 6px solid #000000;
    border-radius: 50%;
    border-left-color: transparent;
    border-right-color: transparent;
    padding: 10px;
    box-sizing: border-box;
    animation-name: anim3;
    animation-duration: 2s;
    animation-iteration-count: infinite ;
    animation-timing-function: linear;
}
.loader-three{
    width: 100%;
    height: 100%;
    border: 6px solid #fff;
    border-radius: 50%;
    border-top-color: transparent;
    border-bottom-color: transparent;
    box-sizing: border-box;

    animation-name: anim2;
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}


@keyframes anim2 {
    100%{
        transform: rotate(360deg);
    }

}
@keyframes anim3 {
    100%{
        transform: rotate(-720deg);
    }

}



@keyframes anim1{
    25%{
        transform: translateY(300px) rotate(360deg);
        background-color: red;
    }
    /*   vaqtning 50% i o'tguncha */

    50%{
        transform: translateY(0) rotate(0);
        background-color: blue;
    }

    75%{
        transform: translateX(300px) rotate(-360deg);
    }
    100%{
        transform: translateX(0) rotate(0);
    }
}

@media (max-width: 767px) {
    margin-top: 15% 0 0 0;
     .loader{
        transition: all 0s linear;
         transform: scale(0.5);
     }   
    }
`


