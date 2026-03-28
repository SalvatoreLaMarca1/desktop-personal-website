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
        <Draggable onMouseDown={onClick}  handle=".app-header" nodeRef={nodeRef}>
            <div ref = {nodeRef} className="app-window"
                
                style={{
                    width: typeof width === "number" ? `${width}px` : width,
                    height: typeof height === "number" ? `${height}px` : height,
                    zIndex: zIndex
                }}>
                <div className="app-header">
                    <button onClick={onClose} className="app-window-button close-button"></button>
                    <button className="app-window-button min-button"></button>
                    <button className="app-window-button max-button"></button>
                </div>

                {children}
            </div>
        </Draggable>
    )
}

export default AppWindow