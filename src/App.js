
import './App.css';
import Portfolio from './Components/Portfolio/Portfolio';
import {
  BrowserRouter as Router
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Portfolio></Portfolio>
    </Router>
  );
}

export default App;
