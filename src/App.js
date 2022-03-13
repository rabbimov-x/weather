// import {  useSelector} from "react-redux"
import { BrowserRouter as Router , Routes , Route} from "react-router-dom"
import { useSelector , useDispatch} from "react-redux";
import Loader from "./components/Loader";
import Home from "./pages/Home";
import { useEffect } from "react";
import { onSubmit } from "./redux/types/types";
function App() {
  const state = useSelector((state)=>state.update)
  const dispatch = useDispatch() 
  const localstorage = localStorage.getItem("locatio");

  // useEffect(()=>{
  
  //   if(!localstorage || localstorage.length === 0 ){
  //     console.log("! local")
  //     dispatch({type: onSubmit , data: "berlin"}); 
  //   } else {
  //     console.log("now local")
  //     dispatch({type: onSubmit , data: localstorage});
  //   }
  // },[state.location])


  return (
    <Router>
      <Routes>
        <Route  path = "/"  element = {
         state.loader ? <Loader/>  : <Home/>  
        } /> 
      </Routes>  
    </Router>
  );
}

export default App;
