import { Link } from "react-router-dom";
import "./styles/App.css";
import "./styles/global.css";

function App() {
  return (
    <>
      <div className="center-both">

        <nav>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/example">Example</Link>
        </nav>
      </div>
    </>
  );
}

export default App;