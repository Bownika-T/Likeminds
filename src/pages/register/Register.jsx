import "./register.css";
import { Link } from "react-router-dom";

 function Register() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
            <h3 className="loginLogo">LikeMinds</h3>
                <span className="loginDesc">
                Connect with friends and the world around you on LikeMinds.
                </span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder="Username" className="loginInput"/>
                    <input placeholder="Email" className="loginInput"/>
                    <input placeholder="Password" className="loginInput"/>
                    <input placeholder="Password again" className="loginInput"/>
                   
                    <Link to="/home"><button className="loginButton">Sign In</button></Link>
                    <Link to="/"><button className="loginRegisterButton">Log into Account</button></Link>
                </div>
            </div>
        </div>
    </div>
  );
}
export default Register;
