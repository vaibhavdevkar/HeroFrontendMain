import React, { useState, useEffect } from 'react'
import './Dashboard.css'
import { BsGraphUpArrow } from "react-icons/bs";
import { FaInfoCircle } from "react-icons/fa";
import Navbar from './Navbar';
import { NavLink } from 'react-router-dom';
import { TbReportSearch } from "react-icons/tb";
import { FaRegChartBar } from "react-icons/fa";
import axios from 'axios';


const Dashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [headline, setHeadline] = useState("PT LINE DASHBOARD");
  const [ptlineData, setPtlineData] = useState('');
  const [motorData, setMotorData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5002/api/ptlinedata");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setPtlineData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const intervalId = setInterval(fetchData, 1000);
    fetchData();
    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run effect only once on component mount

  // Function to format the time as HH:MM:SS
  const formatTime = (time) => {
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    return `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const getCurrentDate = () => {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1; // Months are zero-indexed
    const year = currentDate.getFullYear();
    return `${day < 10 ? '0' : ''}${day}-${month < 10 ? '0' : ''}${month}-${year}`;
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5002/api/getfreqrunning'); // Adjust the endpoint URL to your backend
        setMotorData(response.data);
        // console.log(response.data)
        // setLoading(false);
      } catch (err) {
        console.log('Error fetching data');
        // setLoading(false);
      }
    };

    // Initial fetch
    fetchData();

    // Set interval to fetch data every minute (60000 milliseconds)
    const intervalId = setInterval(fetchData, 1000);

    // Cleanup to clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  const getPumpStatusColor = (status) => {
    switch (status) {
      case 'ON':
        return 'green';
      case 'OFF':
        return 'red';
      case 'FAULT':
        return 'gray';
      default:
        return 'black'; // Default color if the status is unknown
    }
  };

  return (

    <div className='first' style={{ overflow: "auto", maxHeight: "100vh" }}>
      <Navbar headline={headline} />
      <div className='text'>
        <div className="row row-cols-1 mx-sm-3 
         mx-lg-0 row-cols-sm-2 row-cols-lg-12"id="dashboard"
          style={{ margin: '' }}
        >
          <div className="col mb-1 ">
            <div className="container-fluid">
              <label>Date:</label>
              <span id='span'>{getCurrentDate()}</span>
            </div>
          </div>
          {/* <div className="col mb-1 ">
            <div className="container-fluid">
              <label>Shift:</label>
              <span id='span'>2899</span>
            </div>
          </div> */}


          {/* <div className="col mb-1 ">
            <div className="container-fluid">
              <label>Line:</label>
              <span id='span'>726</span>
            </div>
          </div> */}


          <div className="col mb-1 ">
            <div className="container-fluid">
              <label>Time:</label>
              <span id='span'>{formatTime(currentTime)}</span>
            </div>

          </div>
        </div>
      </div>
      {/* <hr style={{border:'0.8px solid grey',width:'95%',margin:'auto'}} /> */}

      <div className='container-fluid' >
        <div class="row mt-4 mx-auto flex-column flex-sm-row" >
          <div className="col" >

            <table className="table-lg table-custom ">
              <thead>
                <tr>
                  <th><span style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <NavLink to="/hotwaterreport"> <TbReportSearch style={{ color: "white" }} /></NavLink>
                    HOT WATER
                    <NavLink to="/hotwatercharts"> <FaRegChartBar style={{ color: "white" }} /></NavLink>
                  </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Pump Status</div>
                      <div className="col-4" style={{ color: getPumpStatusColor(ptlineData.HWPUMPSTATLBL) }}>
                        {ptlineData.HWPUMPSTATLBL}
                      </div>
                    </div>
                  </td>

                </tr>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Pump Motor Current</div>
                      <div className="col-4">{ptlineData.HWPUMPMOTLBL} A</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Tank Level</div>
                      <div className="col-4">{ptlineData.HWTANKLVLLBL}</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Circulation Pressure</div>
                      <div className="col-4">{ptlineData.HWCIRPRSRLBL} Bar</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Temperature</div>
                      <div className="col-4">{ptlineData.HWTEMPLBL}&deg; C</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Output Frequency</div>
                      <div className="col-4">{motorData.M1_OutputFrequency} Hz</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Running KW</div>
                      <div className="col-4">{((motorData.M1_OutputCurrent / 100) * (motorData.M1_OutputVoltage / 1000)).toFixed(2)} KW</div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col">
            <table className="table-lg table-custom">
              <thead>
                <tr>
                  <th><span style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <NavLink to="/predegreasereport"> <TbReportSearch style={{ color: "white" }} /></NavLink>
                    Pre-Degrease
                    <NavLink to="/predegreasechart"> <FaRegChartBar style={{ color: "white" }} /></NavLink>
                    {/* <BsGraphUpArrow />
                    Pre-Degrease
                    <FaInfoCircle /> */}
                  </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Pump Status</div>
                      <div className="col-4" style={{ color: getPumpStatusColor(ptlineData.HWPUMPSTATLBL) }}>
                        {ptlineData.PDPUMPSTATLBL}</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Pump Motor Current</div>
                      <div className="col-4">{ptlineData.PDPUMPMOTLBL} A</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Tank Level</div>
                      <div className="col-4">{ptlineData.PDTANKLVLLBL}</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Circulation Pressure</div>
                      <div className="col-4">{ptlineData.PDCIRPRSRLBL} Bar</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Temperature</div>
                      <div className="col-4">{ptlineData.PDTEMPLBL}&deg; C</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Output Frequency</div>
                      <div className="col-4">{motorData.M2_OutputFrequency} Hz</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Running KW</div>
                      <div className="col-4">{((motorData.M2_OutputCurrent / 100) * (motorData.M2_OutputVoltage / 1000)).toFixed(2)} KW</div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col">
            <table className="table-lg table-custom">
              <thead>
                <tr>
                  <th><span style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <NavLink to="/degreasereport"> <TbReportSearch style={{ color: "white" }} /></NavLink>
                    Degrease
                    <NavLink to="/degreasechart"> <FaRegChartBar style={{ color: "white" }} /></NavLink>
                    {/* <BsGraphUpArrow />
                    Degrease
                    <FaInfoCircle /> */}
                  </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Pump Status</div>
                      <div className="col-4" style={{ color: getPumpStatusColor(ptlineData.HWPUMPSTATLBL) }}>{ptlineData.DPUMPSTATLBL}</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Pump Motor Current</div>
                      <div className="col-4">{ptlineData.DPUMPMOTLBL} A</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Tank Level</div>
                      <div className="col-4">{ptlineData.DTANKLVLLBL}</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Circulation Pressure</div>
                      <div className="col-4">{ptlineData.DCIRPRSRLBL} Bar </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Temperature</div>
                      <div className="col-4">{ptlineData.DTEMPLBL}&deg; C</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Output Frequency</div>
                      <div className="col-4">{motorData.M3_OutputFrequency} Hz</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Running KW</div>
                      <div className="col-4">{((motorData.M3_OutputCurrent / 100) * (motorData.M3_OutputVoltage / 1000)).toFixed(2)} KW</div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col">
            <table className="table-lg table-custom">
              <thead>
                <tr>
                  <th><span style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <NavLink to="/wr1report"> <TbReportSearch style={{ color: "white" }} /></NavLink>
                    Water Rinse 1
                    <NavLink to="/wr1chart"> <FaRegChartBar style={{ color: "white" }} /></NavLink>
                    {/* <BsGraphUpArrow />
                    Water Rinse 1
                    <FaInfoCircle /> */}
                  </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Pump Status</div>
                      <div className="col-4" style={{ color: getPumpStatusColor(ptlineData.HWPUMPSTATLBL) }}>{ptlineData.WR1PUMPSTATLBL}</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Pump Motor Current</div>
                      <div className="col-4">{ptlineData.WR1PUMPMOTLBL} A</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Tank Level</div>
                      <div className="col-4">{ptlineData.WR1TANKLVLLBL}</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Circulation Pressure</div>
                      <div className="col-4">{ptlineData.WR1CIRPRSRLBL} Bar</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Temperature</div>
                      <div className="col-4">{ptlineData.WR1TEMPLBL}&deg; C</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Output Frequency</div>
                      <div className="col-4">{motorData.M3_OutputFrequency} Hz</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Running KW</div>
                      <div className="col-4">{((motorData.M4_OutputCurrent / 100) * (motorData.M4_OutputVoltage / 1000)).toFixed(2)} KW</div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col ">
            <table className="table-lg table-custom">
              <thead>
                <tr>
                  <th><span style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <NavLink to="/wr2report"> <TbReportSearch style={{ color: "white" }} /></NavLink>
                    Water Rinse 2
                    <NavLink to="/wr2chart"> <FaRegChartBar style={{ color: "white" }} /></NavLink>
                    {/* <BsGraphUpArrow />
                    Water Rinse 2
                    <FaInfoCircle /> */}
                  </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Pump Status</div>
                      <div className="col-4" style={{ color: getPumpStatusColor(ptlineData.HWPUMPSTATLBL) }}>{ptlineData.WR2PUMPSTATLBL}</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Pump Motor Current</div>
                      <div className="col-4">{ptlineData.WR2PUMPMOTLBL} A</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Tank Level</div>
                      <div className="col-4">{ptlineData.WR2TANKLVLLBL}</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Circulation Pressure</div>
                      <div className="col-4">{ptlineData.WR2CIRPRSRLBL} Bar</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Temperature</div>
                      <div className="col-4">{ptlineData.WR2TEMPLBL}&deg; C</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Output Frequency</div>
                      <div className="col-4">{motorData.M5_OutputFrequency} Hz</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Running KW</div>
                      <div className="col-4">{((motorData.M5_OutputCurrent / 100) * (motorData.M5_OutputVoltage / 1000)).toFixed(2)} KW</div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
      <div className='container-fluid'>
        <div className="row mt-4 mx-auto flex-column flex-sm-row">
          <div className="col">
            <table className="table-lg table-custom2">
              <thead>
                <tr>
                  <th>
                    <span style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <NavLink to="/dmwater1report"> <TbReportSearch style={{ color: "white" }} /></NavLink>
                      DM WATER 1
                      <NavLink to="/dmwaterchart"> <FaRegChartBar style={{ color: "white" }} /></NavLink>
                      {/* <BsGraphUpArrow />
                      DM WATER 1
                      <FaInfoCircle /> */}
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Pump Status</div>
                      <div className="col-4" style={{ color: getPumpStatusColor(ptlineData.HWPUMPSTATLBL) }}>{ptlineData.DMPUMPSTATLBL}</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Pump Motor Current</div>
                      <div className="col-4">{ptlineData.DMPUMPMOTLBL} A</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Tank Level</div>
                      <div className="col-4">{ptlineData.DMTANKLVLLBL}</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Circulation Pressure</div>
                      <div className="col-4">{ptlineData.DMCIRPRSRLBL} Bar</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">PH</div>
                      <div className="col-4">{ptlineData.DMPHLBL}</div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Conductivity</div>
                      <div className="col-4">
                        {/* id="conductivity"
                      "DMTEMPLBL": 5.17,
                      "DMSOFTWATERLBL": 183, */}

                        {ptlineData.DMConductivity}
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Output Frequency</div>
                      <div className="col-4">{motorData.M6_OutputFrequency} Hz</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Running KW</div>
                      <div className="col-4">{((motorData.M6_OutputCurrent / 100) * (motorData.M6_OutputVoltage / 1000)).toFixed(2)} KW</div>
                    </div>
                  </td>
                </tr>
              </tbody>

            </table>
          </div>
          <div className="col">
            <table className="table-lg table-custom2">
              <thead>
                <tr>
                  <th>
                    <span style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <NavLink to="/oxsilianreport"> <TbReportSearch style={{ color: "white" }} /></NavLink>
                      OXSILAN
                      <NavLink to="/oxilanchart"> <FaRegChartBar style={{ color: "white" }} /></NavLink>
                      {/* <BsGraphUpArrow />
                      OXSILAN
                      <FaInfoCircle /> */}
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Pump Status</div>
                      <div className="col-4" style={{ color: getPumpStatusColor(ptlineData.HWPUMPSTATLBL) }}>{ptlineData.OXPUMPSTATLBL}</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Pump Motor Current</div>
                      <div className="col-4">{ptlineData.OXPUMPMOTLBL} A</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Tank Level</div>
                      <div className="col-4">{ptlineData.OXTANKLVLLBL}</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Circulation Pressure</div>
                      <div className="col-4">{ptlineData.OXCIRPRSRLBL} Bar</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">PH</div>
                      <div className="col-4"> {ptlineData.OXPHLBL}</div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Conductivity</div>
                      <div className="col-4"> {ptlineData.OXConductivity}</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Output Frequency</div>
                      <div className="col-4">{motorData.M7_OutputFrequency} Hz</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Running KW</div>
                      <div className="col-4">{((motorData.M7_OutputCurrent / 100) * (motorData.M7_OutputVoltage / 1000)).toFixed(2)} KW</div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col">
            <table className="table-lg table-custom2">
              <thead>
                <tr>
                  <th>
                    <span style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <NavLink to="/wr3report"> <TbReportSearch style={{ color: "white" }} /></NavLink>
                      Water Rinse 3
                      <NavLink to="/wr3chart"> <FaRegChartBar style={{ color: "white" }} /></NavLink>
                      {/* <BsGraphUpArrow />
                      Water Rinse 3
                      <FaInfoCircle /> */}
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Pump Status</div>
                      <div className="col-4" style={{ color: getPumpStatusColor(ptlineData.HWPUMPSTATLBL) }}>{ptlineData.WR3PUMPSTATLBL}</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Pump Motor Current</div>
                      <div className="col-4">{ptlineData.WR3PUMPMOTLBL} A</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Tank Level</div>
                      <div className="col-4">{ptlineData.WR3TANKLVLLBL}</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Circulation Pressure</div>
                      <div className="col-4">{ptlineData.WR3CIRPRSRLBL} Bar</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">PH</div>
                      <div className="col-4">{ptlineData.WR3PHLBL}</div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Conductivity</div>
                      <div className="col-4" >
                        {ptlineData.WR3Conductivity}
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Output Frequency</div>
                      <div className="col-4">{motorData.M8_OutputFrequency} Hz</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Running KW</div>
                      <div className="col-4">{((motorData.M8_OutputCurrent / 100) * (motorData.M8_OutputVoltage / 1000)).toFixed(2)} KW</div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col">
            <table className="table-lg table-custom2">
              <thead>
                <tr>
                  <th>
                    <span style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <NavLink to="/wr4report"> <TbReportSearch style={{ color: "white" }} /></NavLink>
                      Water Rinse 4
                      <NavLink to="/wr4chart"> <FaRegChartBar style={{ color: "white" }} /></NavLink>
                      {/* <BsGraphUpArrow />
                      Water Rinse 4
                      <FaInfoCircle /> */}
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Pump Status</div>
                      <div className="col-4" style={{ color: getPumpStatusColor(ptlineData.HWPUMPSTATLBL) }}>{ptlineData.WR4PUMPSTATLBL}</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Pump Motor Current</div>
                      <div className="col-4">{ptlineData.WR4PUMPMOTLBL} A</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Tank Level</div>
                      <div className="col-4">{ptlineData.WR4TANKLVLLBL}</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Circulation Pressure</div>
                      <div className="col-4">{ptlineData.WR4CIRPRSRLBL} Bar</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">PH</div>
                      <div className="col-4">{ptlineData.WR4PHLBL}</div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Conductivity</div>
                      <div className="col-4">{ptlineData.WR4Conductivity}</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Output Frequency</div>
                      <div className="col-4">{motorData.M9_OutputFrequency} Hz</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Running KW</div>
                      <div className="col-4">{((motorData.M9_OutputCurrent / 100) * (motorData.M9_OutputVoltage / 1000)).toFixed(0)} KW</div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col">
            <table className="table-lg table-custom2">
              <thead>
                <tr>
                  <th>
                    <span style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <NavLink to="/freshwaterreport"> <TbReportSearch style={{ color: "white" }} /></NavLink>
                      Fresh DM Water
                      <NavLink to="/freshdmwaterchart"> <FaRegChartBar style={{ color: "white" }} /></NavLink>
                      {/* <BsGraphUpArrow />
                      Fresh DM Water
                      <FaInfoCircle /> */}
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Pump Status</div>
                      <div className="col-2" style={{ border: '1px solid white', borderRadius : "20px",padding: '1px', backgroundColor: getPumpStatusColor(ptlineData.HWPUMPSTATLBL) }}><center style={{color : "white"}}>{ptlineData.FDWPUMPSTATLBL}</center></div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Pump Motor Current</div>
                      <div className="col-4">{ptlineData.FDWPUMPMOTLBL} A</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Tank Level</div>
                      <div className="col-4">{ptlineData.FDWTANKLVLLBL}</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Circulation Pressure</div>
                      <div className="col-4">{ptlineData.FDWCIRPRSRLBL} Bar</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">PH</div>
                      <div className="col-4">{ptlineData.FDWPHLBL}</div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Conductivity</div>
                      <div className="col-4">{ptlineData.FDWConductivity}</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Output Frequency</div>
                      <div className="col-4">{motorData.M10_OutputFrequency}</div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Dashboard