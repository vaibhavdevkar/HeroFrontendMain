// import React, { useState } from 'react'
// import Navbar from './Navbar';

// const DashboardPicto = () => {
//     const [headline, setHeadline] = useState("PT LINE DASHBOARD Picto");
//   return (
//     <div>
//         <Navbar headline={headline} />
//     </div>
//   )
// }

// export default DashboardPicto


import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import shower from '../assets/shower.png'
import Petroltank from '../assets/petroltank.png'
import axios from 'axios';


const DashboardPicto = () => {
    const [headline, setHeadline] = useState("PT Line Dashboard");
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
            return '#5edc1f';
          case 'OFF':
            return 'red';
          default :
            return 'gray'
        }
      };

      const getTankLevel = (level) => {
        switch (level) {
          case 'HIGHHIGH':
            return '#5edc1f';
          case 'HIGH':
            return '#5edc1f';
          case 'HI':
            return '#5edc1f';
          case 'LOWLOW':
            return 'red';
          case 'LOW':
            return 'red';
          default :
            return 'gray'
        }
      };

      const getTemp = (level) => {
        if(level > 40 && level < 60){
            return '#5edc1f'
        }else{
            return "red"
        }
      };


      //  temp = 40 - 60 
      //  pressure = 1.5 -3
      //  conductivity = 
      //  ph = 5 - 7




    return (
        <div className='first' style={{ overflow: "auto", height: "100%", backgroundColor: "black"}} >
            {/* <Navbar headline={headline} /> */}
            <div className='container-fluid'>
                <div className='row' style={{paddingTop: "0.5rem"}}>
                    <div className='col' style={{marginBottom : "1rem" }}>
                        <div class="card text-center" style={{ border: "1px solid white", border : "1px solid black" }}>
                            <div class="card-header" style={{ backgroundColor: "#F77F00" }}>
                                <h5 style={{ fontWeight: "bold", color: "white" }}>HotWater</h5>
                            </div>
                             <div class="card-body" style={{ backgroundColor: "#73C2FB", color: "white" }}>
                                <h5 class="card-title">PumpStatus</h5>
                                <h5 class="card-title" style={{ border: "1px solid black", backgroundColor: getPumpStatusColor(ptlineData.HWPUMPSTATLBL) }}>{ptlineData.HWPUMPSTATLBL}</h5>
                                <h5 class="card-title">Current</h5>
                                <h5 class="card-title" style={{ border: "1px solid black", backgroundColor: "#5edc1f" }}>{ptlineData.HWPUMPMOTLBL} A</h5>
                                <h5 class="card-title">TankLevel</h5>
                                <h5 class="card-title" style={{ border: "1px solid black", backgroundColor: getTankLevel(ptlineData.HWTANKLVLLBL) }}>{ptlineData.HWTANKLVLLBL}</h5>
                                <h5 class="card-title">Pressure</h5>
                                <h5 class="card-title" style={{ border: "1px solid black", backgroundColor: "#ff0800" }}>{ptlineData.HWCIRPRSRLBL} Bar</h5>
                                <h5 class="card-title">Temperature</h5>
                                <h5 class="card-title" style={{ border: "1px solid black", backgroundColor: getTemp(ptlineData.HWTEMPLBL) }}>{ptlineData.HWTEMPLBL}&deg; C</h5>
                                <h5 class="card-title">O/p Freq</h5>
                                <h5 class="card-title" style={{ border: "1px solid black", backgroundColor: "#ff0800" }}>{motorData.M1_OutputFrequency} Hz</h5>
                                <h5 class="card-title">Runingkw</h5>
                                <h5 class="card-title" style={{ border: "1px solid black", backgroundColor: "#ff0800" }}>{((motorData.M1_OutputCurrent / 100) * (motorData.M1_OutputVoltage / 1000)).toFixed(2)} KW</h5>
                            </div>
                            <div style={{backgroundColor: "black"}}>
                                <img src={shower} alt='not found' height={70} width={80} />
                            </div>
                        </div>
                    </div>
                    <div className='col' style={{marginBottom : "1rem" }}>
                        <div class="card text-center" style={{ border: "1px solid black" }}>
                            <div class="card-header" style={{ backgroundColor: "#F77F00" }}>
                                <h5 style={{ fontWeight: "bold", color: "white" }}>PreDegrease</h5>
                            </div>
                            <div class="card-body" style={{ backgroundColor: "#73C2FB" , color: "white" }}>
                                <h5 class="card-title">PumpStatus</h5>
                                <h5 class="card-title" style={{ border: "1px solid black", backgroundColor: getPumpStatusColor(ptlineData.PDPUMPSTATLBL) }}>{ptlineData.PDPUMPSTATLBL}</h5>
                                <h5 class="card-title">Current</h5>
                                <h5 class="card-title" style={{ border: "1px solid black", backgroundColor: "#5edc1f" }}>{ptlineData.PDPUMPMOTLBL} A</h5>
                                <h5 class="card-title">TankLevel</h5>
                                <h5 class="card-title" style={{ border: "1px solid black", backgroundColor: "#5edc1f" }}>{ptlineData.PDTANKLVLLBL}</h5>
                                <h5 class="card-title">Pressure</h5>
                                <h5 class="card-title" style={{ border: "1px solid black", backgroundColor: "#ff0800" }}>{ptlineData.PDCIRPRSRLBL} Bar</h5>
                                <h5 class="card-title">Temperature</h5>
                                <h5 class="card-title" style={{ border: "1px solid black", backgroundColor: getTemp(ptlineData.PDTEMPLBL) }}>{ptlineData.PDTEMPLBL}&deg; C</h5>
                                <h5 class="card-title">O/p Freq</h5>
                                <h5 class="card-title" style={{ border: "1px solid black", backgroundColor: "#ff0800" }}>{motorData.M2_OutputFrequency} Hz</h5>
                                <h5 class="card-title">RunningKw</h5>
                                <h5 class="card-title" style={{ border: "1px solid black", backgroundColor: "#ff0800" }}>{((motorData.M2_OutputCurrent / 100) * (motorData.M1_OutputVoltage / 1000)).toFixed(2)} KW</h5>
                            </div>
                            <div style={{backgroundColor: "black"}}>
                                <img src={shower} alt='not found' height={70} width={80} />
                            </div>
                        </div>
                    </div>
                    <div className='col' style={{marginBottom : "1rem" }}>
                        <div class="card text-center" style={{ border: "1px solid black" }}>
                            <div class="card-header" style={{ backgroundColor: "#F77F00" }}>
                                <h5 style={{ fontWeight: "bold", color: "white" }}>Degrease</h5>
                            </div>
                            <div class="card-body" style={{ backgroundColor: "#73C2FB" , color: "white" }}>
                                <h5 class="card-title">PumpStatus</h5>
                                <h5 class="card-title" style={{ border: "1px solid black", backgroundColor: getPumpStatusColor(ptlineData.DPUMPSTATLBL) }}>{ptlineData.DPUMPSTATLBL}</h5>
                                <h5 class="card-title">Current</h5>
                                <h5 class="card-title" style={{ border: "1px solid black", backgroundColor: "#5edc1f" }}>{ptlineData.DPUMPMOTLBL} A</h5>
                                <h5 class="card-title">TankLevel</h5>
                                <h5 class="card-title" style={{ border: "1px solid black", backgroundColor: "#5edc1f" }}>{ptlineData.DTANKLVLLBL}</h5>
                                <h5 class="card-title">Pressure</h5>
                                <h5 class="card-title" style={{ border: "1px solid black", backgroundColor: "#ff0800" }}>{ptlineData.DCIRPRSRLBL} Bar</h5>
                                <h5 class="card-title">Temperature</h5>
                                <h5 class="card-title" style={{ border: "1px solid black", backgroundColor: getTemp(ptlineData.DTEMPLBL) }}>{ptlineData.DTEMPLBL}&deg; C</h5>
                                <h5 class="card-title">O/p Freq</h5>
                                <h5 class="card-title" style={{ border: "1px solid black", backgroundColor: "#5edc1f" }}>{motorData.M3_OutputFrequency} Hz</h5>
                                <h5 class="card-title">Runingkw</h5>
                                <h5 class="card-title" style={{ border: "1px solid black", backgroundColor: "#ff0800" }}>{((motorData.M3_OutputCurrent / 100) * (motorData.M3_OutputVoltage / 1000)).toFixed(2)} KW</h5>
                            </div>
                            <div style={{backgroundColor: "black"}}>
                                <img src={shower} alt='not found' height={70} width={80} />
                            </div>
                        </div>
                    </div>
                    <div className='col' style={{marginBottom : "1rem" }}>
                        <div class="card text-center" style={{ border: "1px solid black" }}>
                            <div class="card-header" style={{ backgroundColor: "#F77F00" }}>
                                <h5 style={{ fontWeight: "bold", color: "white" }}>WaterRinse1</h5>
                            </div>
                            <div class="card-body" style={{ backgroundColor: "#73C2FB" , color: "white" }}>
                                <h5 class="card-title">PumpStatus</h5>
                                <h5 class="card-title" style={{ border: "1px solid black", backgroundColor: getPumpStatusColor(ptlineData.WR1PUMPSTATLBL) }}>{ptlineData.WR1PUMPSTATLBL}</h5>
                                <h5 class="card-title">Current</h5>
                                <h5 class="card-title" style={{ border: "1px solid black", backgroundColor: "#5edc1f" }}>{ptlineData.WR1PUMPMOTLBL} A</h5>
                                <h5 class="card-title">TankLevel</h5>
                                <h5 class="card-title" style={{ border: "1px solid black", backgroundColor: "#5edc1f" }}>{ptlineData.WR1TANKLVLLBL}</h5>
                                <h5 class="card-title">Pressure</h5>
                                <h5 class="card-title" style={{ border: "1px solid black", backgroundColor: "#ff0800" }}>{ptlineData.WR1CIRPRSRLBL} Bar</h5>
                                <h5 class="card-title">Temperature</h5>
                                <h5 class="card-title" style={{ border: "1px solid black", backgroundColor: getTemp(ptlineData.WR1TEMPLBL) }}>{ptlineData.WR1TEMPLBL}&deg; C</h5>
                                <h5 class="card-title">O/p Freq</h5>
                                <h5 class="card-title" style={{ border: "1px solid black", backgroundColor: "#5edc1f" }}>{motorData.M3_OutputFrequency} Hz</h5>
                                <h5 class="card-title">Runingkw</h5>
                                <h5 class="card-title" style={{ border: "1px solid black", backgroundColor: "#ff0800" }}>{((motorData.M4_OutputCurrent / 100) * (motorData.M4_OutputVoltage / 1000)).toFixed(2)} KW</h5>
                            </div>
                            <div style={{backgroundColor: "black"}}>
                                <img src={shower} alt='not found' height={70} width={80} />
                            </div>
                        </div>
                    </div>
                    <div className='col' style={{marginBottom : "1rem" }}>
                        <div class="card text-center" style={{ border: "1px solid black" }}>
                            <div class="card-header" style={{ backgroundColor: "#F77F00" }}>
                                <h5 style={{ fontWeight: "bold", color: "white" }}>WaterRinse2</h5>
                            </div>
                            <div class="card-body" style={{ backgroundColor: "#73C2FB" , color: "white" }}>
                                <h5 class="card-title">PumpStatus</h5>
                                <h5 class="card-title" style={{ border: "1px solid black", backgroundColor: getPumpStatusColor(ptlineData.WR2PUMPSTATLBL) }}>{ptlineData.WR2PUMPSTATLBL}</h5>
                                <h5 class="card-title">Current</h5>
                                <h5 class="card-title" style={{ border: "1px solid black", backgroundColor: "#5edc1f" }}>{ptlineData.WR2PUMPMOTLBL} A</h5>
                                <h5 class="card-title">TankLevel</h5>
                                <h5 class="card-title" style={{ border: "1px solid black", backgroundColor: "#5edc1f" }}>{ptlineData.WR2TANKLVLLBL}</h5>
                                <h5 class="card-title">Pressure</h5>
                                <h5 class="card-title" style={{ border: "1px solid black", backgroundColor: "#ff0800" }}>{ptlineData.WR2CIRPRSRLBL} Bar</h5>
                                <h5 class="card-title">Temperature</h5>
                                <h5 class="card-title" style={{ border: "1px solid black", backgroundColor: getTemp(ptlineData.WR2TEMPLBL) }}>{ptlineData.WR2TEMPLBL}&deg; C</h5>
                                <h5 class="card-title">O/p Freq</h5>
                                <h5 class="card-title" style={{ border: "1px solid black", backgroundColor: "#5edc1f" }}>{motorData.M5_OutputFrequency} Hz</h5>
                                <h5 class="card-title">Runingkw</h5>
                                <h5 class="card-title" style={{ border: "1px solid black", backgroundColor: "#ff0800" }}>{((motorData.M5_OutputCurrent / 100) * (motorData.M5_OutputVoltage / 1000)).toFixed(2)} KW</h5>
                            </div>
                            <div style={{backgroundColor: "black"}}>
                                <img src={shower} alt='not found' height={70} width={80} />
                            </div>
                        </div>
                    </div>
                    <div className='col' style={{marginBottom : "1rem" }}>
                        <div class="card text-center" style={{ border: "1px solid black" }}>
                            <div class="card-header" style={{ backgroundColor: "#F77F00" }}>
                                <h5 style={{ fontWeight: "bold", color: "white" }}>DMWater1</h5>
                            </div>
                            <div class="card-body" style={{ backgroundColor: "#73C2FB" , color: "white"}}>
                                <h5 class="card-title">PumpStatus</h5>
                                <h5 class="card-title" style={{ border: "1px solid black", backgroundColor: getPumpStatusColor(ptlineData.DMPUMPSTATLBL) }}>{ptlineData.DMPUMPSTATLBL}</h5>
                                <h5 class="card-title">Current</h5>
                                <h5 class="card-title" style={{ border: "1px solid black", backgroundColor: "#5edc1f" }}>{ptlineData.DMPUMPMOTLBL} A</h5>
                                <h5 class="card-title">TankLevel</h5>
                                <h5 class="card-title" style={{ border: "1px solid black", backgroundColor: "#5edc1f" }}>{ptlineData.DMTANKLVLLBL}</h5>
                                <h5 class="card-title">Pressure</h5>
                                <h5 class="card-title" style={{ border: "1px solid black", backgroundColor: "#ff0800" }}>{ptlineData.DMCIRPRSRLBL} Bar</h5>
                                <h5 class="card-title">PH</h5>
                                <h5 class="card-title" style={{ border: "1px solid black", backgroundColor: "#5edc1f" }}>{ptlineData.DMPHLBL}</h5>
                                <h5 class="card-title">Conductivity</h5>
                                <h5 class="card-title" style={{ border: "1px solid black", backgroundColor: "#ff0800" }}> {ptlineData.DMConductivity}</h5>
                                <h5 class="card-title">O/p Freq</h5>
                                <h5 class="card-title" style={{ border: "1px solid black", backgroundColor: "#ff0800" }}>{motorData.M6_OutputFrequency} Hz</h5>
                                <h5 class="card-title">RunningKW</h5>
                                <h5 class="card-title" style={{ border: "1px solid black", backgroundColor: "#ff0800" }}>{((motorData.M6_OutputCurrent / 100) * (motorData.M6_OutputVoltage / 1000)).toFixed(2)} KW</h5>
                            </div>
                            <div style={{backgroundColor: "black"}}>
                                <img src={shower} alt='not found' height={70} width={80} />
                            </div>
                        </div>
                    </div>
                    <div className='col' style={{marginBottom : "1rem" }}>
                        <div class="card text-center" style={{ border: "1px solid black" , color: "white"}}>
                            <div class="card-header" style={{ backgroundColor: "#F77F00" }}>
                                <h5 style={{ fontWeight: "bold", color: "white" }}>Oxsilan</h5>
                            </div>
                            <div class="card-body" style={{ backgroundColor: "#73C2FB" }}>
                                <h5 class="card-title">PumpStatus</h5>
                                <h5 class="card-title" style={{ border: "1px solid black", backgroundColor: getPumpStatusColor(ptlineData.OXPUMPSTATLBL) }}>{ptlineData.OXPUMPSTATLBL}</h5>
                                <h5 class="card-title">Current</h5>
                                <h5 class="card-title" style={{ border: "1px solid black", backgroundColor: "#5edc1f" }}>{ptlineData.OXPUMPMOTLBL} A</h5>
                                <h5 class="card-title">TankLevel</h5>
                                <h5 class="card-title" style={{ border: "1px solid black", backgroundColor: "#5edc1f" }}>{ptlineData.OXTANKLVLLBL}</h5>
                                <h5 class="card-title">Pressure</h5>
                                <h5 class="card-title" style={{ border: "1px solid black", backgroundColor: "#ff0800" }}>{ptlineData.OXCIRPRSRLBL} Bar</h5>
                                <h5 class="card-title">PH</h5>
                                <h5 class="card-title" style={{ border: "1px solid black", backgroundColor: "#5edc1f" }}>{ptlineData.OXPHLBL}</h5>
                                <h5 class="card-title">Conductivity</h5>
                                <h5 class="card-title" style={{ border: "1px solid black", backgroundColor: "#ff0800" }}>{ptlineData.OXConductivity}</h5>
                                <h5 class="card-title">O/p Freq</h5>
                                <h5 class="card-title" style={{ border: "1px solid black", backgroundColor: "#ff0800" }}>{motorData.M7_OutputFrequency} Hz</h5>
                                <h5 class="card-title">RunningKW</h5>
                                <h5 class="card-title" style={{ border: "1px solid black", backgroundColor: "#ff0800" }}>{((motorData.M7_OutputCurrent / 100) * (motorData.M7_OutputVoltage / 1000)).toFixed(2)} KW</h5>
                            </div>
                            <div style={{backgroundColor: "black"}}>
                                <img src={shower} alt='not found' height={70} width={80} />
                            </div>
                        </div>
                    </div>
                    <div className='col' style={{marginBottom : "1rem" }}>
                        <div class="card text-center" style={{ border: "1px solid black" }}>
                            <div class="card-header" style={{ backgroundColor: "#F77F00" }}>
                                <h5 style={{ fontWeight: "bold", color: "white" }}>DMWater2</h5>
                            </div>
                            <div class="card-body" style={{ backgroundColor: "#73C2FB" , color: "white"}}>
                                <h5 class="card-title">PumpStatus</h5>
                                <h5 class="card-title" style={{ border: "1px solid black", backgroundColor: getPumpStatusColor(ptlineData.WR3PUMPSTATLBL) }}>{ptlineData.WR3PUMPSTATLBL}</h5>
                                <h5 class="card-title">Current</h5>
                                <h5 class="card-title" style={{ border: "1px solid black", backgroundColor: "#5edc1f" }}>{ptlineData.WR3PUMPMOTLBL} A</h5>
                                <h5 class="card-title">TankLevel</h5>
                                <h5 class="card-title" style={{ border: "1px solid black", backgroundColor: "#5edc1f" }}>{ptlineData.WR3TANKLVLLBL}</h5>
                                <h5 class="card-title">Pressure</h5>
                                <h5 class="card-title" style={{ border: "1px solid black", backgroundColor: "#ff0800" }}>{ptlineData.WR3CIRPRSRLBL} Bar</h5>
                                <h5 class="card-title">PH</h5>
                                <h5 class="card-title" style={{ border: "1px solid black", backgroundColor: "#5edc1f" }}>{ptlineData.WR3PHLBL}</h5>
                                <h5 class="card-title">Conductivity</h5>
                                <h5 class="card-title" style={{ border: "1px solid black", backgroundColor: "#ff0800" }}>{ptlineData.WR3Conductivity}</h5>
                                <h5 class="card-title">O/p Freq</h5>
                                <h5 class="card-title" style={{ border: "1px solid black", backgroundColor: "#ff0800" }}>{motorData.M8_OutputFrequency} Hz</h5>
                                <h5 class="card-title">RunningKW</h5>
                                <h5 class="card-title" style={{ border: "1px solid black", backgroundColor: "#ff0800" }}>{((motorData.M8_OutputCurrent / 100) * (motorData.M8_OutputVoltage / 1000)).toFixed(2)} KW</h5>
                            </div>
                            <div style={{backgroundColor: "black"}}>
                                <img src={shower} alt='not found' height={70} width={80} />
                            </div>
                        </div>
                    </div>
                    <div className='col' style={{marginBottom : "1rem" }}>
                        <div class="card text-center" style={{ border: "1px solid black" }}>
                            <div class="card-header" style={{ backgroundColor: "#F77F00" }}>
                                <h5 style={{ fontWeight: "bold", color: "white" }}>DMWater3</h5>
                            </div>
                            <div class="card-body" style={{ backgroundColor: "#73C2FB" , color: "white"}}>
                                <h5 class="card-title">PumpStatus</h5>
                                <h5 class="card-title" style={{ border: "1px solid black", backgroundColor: getPumpStatusColor(ptlineData.WR4PUMPSTATLBL) }}>{ptlineData.WR4PUMPSTATLBL}</h5>
                                <h5 class="card-title">Current</h5>
                                <h5 class="card-title" style={{ border: "1px solid black", backgroundColor: "#5edc1f" }}>{ptlineData.WR4PUMPMOTLBL} A</h5>
                                <h5 class="card-title">TankLevel</h5>
                                <h5 class="card-title" style={{ border: "1px solid black", backgroundColor: "#5edc1f" }}>{ptlineData.WR4TANKLVLLBL}</h5>
                                <h5 class="card-title">Pressure</h5>
                                <h5 class="card-title" style={{ border: "1px solid black", backgroundColor: "#ff0800" }}>{ptlineData.WR4CIRPRSRLBL} Bar</h5>
                                <h5 class="card-title">PH</h5>
                                <h5 class="card-title" style={{ border: "1px solid black", backgroundColor: "#5edc1f" }}>{ptlineData.WR4PHLBL}</h5>
                                <h5 class="card-title">Conductivity</h5>
                                <h5 class="card-title" style={{ border: "1px solid black", backgroundColor: "#ff0800" }}>{ptlineData.WR4Conductivity}</h5>
                                <h5 class="card-title">O/p Freq</h5>
                                <h5 class="card-title" style={{ border: "1px solid black", backgroundColor: "#5edc1f" }}>{motorData.M9_OutputFrequency} Hz</h5>
                                <h5 class="card-title">Runingkw</h5>
                                <h5 class="card-title" style={{ border: "1px solid black", backgroundColor: "#ff0800" }}>{((motorData.M9_OutputCurrent / 100) * (motorData.M9_OutputVoltage / 1000)).toFixed(0)} KW</h5>
                            </div>
                            <div style={{backgroundColor: "black"}}> 
                                <img src={shower} alt='not found' height={70} width={80} />
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div class="card text-center" style={{ border: "1px solid black" }}>
                            <div class="card-header" style={{ backgroundColor: "#F77F00" }}>
                                <h5 style={{ fontWeight: "bold", color: "white" }}>DMWater4</h5>
                            </div>
                            <div class="card-body" style={{ backgroundColor: "#73C2FB" , color: "white" }}>
                                <h5 class="card-title">PumpStatus</h5>
                                <h5 class="card-title" style={{ border: "1px solid black", backgroundColor: getPumpStatusColor(ptlineData.FDWPUMPSTATLBL)}}>{ptlineData.FDWPUMPSTATLBL}</h5>
                                <h5 class="card-title">Current</h5>
                                <h5 class="card-title" style={{ border: "1px solid black", backgroundColor: "#5edc1f" }}>{ptlineData.FDWPUMPMOTLBL} A</h5>
                                <h5 class="card-title">TankLevel</h5>
                                <h5 class="card-title" style={{ border: "1px solid black", backgroundColor: "#5edc1f" }}>{ptlineData.FDWTANKLVLLBL}</h5>
                                <h5 class="card-title">Pressure</h5>
                                <h5 class="card-title" style={{ border: "1px solid black", backgroundColor: "#ff0800" }}>{ptlineData.FDWCIRPRSRLBL} Bar</h5>
                                <h5 class="card-title">PH</h5>
                                <h5 class="card-title" style={{ border: "1px solid black", backgroundColor: "#5edc1f" }}>{ptlineData.FDWPHLBL}</h5>
                                <h5 class="card-title">Conductivity</h5>
                                <h5 class="card-title" style={{ border: "1px solid black", backgroundColor: "#ff0800" }}>{ptlineData.FDWConductivity}</h5>
                                <h5 class="card-title">O/p Freq</h5>
                                <h5 class="card-title" style={{ border: "1px solid black", backgroundColor: "#5edc1f" }}>{motorData.M10_OutputFrequency}</h5>
                                {/* <h5 class="card-title">Runingkw</h5>
                                <h5 class="card-title" style={{ border: "1px solid black", backgroundColor: "#ff0800" }}>46</h5> */}
                            </div>
                            <div style={{backgroundColor: "black"}}>
                                <img src={shower} alt='not found' height={70} width={80} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                <img src={Petroltank} alt='not found' height={170}  />
                </div>
            </div>
        </div >
    );
};

export default DashboardPicto;
