import React from "react";
import { useSelector } from "react-redux";
import { Icon } from "../../GlobalStyle"; 

const Logo =()=>{
    const state = useSelector((state)=>state.home.data.consolidated_weather[0].weather_state_abbr)
    // console.log(state)
   switch(state){
       case  "c": return <Icon.C/>;
       case  "h": return <Icon.H/>;
       case  "hc": return <Icon.HC/>;
       case  "hr": return <Icon.HR/>;
       case  "lc": return <Icon.LC/>;
       case  "lr": return <Icon.LR/>;
       case  "s": return <Icon.S/>;
       case  "sl": return <Icon.SL/>;
       case  "sn": return <Icon.SN/>;
       case  "t": return <Icon.T/>;
       default : return <Icon.SN/>;
   }
} 

export default Logo;