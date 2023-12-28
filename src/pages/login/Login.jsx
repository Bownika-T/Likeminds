import "./login.css";
import { Link } from "react-router-dom";

 function Login() {

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
                         <input placeholder="Email" className="loginInput"/>
                         <input placeholder="Password" className="loginInput"/>
                         <Link to="/home"> <button className="loginButton">Log In</button></Link>
                         
                         <Link to="/forget password"><span className="loginForgot">Forgot Password?</span></Link>
                         <Link to="/register"><button className="loginRegisterButton">Create a New Account</button></Link>
                     </div>
                 </div>
             </div>
         </div>
        // /*<div className="login">
        //     <div className="card">
        //         <div className="left">
        //             <h1>Hello World.</h1>
        //             <p>
        //                 "Like-minded people,one tap away".
        //             </p>
        //             <span>Don't you have an account?</span>
        //             <button>Register</button>
        //         </div>
        //         <div className="right">
        //             <h1>Login</h1>
        //             <form>
        //                 <input type="text" placeholder="Username" />
        //                 <input type="password" placeholder="Password" required />
        //                 <button>Login</button>
        //             </form>
        //         </div>
        //     </div>
        // </div>*/
    );
}

export default Login;
