import React from 'react'
import { NavLink } from 'react-router-dom'
import { Div, Img, P } from '../../GlobalStyle' 
import weekdaydata from '../../utils/weekdaydata'
import  {WeekStyled} from './styled'
const Weekdays = ({data})=>{
    const state = weekdaydata(data);
    // console.log(data)
    // console.log(state)
    return(
        <WeekStyled>
            <NavLink to = "/" className="navlink">
                <Div textC = "center" >
                <P size = "var(--size24)" line = "var(--lineh30)" color  =" var(--cl-black)"  >
                   {state.temperature}°C
                </P>
                <Img mr =" 24px auto 14px auto " w = "57px" h = "auto" >
                   <img src={state.weatherIcon} alt="error" />
                </Img>
                <P size = "var(--size24)" line = "var(--lineh30)">
                    {state.weekday.slice( 0 , -state.weekday.length + 3)  }
                </P>
                </Div>
            </NavLink>
        </WeekStyled>
    )
}
export default Weekdays;
