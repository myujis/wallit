import "../styles/login-page.css";

interface LoginData {
  username: string;
  password: string;
}

function LoginPage() {
  return (
    <div id="login-page">
      <div className="container">
        <h1>Entrar</h1>
        <form>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            required
            className="input"
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            required
            className="input"
          />
          <input type="submit" value="Confirm" className="button" />
        </form>
      </div>
    </div>
  );
}
export default LoginPage;
