import { useState } from "react";

const Login = ({ setApiKey }) => {
  const [password, setPassword] = useState("");
  const specialCharacters = new Set(
    "~`!@#$%^&*()-_=+{[}}\\|:;<,>.?/".split("")
  );
  const capitalLetters = new Set("ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""));
  const numbers = new Set("0123456789".split(""));
  const crypto = require("crypto");

  const performValidation = () => {
    if (password.length < 18) {
      alert("Password too short");
    } else {
      let specials = 0;
      let capitals = 0;
      let nums = 0;
      for (let i = 0; i < password.length; i++) {
        if (specialCharacters.has(password.charAt(i))) {
          specials += 1;
        } else if (capitalLetters.has(password.charAt(i))) {
          capitals += 1;
        } else if (numbers.has(password.charAt(i))) {
          nums += 1;
        } else {
          // normal character
        }
      }

      if (specials < 3) {
        alert("Must have at least 4 special characters");
      } else if (capitals < 3) {
        alert("Must have at least 4 capital characters");
      } else if (nums < 3) {
        alert("Must have at least 4 numbers");
      } else {
        // okay
        const salt = "saltySnail%";
        var hash = crypto.createHmac("sha512", salt);
        let value = hash.update(password).digest("hex");

        if (value === process.env.REACT_APP_PASSWORD_SALT_HASH) {
          // decrypt the api keys with only password

          var decipherkey = crypto.createDecipher("aes-128-cbc", password);
          const encrypted_api_key =
            "b320e99d0d4f644ad42add3bfa1fbc11ba4310226a4d71f4e178ee58f8eeb662";
          var api_key = decipherkey.update(encrypted_api_key, "hex", "utf8");
          api_key += decipherkey.final("utf8");
          console.log("decyphered", api_key);
          localStorage.setItem("apiKey", api_key);
          setApiKey(api_key);
        } else {
          alert("Incorrect");
          setPassword("");
        }
      }
    }
  };

  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="container">
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Decryption Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            value={password}
            onChange={handleChange}
          />
          <small id="passwordHelp" className="form-text text-muted">
            Password must be 18 characters with atleast 3 special characters, 3
            capital letters, and 3 numbers.
          </small>
        </div>
        <button
          type="button"
          onClick={performValidation}
          className="btn btn-primary"
        >
          Enter
        </button>
      </form>
    </div>
  );
};

export default Login;
