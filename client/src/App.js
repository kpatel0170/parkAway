import './App.css';
import NavBar from './components/NavBar/'
import Login from './pages/Login/'
import Home from './pages/Home/'
import Pricing from './pages/Pricing/'
import Add from './pages/Add/'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter as Routes, Route} from 'react-router-dom'


function App() {
  
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/add" component={Add} />
        <Route exact path="/pricing" component={Pricing} />
      </Routes>
    </>
  );
}

export default App;
