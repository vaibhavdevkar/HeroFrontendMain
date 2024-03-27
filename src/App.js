import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Footer from './components/Footer.jsx';
import Dashboard from './components/Dashboard.jsx';
import AnalogParameter from './components/AnalogParameter.jsx'
import VfdStatus from './components/VfdStatus.jsx'
import Hotwaterreport from './components/report/Hotwaterreport.js';
import Hotwatercharts from './components/report/Hotwatercharts.js';
import DegreaseReport from './components/report/DegreaseReport.js'
import  PreDegreaseReport from './components/report/PreDegreaseReport.js'
import  DmWater1Report from './components/report/DmWater1Report.js'

import  Wr1Report from './components/report/Wr1Report.js'
import  Wr2Report from './components/report/Wr2Report.js'
import  Wr3Report from './components/report/Wr3Report.js'
import  Wr4Report from './components/report/Wr4Report.js'
import OxsilianReport from './components/report/OxsilianReport.js'
import FreshWaterReport from './components/report/FreshWaterReport.js'

// import  PreDegreaseReport from './components/report/PreDegreaseReport.js'
// import  PreDegreaseReport from './components/report/PreDegreaseReport.js'
// import  PreDegreaseReport from './components/report/PreDegreaseReport.js'




function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes> 
      <Route path="/" element={<Dashboard/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/analogparameter" element={<AnalogParameter/>} />
      <Route path="/vfdstatus" element={<VfdStatus />} />
      <Route path="/dashoboard/hotwaterreport" element={<Hotwaterreport />} />
      <Route path="/dashboard/hotwatercharts" element={<Hotwatercharts />} />
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
