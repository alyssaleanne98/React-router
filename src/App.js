// import route and our components 
import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Stock from './pages/Stock';
import Dashboard from './pages/Dashboard';
import Nav from './components/Nav';


function App() {
  // We will use the Route component to specify each route
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/stock/:symbol" element={<Stock />} />
        <Route path="/stock" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
