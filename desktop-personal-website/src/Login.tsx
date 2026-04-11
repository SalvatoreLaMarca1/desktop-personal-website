import "./styles.css"
import {useEffect, useState} from "react"
import salPhoto from "./assets/sal-photo.png"

type Props = {
    show: boolean;
    setShowLoginPage: (val: boolean) => void;
}

function Login({show, setShowLoginPage }: Props) {

    const [closing, setClosing] = useState(false);

    function handleLogin() {
        setClosing(true);

        setTimeout(() => {
            setShowLoginPage(false);
        }, 500);
    }

    useEffect(()=> {
        if (show) {
            setClosing(false);
        }
    }, [show])

    return (
        <div className={`login-page ${closing ? "hide" : ""}`}>
            <div className="stack-login-elements">
                
                <div className="profile-pic">
                    <img
                        src={salPhoto}
                        className="profile-pic-img"
                        />
                </div>
                <input className="login-pass" type="password"></input>
                <button onClick={handleLogin}>login</button>
            </div>

            <div>
                
            </div>

            
            
        </div>
    )
    
}

export default Login;