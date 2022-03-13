import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { Button, Container, Img } from "../../GlobalStyle";
import { updateState } from "../../redux/types/types";
import { Modal } from "./style" 
const ModalColor = ()=>{
    const state = useSelector((state)=> state.update.modal);
    const dispatch = useDispatch()
    const colorupdate = ({color})=>{
        dispatch({type: updateState, data: {colorbg: color }})
        dispatch({type: updateState, data: {modal: false}})
    }
    return (
    <Modal state = {state} >
        <Modal.Countent className = "countent">
            <Container  justify = "right"  >
                    <Button bg = "var(--cl-red)" type = "button" onClick={()=>dispatch({type: updateState, data: {modal: false}})}>
                        <Img w= "18px" >
                            <img src="./assets/images/svg/x.svg" alt="error" />
                        </Img>
                    </Button>
            </Container>
            <Container justify = "center" >
                <Img className="img" pd = "10px  3%"  onClick={()=>colorupdate({color: "--cl-home-d2"}) }>
                    <img src="./assets/images/jpg/home-d2.jpg" alt="error" />
                </Img>
                <Img className="img" pd = "10px  3%" onClick={()=>colorupdate({color: "--cl-home-d1"}) } >
                    <img src="./assets/images/jpg/home-d1.jpg" alt="error" />
                </Img>
                <Img className="img" pd = "10px  3%"  onClick={()=>colorupdate({color: "--cl-home-d3"}) }>
                    <img src="./assets/images/jpg/home-d3.jpg" alt="error" />
                </Img>
                <Img className="img" pd = "10px  3%" onClick={()=>colorupdate({color: "--cl-home-n1"}) }>
                    <img src="./assets/images/jpg/home-n1.jpg" alt="error"  />
                </Img>
                <Img className="img" pd = "10px  3%"  onClick={()=>colorupdate({color: "--cl-home-n2"}) }>
                    <img src="./assets/images/jpg/home-n2.jpg" alt="error" />
                </Img>
                <Img className="img" pd = "10px  3%" onClick={()=>colorupdate({color: "--cl-home-n3"}) }>
                    <img src="./assets/images/jpg/home-n3.jpg" alt="error" />
                </Img>
            {/* </Container><Container justify = "center" >
                
            </Container><Container justify = "center" > */}
               
            </Container>
            
        </Modal.Countent>
    </Modal>
)}
export default ModalColor;