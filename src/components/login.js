const Login = () => {
  return (
    <div className="container">
      <form>
        <div className="form-group">
          <label for="usernameinput">Username</label>
          <input
            type="text"
            className="form-control"
            id="usernameinput"
            aria-describedby="usernameHelp"
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
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
