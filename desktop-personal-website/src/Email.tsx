import Draggable from "react-draggable"
import { useRef } from "react"


function Email() {
    const nodeRef = useRef(null)

    return (
        <Draggable nodeRef={nodeRef} bounds="parent">
            <div ref={nodeRef} className="email-box">
                <h2>To: paslamarca@gmail.com</h2>
                <div className="email-cluster">
                    <h2>Subject: </h2>
                    <input className="input-style"></input>
                </div>
                <div className="email-cluster">
                    <h2>From: </h2>
                    <input className="input-style"></input>
                </div>
                <input ></input>
                
            </div>
        </Draggable>
    )
}

export default Email