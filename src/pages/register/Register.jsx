import "./register.css"

export default function Register() {
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
  <input placeholder="UserName" className="loginInput" />
  <input placeholder="Email" className="loginInput" />
  <input placeholder="Password" className="loginInput" />
  <input placeholder="Password Again" className="loginInput" />
  <button className="loginButton">Sign Up</button>
   <span className="loginRegisterButton">Log into Account</span>
</div>
    </div>
        </div>
          </div>
  );
}

