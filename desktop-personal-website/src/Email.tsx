import { useState } from "react"

function Email() {
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")


    function sendEmail() {

        if(message === "") return
        
        // sending to me
        const recipient = "paslamarca@gmail.com"

        // Construct mailto link
        const mailToLink = `mailto:${recipient}?subject=${encodeURIComponent (
            subject
        )}&body=${encodeURIComponent(`${message}`)}`

        window.location.href = mailToLink
    }

    return (
            <div className="email-box">
                
                <div style={{justifyContent: "left", gap: "10px"}} className="email-cluster">
                    <h2>To: </h2>
                    <h2 style={{color: "white"}}>paslamarca@gmail.com</h2>
                </div>

                <div className="email-cluster">
                    <h2>Subject:</h2>
                    <input value={subject} onChange={(e) => setSubject(e.target.value)} id="subject" className="input-style"></input>
                </div>
                
                {/* <div className="email-cluster">
                    <h2 id="from-email">From: </h2>
                    <input value={fromEmail} onChange={(e) => setFromEmail(e.target.value)} className="input-style"></input>
                </div> */}
                
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="input-message" ></textarea>
                <button className="send-email-button" onClick={sendEmail}><i style={{fontSize: "20px"}} className="bi bi-send-fill"></i></button>
            </div>
    )
}

export default Email