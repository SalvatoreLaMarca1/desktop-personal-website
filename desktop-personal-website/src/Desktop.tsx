import { useState } from "react";
import AppIcon from "./AppIcon"
import Email from "./Email";
import AppWindow from "./AppWindow";

type WindowType = {
    id: string;
    zIndex: number;
}


function Desktop() {

    const [selectedIcon, setSelectedIcon] = useState<string | null>(null);

    const [windows, setWindows] = useState<WindowType[]>([])

    const [topZ, setTopZ] = useState(0);

    const bringToFront = (id: string) => {
        setTopZ(prevTop => {
            const newTop = prevTop + 1;

            setWindows(prevWindows =>
                prevWindows.map(win =>
                    win.id === id ? {...win, zIndex: newTop } : win)
            )

            return newTop
        })
    }

    const openWindow = (id: string) => {
        setWindows(prev => {
            // prevent opening the same exact window id twice instantly
            const lastWindow = prev[prev.length - 1];
            if(lastWindow && lastWindow.id.startsWith(id)) return prev;
            const newTop = topZ + 1;
            setTopZ(newTop);
            return [...prev, { id: id + "-" + newTop, zIndex: newTop }];
        });
    };

    const closeWindow = (id: string) => {
        setWindows(prev => prev.filter(win=> win.id !== id))
    }

    return (
        <div onMouseDown={() => setSelectedIcon(null)} className="desktop-window">
            <AppIcon 
                name="Discord" 
                selected={selectedIcon === "Discord"}
                onSelect={() => setSelectedIcon("Discord")}
                icon="src/assets/app-icons/discord.png"
                onDoubleClick={(e) => {
                    e.stopPropagation();
                    openWindow("discord")
                }}
            />

            <AppIcon 
                name="Email" 
                selected={selectedIcon === "Email"}
                onSelect={() => setSelectedIcon("Email")}
                icon="src/assets/app-icons/email.jpg"
                onDoubleClick={(e) => {
                    e.stopPropagation(); // <- prevents the desktop onClick
                    openWindow("email");
                }}
            />


            {windows.map(win => (
                <AppWindow
                    key={win.id + "-a"}
                    zIndex={win.zIndex}
                    onClick={() => bringToFront(win.id)}
                    onClose={() => closeWindow(win.id)}
                >
                    {win.id.startsWith("email") && <Email/>}
                </AppWindow>
                ) 
            )}

            
        </div>
    )
}


export default Desktop