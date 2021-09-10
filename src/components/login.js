import { useState } from "react";

const Login = ({ setAuthenticated }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const specialCharacters = new Set(
    "~`!@#$%^&*()-_=+{[}}\\|:;<,>.?/".split("")
  );
  const capitalLetters = new Set("ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""));
  const numbers = new Set("0123456789".split(""));
  const crypto = require("crypto");

  const performValidation = () => {
    // password validate
    if (password.length < 18) {
      let specials = 0;
      let capitals = 0;
      let numbers = 0;
      for (let i = 0; i < password.length; i++) {
        if (specialCharacters.has(password.charAt(i))) {
          specials += 1;
        } else if (capitalLetters.has(password.charAt(i))) {
          capitals += 1;
        } else if (numbers.has(password.charAt(i))) {
          numbers += 1;
        } else {
          // normal character
        }
      }

      if (specials < 3) {
        alert("Must have atleast");
      }
    } else {
      let hash = crypto.getHashes();
      let hashPwd = crypto.createHash("sha1").update(password).digest("hex");
    }
  };

  const handleChange = (inputName) => (e) => {
    if (inputName === "username") {
      setUsername(e.target.value);
    } else if (inputName === "password") {
      setPassword(e.target.value);
    }
  };

  return (
    <div className="container">
      <form>
        <div className="form-group">
          <label for="usernameinput">Username</label>
          <input
            type="text"
            className="form-control"
            value={username}
            id="usernameinput"
            aria-describedby="usernameHelp"
            onChange={handleChange("username")}
            placeholder="Enter Username"
          />
          <small id="usernameHelp" className="form-text text-muted">
            Usernames are like fake names.
          </small>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            value={password}
            onChange={handleChange("username")}
          />
          <small id="passwordHelp" className="form-text text-muted">
            Password must be 18 characters with atleast 3 special characters, 3
            capital letters, and 3 numbers.
          </small>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
