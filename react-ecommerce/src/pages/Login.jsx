import "./Login.css";
import Log from "../images/Login.png";
const Login = () => {

  return (
    <>
      <div className="login-container">
      <div className="login-page">
        <img src={Log} alt= "Login" />
        <h1 className="login-title">
        Login <span>or</span> Signup
        </h1>
        <div className="mobile-input">
        <input type="text" placeholder="Mobile Number" />
        </div>
        <div className="Terms">
          <input type="checkbox"/>
          <p>By continuing, I agree to the <span>Terms of Use</span> &<br /> <span>Privacy Policy</span> and I am above 18 years old.</p>
        </div>
        <button className="continue-btn">CONTINUE</button>
        <p id="parg">Have trouble logging in?<span>Get help</span></p>
      </div>
      </div>
    </>
  )
}

export default Login