import { useState } from 'react';
import './styles.css'

type WindowType = {
    id: string;
    zIndex: number;
}

type Props = {
    windows: WindowType[];
    setShowLoginPage: (val: boolean) => void;
}

function Taskbar({ windows, setShowLoginPage }: Props) {

    const apps = Array.from(
        new Set(windows.map(w => w.id.split("-")[0]))
    );

    const appIcons: Record<string, string> = {
        email: "src/assets/app-icons/email.jpg",
        discord: "src/assets/app-icons/discord.png",
        chess: "src/assets/app-icons/chess.jpg"
        // add more apps here
    };

    const [showOptions, setShowOptions] = useState(false);

    function logOut() {
        setShowLoginPage(true)
        setShowOptions(false)
    }

    return (

        <div className='hold-taskbar'>
            {/* <div style={showOptions ? {display: 'flex'} : {display: 'none'}} className='taskbar-options'> 
            </div> */}

            {showOptions ? 
                <div className='taskbar-options'>
                    <button onClick={logOut}>Log out</button>
                </div> : 
                <></>
            }

            <div className="taskbar">
                <button onClick={() => setShowOptions(!showOptions)} className='start-menu'> <i className="bi bi-box-seam-fill"></i></button>

                
                <div className='taskbar-icon-holder'>
                    {apps.map(app => (
                        <div 
                            key={app} 
                            style={{
                                backgroundImage: `url(${appIcons[app]})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center"
                            }}
                            className="taskbar-icon">
                        </div>
                        
                    ))}
                </div>
                <div className='time-group'>Time | Weather | etc. </div>
            </div>
        </div>
        
    )
}


export default Taskbar;