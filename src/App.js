import {  useSelector} from "react-redux"
import { BrowserRouter as Router , Routes , Route} from "react-router-dom"
import Home from "./pages/Home";
function App() {
  const state = useSelector((state)=>state) 
  // console.log(state)
  return (
    <Router>
      <Routes>
        <Route  path = "/"  element = { <Home/>} /> 
      </Routes>  
    </Router>
  );
}

export default App;
