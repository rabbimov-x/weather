import React from 'react'
import { NavLink } from 'react-router-dom'
import { Div, Img, P } from '../../GlobalStyle' 
import  {WeekStyled} from './styled'
const Weekdays = ()=>{
    return(
        <WeekStyled >
            <NavLink to = "/" className="navlink">
                <Div textC = "center" >
                <P size = "var(--size24)" line = "var(--lineh30)" color  =" var(--cl-black)"  >
                   24°C
                </P>
                <Img mr =" 28px 0 8px 0 " w = "67px" h = "56px" >
                   <img src="#" alt="error" />
                </Img>
                <P size = "var(--size24)" line = "var(--lineh30)">
                    Sun
                </P>
                </Div>
            </NavLink>
        </WeekStyled>
    )
}
export default Weekdays;
