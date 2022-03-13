import moment from "moment"

const weekdaydata = (data,title)=>
(
  {
  weekday: moment(data.applicable_date).format("dddd"),
  data: moment(data.applicable_date).format('MMMM Do'),
  location: title,
  temperature: Math.round(data.the_temp),
  mintemp: Math.round(data.min_temp),
  maxtemp: Math.round(data.max_temp),
  wind_speed: Math.round(data.wind_speed),
  pressure:Math.round(data.air_pressure),
  humidity:Math.round(data.humidity),
  predictability:Math.round(data.predictability),
  weatherIcon: `https://www.metaweather.com/static/img/weather/ico/${data.weather_state_abbr}.ico`,
  weatherDescription: data.weather_state_name, 
})



export default weekdaydata;
