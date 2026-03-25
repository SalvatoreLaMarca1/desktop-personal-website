import { Children, useRef } from "react"
import Draggable from "react-draggable"

type AppWindowProps = {
    width?: number | string;
    height?: number | string;
    zIndex?: number;
    onClick?: () => void;
    text?: string
    children?: React.ReactNode;
    onClose?: () => void;
}


function AppWindow({children, onClick, onClose, zIndex = 0, width = 500, height = 400}: AppWindowProps) {

    const nodeRef = useRef(null)

    return (
        <Draggable onMouseDown={onClick}  handle=".app-header" bounds="parent" nodeRef={nodeRef}>
            <div ref = {nodeRef} className="app-window"
                
                style={{
                    width: typeof width === "number" ? `${width}px` : width,
                    height: typeof height === "number" ? `${height}px` : height,
                    zIndex: zIndex
                }}>
                <div className="app-header">
                    <button onClick={onClose} style={{backgroundColor: "red"}} className="app-window-button"></button>
                    <button style={{backgroundColor: "yellow"}}  className="app-window-button"></button>
                    <button style={{backgroundColor: "green"}}  className="app-window-button"></button>
                </div>

                {children}
            </div>
        </Draggable>
    )
}

export default AppWindow