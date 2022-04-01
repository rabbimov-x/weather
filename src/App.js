import { useEffect, useRef } from "react";
import { BrowserRouter as Router , Routes , Route} from "react-router-dom"
import { useSelector , useDispatch} from "react-redux";
import Loader from "./components/Loader";
import Home from "./pages/Home";
import { onSubmit, updateState } from "./redux/types/types";
function App() {
  const state = useSelector((state)=>state.update)
  const dispatch = useDispatch() 
  const localstorage = localStorage.getItem("location");
  const localColor = localStorage.getItem("colorbg");
  const tempref = useRef()
  const tempref2 = useRef()
  const request = ()=>{
    if(!localstorage || localstorage.length === 0 ){
      
      dispatch({type: onSubmit , data: "berlin"}); 
    } else {
      
      dispatch({type: onSubmit , data: localstorage});
    }
    
  }
  const colorput = ()=>{
    
    if(!localColor || localColor.length === 0){
         
    } else {
      
      switch(`${localColor}`){
        case `--cl-home-d1` : dispatch({type: updateState, data: {colorbg: localColor}});
        break;        
        case `--cl-home-d2` : dispatch({type: updateState, data: {colorbg: localColor}});
        break;      
        case `--cl-home-d3` : dispatch({type: updateState, data: {colorbg: localColor}});
        break;      
        case `--cl-home-n3` : dispatch({type: updateState, data: {colorbg: localColor}});
        break;      
        case `--cl-home-n2` : dispatch({type: updateState, data: {colorbg: localColor}});
        break;      
        case `--cl-home-n1` : dispatch({type: updateState, data: {colorbg: localColor}});
        break;   
        default: return "";      
      }
    }
  }

  tempref.current = request;
  tempref2.current = colorput;

  useEffect(()=>{
    tempref.current()
    
    tempref2.current()
  },[])


  return (
    <Router>
      <Routes>
        <Route  path = "/"  element = {
         state.loader ? <Home/>  : <Loader/>  
        } /> 
      </Routes>  
    </Router>
  );
}

export default App;
