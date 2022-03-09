import styled from "styled-components";

export const WeekStyled = styled.div`
width: fit-content;
background: rgba(255, 255, 255, 0.2);
backdrop-filter: blur(1.13852px);
border-radius: 11.3852px;

.navlink{

    padding: 16px 26px;
    width: auto;
    height: auto;
    display: block;
    color: black;
    cursor: pointer;
    text-decoration: none;
    
}

@media (max-width: 576px) {
    
    .navlink{
        padding: 8px 12px;
}
}
`
