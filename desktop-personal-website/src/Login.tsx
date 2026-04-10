import "./styles.css"
import salPhoto from "./assets/sal-photo.png"

function Login() {

    return (
        <div className="login-page">
            <div className="stack-login-elements">
                {/* <div className="profile-pic"></div> */}
                
                <img
                    src={salPhoto}
                    className="profile-pic-img"
                    />
                <button>login</button>
            </div>

            <div>
                
            </div>

            
            
        </div>
    )
    
}

export default Login;