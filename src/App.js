import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Footer from './components/Footer.jsx';
import Navbar from './components/Navbar.jsx';
import Dashboard from './components/Dashboard.jsx';
import AnalogParameter from './components/AnalogParameter.jsx'
import VfdStatus from './components/VfdStatus.jsx'
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes> 
      <Route path="/" element={<Dashboard/>} />
      <Route path="/analogparameter" element={<AnalogParameter/>} />
      <Route path="/vfdstatus" element={<VfdStatus />} />
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
