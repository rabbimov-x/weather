import moment from "moment"

const homeData = ({consolidated_weather, latt_long,location_type,parent,sources,sun_rise,sun_set,time,timezone,title})=>
(
  {
  weekday: moment(consolidated_weather[0].applicable_date).format("dddd"),
  data: moment(time).format('dddd'),
  location: title,
  country: parent.title,
  sunrise: moment(sun_rise).format(' HH:mm')  ,
  sunset: moment(sun_set).format(' h:mm ') ,
  time: moment(time).format(' h:mm '),
  temperature: Math.round(consolidated_weather[0].the_temp),
  mintemp: Math.round(consolidated_weather[0].min_temp),
  maxtemp: Math.round(consolidated_weather[0].max_temp),
  wind: Math.round(consolidated_weather[0].wind_speed),
  pressure:Math.round(consolidated_weather[0].air_pressure),
  humidity:Math.round(consolidated_weather[0].humidity),
  predictability:Math.round(consolidated_weather[0].predictability),
  weatherDescription: consolidated_weather[0].weather_state_name, 
})



export default homeData;
