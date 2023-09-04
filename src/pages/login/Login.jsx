import "./login.css"

export default function Login() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
<h3 className="loginLogo">Social Media</h3>
<span className="loginDesc">
    Connect with Friends and the world around you on Social Media
</span>
            </div>
            <div className="loginRight">
<div className="loginBox">
  <input placeholder="Email" className="loginInput" />
  <input placeholder="Password" className="loginInput" />
  <button className="loginButton">Log In</button>
  <div className="loginForgot">Forgot Password?</div>
  <span className="loginRegisterButton">Create a New Account</span>
</div>
    </div>
        </div>
          </div>
  );
}

