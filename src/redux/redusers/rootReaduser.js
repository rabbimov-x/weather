import { combineReducers } from "redux"
import { homeReduser } from "./homeRedusers"
import { updateReduser } from "./updateReduser"





export const rootReduser = combineReducers({
     
    home: homeReduser,
    update: updateReduser,
 
})