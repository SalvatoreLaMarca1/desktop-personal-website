import { useState } from "react";
import AppIcon from "./AppIcon"
import Email from "./Email";
import AppWindow from "./AppWindow";
import Chess from "./Chess";


type WindowType = {
    id: string;
    zIndex: number;
}

type desktopProps = {
    windows: WindowType[];
    setWindows: React.Dispatch<React.SetStateAction<WindowType[]>>;
    topZ: number;
    setTopZ: React.Dispatch<React.SetStateAction<number>>;
    
}


function Desktop({ windows, setWindows, topZ, setTopZ}: desktopProps) {

    const [selectedIcon, setSelectedIcon] = useState<string | null>(null);

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
            // check if any window of this app already exists
            const exists = prev.some(win => win.id.startsWith(id));
            if (exists) return prev;
    
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

            <AppIcon
                name="Chess"
                selected={selectedIcon === "Chess"}
                onSelect={() => setSelectedIcon("Chess")}
                icon="src/assets/app-icons/chess.jpg"
                onDoubleClick={(e) => {
                    e.stopPropagation();
                    openWindow("chess")
                }}
            />


            {windows.map(win => {
                const isEmail = win.id.startsWith("email");
                    return (
                        <AppWindow
                            key={win.id + "-a"}
                            zIndex={win.zIndex}
                            onClick={() => bringToFront(win.id)}
                            onClose={() => closeWindow(win.id)}
                            width={isEmail ? 600 : undefined}
                            height={isEmail ? 400 : undefined}
                        >
                            {win.id.startsWith("email") && <Email/>}
                            {win.id.startsWith("chess") && <Chess/>}
                        </AppWindow>
                    )
                }
            )}

            
        </div>
    )
}


export default Desktop