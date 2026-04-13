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

    useEffect(() => {
        function updateTime() {
            const now = new Date();

            let hours = now.getHours();
            let minutes = now.getMinutes();

            const ampm = hours >= 12 ? "PM" : "AM";
            hours = hours % 12 || 12; // converstion 0->12

            const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes
            setTime(`${hours}:${formattedMinutes} ${ampm}`)
        }

        updateTime()
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval)
    }, [])

    const [date, setDate] = useState("")

    useEffect(() => {
        const now = new Date();

        const formatted = now.toLocaleDateString([], {
            weekday: "long",
            month: "long",
            day: "numeric"
        })

        setDate(formatted)
    }, [])

    const [time, setTime] = useState("")

    return (
        <div className={`login-page ${closing ? "hide" : ""}`}>
            <div className="date-time">
                <h1 className="login-date">{date}</h1>
                <h1 className="login-time">{time}</h1>
            </div>
        
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
        </div>
    )
    
}

export default Login;