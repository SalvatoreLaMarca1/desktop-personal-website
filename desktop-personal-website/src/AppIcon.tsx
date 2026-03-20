import Draggable from "react-draggable";
import { useRef } from 'react'
import "./styles.css"

type AppIconProps = {
    name: string;
    icon?: string;
    selected: boolean;
    onSelect: () => void;
}


function AppIcon({name, icon, selected, onSelect}: AppIconProps) {

    const nodeRef = useRef(null)

    return (
        <Draggable nodeRef = {nodeRef}>
            <div ref={nodeRef} onClick={(e) => {
                e.stopPropagation();
                onSelect()
                console.log(selected, onSelect)
            }} 
            className="hold-app"
            style={selected ? {opacity: .6} : {}}
            >
                <div style={
                    icon
                    ? {
                        backgroundImage: `url(${icon})`,
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        }
                    : {}
                } className="icon"/>
                <div className="app-name">{name}</div>
                
            </div>
        </Draggable>
    )

}


export default AppIcon;