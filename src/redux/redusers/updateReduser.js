import { updateState } from "../types/types";



const   initialState = {
    checkfc: false,
} 

export const updateReduser =( state = initialState , action )=>{
   if(action.type === updateState){       
    return {...state,...action.data};
   }
   return state; 
}