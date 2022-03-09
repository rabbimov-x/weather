import { base, onSubmit, url } from "../types/types";
import axios from "axios";
import moment from "moment";




const initionalState = {
    meta: "maet",
    into: 100,  
    location: "",
}


export const homeReduser  = (state = initionalState , action)=>{
    if(action.type === onSubmit){
        console.log(action.data)
        axios.get(`${url}`+ "/api/location/search/", {params: {query: action.data}} )
         .then((res)=>{
        console.log(res.data);
        axios.get(`https://www.metaweather.com`+ "/static/img/weather/c.svg")

        .then((res)=>{
            console.log(moment(res.data.consolidated_weather[0].applicable_date).format('dddd'))
        });

//    dispatch(UpdateState({minu:res.data }))

  })
    .catch((error)=>{
    //   toast.error(error.response.data.message);
    console.log(error);
    });
        return state
    }else
    return state
}
