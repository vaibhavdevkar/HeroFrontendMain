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

//chart integretion
import  DegreaseInt from './components/IntegrateChart/DegreaseInt.js'
import  Dm1WaterInt from './components/IntegrateChart/Dm1WaterInt.js'
import  FdmInt from './components/IntegrateChart/FdmInt.js'
import  OxilanInt from './components/IntegrateChart/OxilanInt.js'
 import  PreDegreaseInt from './components/IntegrateChart/PreDegreaseInt.js'
import  Wr1Int from './components/IntegrateChart/Wr1Int.js'
import  Wr2Int from './components/IntegrateChart/Wr2Int.js'
import  Wr3Int from './components/IntegrateChart/Wr3Int.js'
import  Wr4Int from './components/IntegrateChart/Wr4Int.js'
import DashboardPicto from './components/DashboardPicto.jsx';





function App() {
  return (
    <BrowserRouter>
    {/* <div className="App"> */}
      <Routes> 
      <Route path="/" element={<Dashboard/>} />
      <Route path="/dashboard" element={<DashboardPicto />} />
      <Route path="/analogparameter" element={<AnalogParameter/>} />
      <Route path="/vfdstatus" element={<VfdStatus />} />
      <Route path="/hotwaterreport" element={<Hotwaterreport />} />
      <Route path="/hotwatercharts" element={<Hotwatercharts />} />

      <Route path="/degreasereport" element={<DegreaseReport />} />
      <Route path="/predegreasereport" element={<PreDegreaseReport />} />
      <Route path="/dmwater1report" element={<DmWater1Report />} />
      <Route path="/wr1report" element={<Wr1Report />} />
      <Route path="/wr2report" element={<Wr2Report />} />
      <Route path="/wr3report" element={<Wr3Report />} />
      <Route path="/wr4report" element={<Wr4Report />} />
      <Route path="/oxsilianreport" element={<OxsilianReport />} />
      <Route path="/freshwaterreport" element={<FreshWaterReport />} />
      {/* below foregretion */}
      <Route path="/degreasechart" element={<DegreaseInt />} />
      <Route path="/dmwaterchart" element={<Dm1WaterInt />} />
      <Route path="/freshdmwaterchart" element={<FdmInt />} />
      <Route path="/oxilanchart" element={<OxilanInt />} />
      <Route path="/predegreasechart" element={<PreDegreaseInt />} />
      <Route path="/wr1chart" element={<Wr1Int />} />
      <Route path="/wr2chart" element={<Wr2Int />} />
      <Route path="/wr3chart" element={<Wr3Int />} />
      <Route path="/wr4chart" element={<Wr4Int />} />
      </Routes>
      <Footer />
    {/* </div> */}
    </BrowserRouter>
  );
}

export default App;
