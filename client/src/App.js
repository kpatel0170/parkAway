import './App.css';
import Login from './pages/Login/'
import NavBar from './components/NavBar/'
import Home from './pages/Home/'
// import {}


function App() {
  
  return (
    <div>
      <NavBar />
      <Home />
      {/* <Routes>
      //       <Route exact path="/" component={Add} />
      //       <Route exact path="/Login" component={Login} />
      //   </Routes>
      <Login /> */}
    </div>
  );
}

export default App;
