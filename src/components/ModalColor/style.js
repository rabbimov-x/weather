import styled from "styled-components"


export const Modal = styled.div`

width: 100%;
height: 100%;
background-color: rgba(34, 34, 34, 0.3);;
position: absolute;
top: 0;
left: 0;
display: ${({state})=>state ? "flex" : "none"};
justify-content: center;
z-index: 2;
padding: 10% 0 0 0;

@media (max-width: 557px) {
   padding: 0;
   background-color: var(--cl-white);
}

`

Modal.Countent = styled.div`
background-color: white;
max-width: 700px;
width: 70%;
height: fit-content;
padding: 15px 0 35px 0;
border-radius: 10px;
.img{
    transition: all 0.5s linear;
    width: 200px;
   &> img{
       transition: all 0.2s linear;
       &:hover{
        transform: scale(1.1);
    }
   }
}

@media (max-width: 992px) {
    /* border-radius: 0; */
    width: 60%;
    padding: 15px 0 15px 0;
    .img{
        width: 200px;
    }
}
@media (max-width: 810px) {
    /* border-radius: 0; */
    width: 80%;
    padding: 15px 0 15px 0;
    .img{
        width: 180px;
    }   
}
@media (max-width: 767px) {
    border-radius: 5px;
    width: 80%;
}

@media (max-width: 557px) {
    /* border-radius: 0; */
    width: 100%;
    height: 100%;
    .img{
        width: 150px;
    }
}
@media (max-width: 400px) {
    border-radius: 0;
    width: 100%;
    .img{
        width: 130px;
    }
}
`