
import './App.css';
import { RouteCompo } from './Redu/CompoUI/RouteCompo';
import {
    Link
} from "react-router-dom";

function App() {
   return (
    <div className="App">
       <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/student">Student</Link>
                <Link className="nav-link" to="contact">Contact</Link>
<RouteCompo/>

    </div>
  );
}

export default App;
