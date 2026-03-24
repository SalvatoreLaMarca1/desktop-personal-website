import { useState } from "react";
import AppIcon from "./AppIcon"
import Email from "./Email";


function Desktop() {

    const [selectedIcon, setSelectedIcon] = useState<string | null>(null);

    return (
        <div onClick={() => setSelectedIcon(null)} className="desktop-window">
            <AppIcon 
                name="Discord" 
                selected={selectedIcon === "Discord"}
                onSelect={() => setSelectedIcon("Discord")}
                icon="src/assets/app-icons/discord.png"
                onDoubleClick={() => me()}
            />

            <AppIcon 
                name="Email" 
                selected={selectedIcon === "Email"}
                onSelect={() => setSelectedIcon("Email")}
                icon="src/assets/app-icons/email.jpg"
            />

            <Email></Email>
        </div>
    )
}

function me () {
    console.log("Testing")
}


export default Desktop