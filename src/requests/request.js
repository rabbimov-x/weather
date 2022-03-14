import axios from "axios";

import { url } from "../redux/types/types";


export const requestGetWoeid = async (title)=>{

     const  data =   await  axios.get(`${url}`+ "/api/location/search/", {params: {query: title}})
    
    return data;
}

export const  requestGetLocation = async (woeid)=>{

    const data = await axios.get(`${url}` + "/api/location/" + woeid) 
    return data;
}