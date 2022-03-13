import { requestGetLocation, requestGetWoeid } from "../../requests/request"
import { onSubmit, updateData, updateState } from "../types/types"
import {call, put, takeEvery} from "redux-saga/effects"

export function* fetchUser(action){
    try {
        yield put ({type: updateState , data: {loader: true}})
        const user = yield call(requestGetWoeid , action.data);
        if(user.data.length !== 0 || !user.data){
        const userLocation = yield call(requestGetLocation, user.data[0].woeid)
        yield put({type: updateData, data: userLocation.data});
        yield put ({type: updateState , data: {message: "Search ..."}})
        localStorage.setItem("location" , `${action.data}`)
        yield put ({type: updateState , data: {loader: false}})
        } else{
         yield put ({type: updateState , data: {message: "This is not sush location"}})
        yield put ({type: updateState , data: {loader: false}})
        }
     } catch (e) {
      //   console.log(e)
     }
}


export function* ourSaga (){
  yield takeEvery(onSubmit , fetchUser)
}   