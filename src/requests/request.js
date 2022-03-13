import axios from "axios";
import { url } from "../redux/types/types";

export function requestGetWoeid (title){
    const data =  axios.get(`${url}`+ "/api/location/search/", {params: {query: title}});
    return data;
}

export function requestGetLocation (woeid){
    return axios.get(`${url}` + "/api/location/" + woeid);
}