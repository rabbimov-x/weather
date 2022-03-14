import axios from "axios";

import { url } from "../redux/types/types";


export const requestGetWoeid = async (title)=>{

    return  await  axios.request(`${url}`+ "/api/location/search/", {params: {query: title}})
    
    
}

export const  requestGetLocation = async (woeid)=>{

    const data = await axios.get(`${url}` + "/api/location/" + woeid) 
    return data;
}