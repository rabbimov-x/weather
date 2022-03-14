import React, { useState } from "react";
import Slider from "react-slick";
import Weekdays from "../../components/Weekdays";
import { useSelector ,useDispatch } from "react-redux";
import { Container , Img , P, Div , Icon, Line, Button } from "../../GlobalStyle";
import { onSubmit, updateState } from "../../redux/types/types";
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";
import Logo from "../../components/Logo";
import ModalColor from "../../components/ModalColor"
import weekdaydata from "../../utils/weekdaydata";
import homeData from "../../utils/homedata";

import {FOrC, HomeStyle, Hour, Search} from  "./style"


const Home = ()=>{
    const state = useSelector((state)=>state);
    const data = weekdaydata(state.home.data.consolidated_weather[0],state.home.data.title)
    const homedata = homeData(state.home.data);
    const dispatch = useDispatch()
    const [location , setLocation] = useState("");
    const onSubmitdate =(e)=>{
        e.preventDefault();
        dispatch({type: updateState , data: {message: ""}});
        if(location.lengith !== 0 ){
            dispatch({type: onSubmit , data: location});    
        }
        setLocation(state.home.location)
      }
    // useEffect(()=>{
    //     if(localstorage.lengith !== 0){
    //         dispatch({type: onSubmit , data: localstorage});
    //     }     
    // },[state.home.meta])
    const settings = {
        // dots: true,
        // infinite: true,
        slidesToShow: 3,
        // slidesToScroll: 1,
        // autoplay: true,
        speed: 300,
        autoplaySpeed: 2500,
        cssEase: "linear",
        responsive: [
          {
            breakpoint:1920,
            settings: {
              slidesToShow: 4,
            }
          },
          {
            breakpoint:1320,
            settings: {
              slidesToShow: 4,
            }
          },
          {
            breakpoint:992,
            settings: {
              slidesToShow: 5,
            }
          },
          {
            breakpoint:767,
            settings: {
              slidesToShow: 4,
            },
            state: {
              display: true,
              width: 100
            }
          },
          {
            breakpoint:576,
            settings: {
              slidesToShow: 3,
              dots: true,
            },
            state: {
              display: true,
              width: 90,
            }
          },
          {
            breakpoint:470,
            settings: {
            //   className: "center",
            centerMode: true,
              centerPadding: "20px",
              slidesToShow: 2,
            },
            state: {
              display: true,
              width: 100
            }
          }
    
        ]
      };
      
    return(
        <HomeStyle colorbg = {state.update.colorbg}>
            <ModalColor/>
            <HomeStyle.Left>
            <Search className="SearchLeft">
                        <form onSubmit={e =>onSubmitdate(e)} >
                            <div className="SearchInputs">
                                <input onChange={(e) => setLocation(e.target.value)} value = {location} type="text" placeholder={state.update.message} required className="searchAllConters" />
                                <button type="sumbit"   className="searchButton"  >
                                    <Icon.Search w = "18px" />
                                </button>
                                
                            </div>
                        </form>
                        
                    </Search>
                <Container justify = "space-between" >
                    <Img w= "30%">
                    <Logo/>
                    </Img>

                    <Div h = "100%" w = "70%" display = "flex" justify = "space-between" flex = "column" align = "end">
                    <FOrC>
                        <FOrC.Button  bg = {!state.update.checkfc} onClick = {()=>dispatch({type: updateState , data: {checkfc: false}})} >
                            <P no >
                                F
                            </P>
                        </FOrC.Button>
                        <FOrC.Button bg = {state.update.checkfc} c onClick = {()=>dispatch({type: updateState , data: {checkfc: true}})} >
                            <P no >
                                C
                            </P>
                        </FOrC.Button>
                    </FOrC>
                    <Button className="themes" mr = "34px 5px 0 0" pd = "12px 14px" type="button" size = "var(--size18)" onClick={()=> dispatch({type: updateState, data: {modal: true}})} >
                       Themes
                    </Button>
                    
                    </Div>
                </Container>
                <Container justify = "space-between" className="counterOut">
                    <Div display="flex" w = "fix-countent" align = "center">
                    <Icon.Map mr = " 0 5px 0 0" w = "35px"/>    
                    <P size = "var(--size32)">
                        {homedata.location}, {homedata.country}
                    </P>
                    </Div>
                    

                        

                    
                    </Container>
                <Container flex>
                    <Div w = "fit-content" >
                        <P fSh mr = "25px 0" size = 'var(--size164)' fontF = "var(--familyT)" bold = "100">
                            {data.temperature} 
                        </P>
                        <Div position = "absolute" top= "48px" right= "-45px" w = "fit-content" >
                            <P fSh size = "var(--size32)" family = "var(Inter)">
                               ° C 
                            </P>
                        </Div>
                    </Div>
                    <Div>
                        <P size = "var(--size32)" >
                           {data.data}
                        </P>
                    </Div>
                    <Div mr = "15px  0  0 0">
                        <P size = "var(--size32)" >
                           {homedata.data}   |   {homedata.time}pm
                        </P>
                    </Div>
                    <Div mr = "45px 0 0 0" display = "flex">
                        <Icon.Wind w = "var(--icon-w25)" />
                        <P size = "var(--size22)" mr = "0  0 0 10px"  tSH>
                            Wind  {homedata.wind}km/h
                        </P>
                        <P size = "var(--size22)"  mr = "0 15px">
                            |
                        </P>
                        <Icon.Hum w = "var(--icon-w20)"/>
                        <P size = "var(--size22)"  mr = "0  0 0 10px">
                            Hum {homedata.humidity}%
                        </P>
                        <P  size = "var(--size22)" mr = "0 15px">
                            |
                        </P>
                         <P size = "var(--size22)"  mr = "0  0 0 10px">
                           Pressure  {homedata.pressure}mb
                         </P>
                    </Div>
                </Container>
                <Container justify = "center" pd = "80px  ">
                
                     <Slider className="Slider" {...settings}>
                        
                        {
                            state.home.data.consolidated_weather.map((value)=>{
                                return(
                                    <div key = {value.id} >
                                        <Weekdays data = {value} />
                                    </div>

                                )
                            })
                        }
                        {/* <div>
                        <Weekdays data = {state.home.data.consolidated_weather[0]} />
                        </div> */}
                        
                        
                     </Slider>   
                <div></div>   
                </Container>
            </HomeStyle.Left>
            <HomeStyle.Right>
                <Container className="counterIn" inLeft  justify = "space-between" >
                    <Div display="flex" w = "fix-countent" align = "center">
                    <Icon.Map mr = " 0 5px 0 0" w = "35px"/>    
                    <P size = "var(--size32)">
                        {homedata.location}, {homedata.country}
                    </P>
                    </Div>
                    <Button type="button" size = "var(--size16)" onClick={()=> dispatch({type: updateState, data: {modal: true}})} >
                       Themes
                    </Button>

                    
                </Container>
                <Container justify = "center">
                <Search className="SearchRight">
                        <form onSubmit={e =>onSubmitdate(e)} >
                            <div className="SearchInputs">
                                <input onChange={(e) => setLocation(e.target.value)} value = {location} type="text" placeholder={state.update.message} required className="searchAllConters" />
                                <button type="sumbit"   className="searchButton"  >
                                    <Icon.Search w = "18px" />
                                </button>
                                
                            </div>
                        </form>
                </Search>
                </Container>
                <Container justify = "space-evenly" pd = "54px  5% 0">
                    <Div textC = "center" w= "fit-content" mr="22px  0 0 0">
                        <P size = "var(--size28)">
                            Sunrise
                        </P>
                        <Hour>
                            <Div pd = " 27px 18px 36px 18px" textC = "center">
                                <Icon.Hour w= "100%"  />
                                <P size = "var(--size28)" bold = "400" mr = "42px 0 8px 0">
                                    {homedata.sunrise}
                                </P>
                                <P size = "var(--size22)" color = "var(--cl-light)">
                                {homedata.sunrise}   
                                </P>            
                            </Div>
                        </Hour>

                    </Div>
                    <Div w= "fit-content"  textC = "center">
                        <P size = "var(--size28)">
                            Your Hours
                        </P>
                        <Hour maxw = "130px">
                            <Div pd = "27px 18px 36px 18px" textC = "center">
                                <Icon.Hour w= "100%"  />
                                <P w = "fit-content"  display = "flex"  size = "var(--size28)" bold = "400" mr = "48px auto 8px auto">
                                {homedata.time}
                                    
                                </P>
                                <P  w = "fit-content" mr = "0 auto" display = "flex"  size = "var(--size24)" color = "var(--cl-light)">
                                {homedata.time} 
                                    
                                </P>            
                            </Div>
                        </Hour>

                    </Div>
                    <Div textC = "center" w= "fit-content" mr="22px  0 0 0">
                        <P size = "var(--size28)">
                            Sunset
                        </P>
                        <Hour>
                            <Div pd = " 27px 18px 36px 18px" textC = "center">
                                <Icon.Hour w= "100%"  />
                                <P size = "var(--size28)" bold = "400" mr = "42px 0 8px 0">
                                {homedata.sunset}
                                </P>
                                <P size = "var(--size22)" color = "var(--cl-light)">
                                {homedata.sunset}
                                </P>            
                            </Div>
                        </Hour>

                    </Div>
                </Container>
                <Line w = "80%" mr = "40px auto"/>
                <Container justify = "center" pd ="40px 5% 0">
                    <Img w= "90%">
                        <img src="./assets/images/svg/moderite.svg" alt="error" /> 
                    </Img>    
                </Container>    
            </HomeStyle.Right>
        </HomeStyle>
    )
}

export default Home
