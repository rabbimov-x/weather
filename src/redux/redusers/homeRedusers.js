import {  updateData} from "../types/types";





const initionalState = {
    meta: "maet",
    into: 100,  
    location: "",
    data: {
        consolidated_weather : [
        {air_pressure: 1017,
        applicable_date: "2022-03-09",
        created: "2022-03-09T15:59:01.846227Z",
        humidity: 63,
        id: 6041150986125312,
        max_temp: 12.995000000000001,
        min_temp: 6.9,
        predictability: 71,
        the_temp: 12.190000000000001,
        visibility: 9.491755647021396,
        weather_state_abbr: "hc",
        weather_state_name: "Heavy Cloud",
        wind_direction: 176.3432288401333,
        wind_direction_compass: "S",
        wind_speed: 8.201060202158063},
        {air_pressure: 1017,
        applicable_date: "2022-03-09",
        created: "2022-03-09T15:59:01.846227Z",
        humidity: 63,
        id: 6041150986125312,
        max_temp: 12.995000000000001,
        min_temp: 6.9,
        predictability: 71,
        the_temp: 12.190000000000001,
        visibility: 9.491755647021396,
        weather_state_abbr: "hc",
        weather_state_name: "Heavy Cloud",
        wind_direction: 176.3432288401333,
        wind_direction_compass: "S",
        wind_speed: 8.201060202158063},
        {air_pressure: 1017,
        applicable_date: "2022-03-09",
        created: "2022-03-09T15:59:01.846227Z",
        humidity: 63,
        id: 6041150986125312,
        max_temp: 12.995000000000001,
        min_temp: 6.9,
        predictability: 71,
        the_temp: 12.190000000000001,
        visibility: 9.491755647021396,
        weather_state_abbr: "hc",
        weather_state_name: "Heavy Cloud",
        wind_direction: 176.3432288401333,
        wind_direction_compass: "S",
        wind_speed: 8.201060202158063},
        {air_pressure: 1017,
        applicable_date: "2022-03-09",
        created: "2022-03-09T15:59:01.846227Z",
        humidity: 63,
        id: 6041150986125312,
        max_temp: 12.995000000000001,
        min_temp: 6.9,
        predictability: 71,
        the_temp: 12.190000000000001,
        visibility: 9.491755647021396,
        weather_state_abbr: "hc",
        weather_state_name: "Heavy Cloud",
        wind_direction: 176.3432288401333,
        wind_direction_compass: "S",
        wind_speed: 8.201060202158063},
        {   air_pressure: 1017,
            applicable_date: "2022-03-09",
            created: "2022-03-09T15:59:01.846227Z",
            humidity: 63,
            id: 6041150986125310,
            max_temp: 12.995000000000001,
            min_temp: 6.9,
            predictability: 71,
            the_temp: 12.190000000000001,
            visibility: 9.491755647021396,
            weather_state_abbr: "hc",
            weather_state_name: "Heavy Cloud",
            wind_direction: 176.3432288401333,
            wind_direction_compass: "S",
            wind_speed: 8.201060202158063}
],
latt_long: "13.753330,100.504822",
location_type: "City",
parent: {title: 'Thailand', location_type: 'Country', woeid: 23424960, latt_long: '13.036590,101.492500'},
sun_rise: "2022-03-12T06:27:07.444913+07:00",
sun_set: "2022-03-12T18:28:00.102592+07:00",
time: "2022-03-12T22:33:21.746387+07:00",
timezone: "Asia/Bangkok",
timezone_name: "LMT",
title: "Bangkok",
woeid: 1225448,
},


    // consolidated_weather: (6) [{…}, {…}, {…}, {…}, {…}, {…}]

    error: "",
    dataState: false,

}


export const homeReduser  = (state = initionalState , action)=>{
    if(action.type === updateData){
        // console.log(action.data)
     state.data = action.data   
    return state
   
    }else
    return state
}
