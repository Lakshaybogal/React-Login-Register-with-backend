/* eslint-disable @typescript-eslint/no-explicit-any */
import Home from "./home";
import Greet from "./greet";
import Login from "./login";
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/greet" element={<Greet/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
