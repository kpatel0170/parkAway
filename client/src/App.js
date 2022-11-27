import './App.css';
import Login from './pages/Login/'
import NavBar from './components/NavBar/'
import Prizing from './pages/Prizing/'
// import {}


function App() {
  
  return (
    <div>
      <NavBar />
      <Prizing />
      {/* <Routes>
      //       <Route exact path="/" component={Add} />
      //       <Route exact path="/Login" component={Login} />
      //   </Routes>
      <Login /> */}
    </div>
  );
}

export default App;
