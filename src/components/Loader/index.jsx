import React  from "react";
import { LoaderStyle } from "./styled";

const Loader =()=>{
  return(
      <LoaderStyle>
          <div className="loader">
            <div className="loader-one">
                <div className="loader-two">
                    <div className="loader-three"></div>
                </div>
            </div>
        </div>


      </LoaderStyle>
  )
}

export default Loader;