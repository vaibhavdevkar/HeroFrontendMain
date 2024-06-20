import Table from 'react-bootstrap/Table';
import Navbar from './Navbar';
import React, { useState, useEffect } from "react";
import './Analog.css'

function StripedColumnsExample() {
  const [headline, setHeadline] = useState(" ANALOG PARAMETER SETTING SCREEN ");

  const [ai1data, setAi1data] = useState('');
  const [ai2data, setAi2data] = useState('');
  const [ai3data, setAi3data] = useState('');
  const [ai4data, setAi4data] = useState('');

  // Fetch data from API 1 every minute
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5002/api/ai1get");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setAi1data(data);
      } catch (error) {
        console.error("Error fetching data from API 1:", error);
      }
    };

    const intervalId = setInterval(fetchData, 60000); // 60,000 milliseconds = 1 minute
    fetchData(); // Immediately fetch once when the component mounts

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []); // Only runs once on component mount

  // Fetch data from API 2 every minute
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5002/api/ai2get");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setAi2data(data);
      } catch (error) {
        console.error("Error fetching data from API 2:", error);
      }
    };

    const intervalId = setInterval(fetchData, 60000);
    fetchData(); // Initial fetch when component mounts

    return () => clearInterval(intervalId);
  }, []); // Cleanup on unmount

  // Fetch data from API 3 every minute
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5002/api/ai3get");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setAi3data(data);
      } catch (error) {
        console.error("Error fetching data from API 3:", error);
      }
    };

    const intervalId = setInterval(fetchData, 60000);
    fetchData();

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []); // Only runs once when component mounts

  // Fetch data from API 4 every minute
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5002/api/ai4get");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setAi4data(data);
      } catch (error) {
        console.error("Error fetching data from API 4:", error);
      }
    };

    const intervalId = setInterval(fetchData, 60000);
    fetchData(); // Initial fetch when component mounts

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <div> 
       <Navbar headline={headline}/>
      <center>
        <div style={{overflow:"auto", maxHeight: "80vh" }}>
     <Table responsive bordered hover size="sm"  style={{marginTop:"1rem", width:"90%" ,height:"450px",borderColor:'grey',marginBottom:'2rem',marginTop:'1rem'}} className='text-center  table-bordered'  >
       <tbody>
        <tr >
          <td rowSpan={3} >Sr No</td>
          <td rowSpan={3}>Parameter</td>
          <td className='text-danger' style={{}}>Location</td>  
          <td className='text-danger'>Location</td>
          <td className='text-danger'>Location</td>
          <td className='text-danger'>Location</td>
          <td className='text-danger'>Location</td>
          <td className='text-danger'>Location</td>
          <td className='text-danger'>Location</td>
          <td className='text-danger'>Location</td>
        </tr>
         <tr>
          <td className='text-danger'>Sensor Name</td>
          <td className='text-danger'> Sensor Name</td>
          <td className='text-danger'>Sensor Name</td>
          <td className='text-danger'>Sensor Name</td>
          <td className='text-danger'>Sensor Name</td>
          <td className='text-danger'>Sensor Name</td>
          <td className='text-danger'>Sensor Name</td>
          <td  className='text-danger'>Sensor Name</td>
        </tr>
        <tr>
          <td>Al1 CH1</td>
          <td>Al1 CH2</td>
          <td>Al1 CH3</td>
          <td>Al1 CH4</td>
          <td>Al1 CH5</td>
          <td>Al1 CH6</td>
          <td>Al1 CH7</td>
          <td>Al1 CH8</td>
        </tr>
        {/* <tr >
          <td>1</td>
          <td>Scale _Min</td>
          <td>{ai1data.AI1CH1_Scale_Min}</td>
          <td>{ai1data.AI1CH2_Scale_Min}</td>
          <td>{ai1data.AI1CH3_Scale_Min}</td>
          <td>{ai1data.AI1CH4_Scale_Min}</td>
          <td>{ai1data.AI1CH5_Scale_Min}</td>
          <td>{ai1data.AI1CH6_Scale_Min}</td>
          <td>{ai1data.AI1CH7_Scale_Min}</td>
          <td>{ai1data.AI1CH8_Scale_Min}</td>
        </tr> */}
        {/* <tr>
          <td>2</td>
          <td>Scale_Max</td>
          <td>{ai1data.AI1CH1_Scale_Max}</td>
          <td>{ai1data.AI1CH2_Scale_Max}</td>
          <td>{ai1data.AI1CH3_Scale_Max}</td>
          <td>{ai1data.AI1CH4_Scale_Max}</td>
          <td>{ai1data.AI1CH5_Scale_Max}</td>
          <td>{ai1data.AI1CH6_Scale_Max}</td>
          <td>{ai1data.AI1CH7_Scale_Max}</td>
          <td>{ai1data.AI1CH8_Scale_Max}</td>
        </tr> */}
        <tr>
          <td>1</td>
          <td>High_High_Set_Value</td>
          <td>{ai1data.AI1CH1_High_High_Set_Value}</td>
          <td>{ai1data.AI1CH2_High_High_Set_Value}</td>
          <td>{ai1data.AI1CH3_High_High_Set_Value}</td>
          <td>{ai1data.AI1CH4_High_High_Set_Value}</td>
          <td>{ai1data.AI1CH5_High_High_Set_Value}</td>
          <td>{ai1data.AI1CH6_High_High_Set_Value}</td>
          <td>{ai1data.AI1CH7_High_High_Set_Value}</td>
          <td>{ai1data.AI1CH8_High_High_Set_Value}</td>
        </tr>
        <tr>
          <td>2</td>
          <td>High_Set_Value</td>
          <td>{ai1data.AI1CH1_High_Set_Value}</td>
          <td>{ai1data.AI1CH2_High_Set_Value}</td>
          <td>{ai1data.AI1CH3_High_Set_Value}</td>
          <td>{ai1data.AI1CH4_High_Set_Value}</td>
          <td>{ai1data.AI1CH5_High_Set_Value}</td>
          <td>{ai1data.AI1CH6_High_Set_Value}</td>
          <td>{ai1data.AI1CH7_High_Set_Value}</td>
          <td>{ai1data.AI1CH8_High_Set_Value}</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Low_Set_Value</td>
          <td>{ai1data.AI1CH1_Low_Set_Value}</td>
          <td>{ai1data.AI1CH2_Low_Set_Value}</td>
          <td>{ai1data.AI1CH3_Low_Set_Value}</td>
          <td>{ai1data.AI1CH4_Low_Set_Value}</td>
          <td>{ai1data.AI1CH5_Low_Set_Value}</td>
          <td>{ai1data.AI1CH6_Low_Set_Value}</td>
          <td>{ai1data.AI1CH7_Low_Set_Value}</td>
          <td>{ai1data.AI1CH8_Low_Set_Value}</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Low_Low_Set-Value</td>
          <td>{ai1data.AI1CH1_Low_Low_Set_Value}</td>
          <td>{ai1data.AI1CH2_Low_Low_Set_Value}</td>
          <td>{ai1data.AI1CH3_Low_Low_Set_Value}</td>
          <td>{ai1data.AI1CH4_Low_Low_Set_Value}</td>
          <td>{ai1data.AI1CH5_Low_Low_Set_Value}</td>
          <td>{ai1data.AI1CH6_Low_Low_Set_Value}</td>
          <td>{ai1data.AI1CH7_Low_Low_Set_Value}</td>
          <td>{ai1data.AI1CH8_Low_Low_Set_Value}</td>
        </tr>
        <tr>
          <td>5</td>
          <td > Timer_Set_Time</td>
          <td>{ai1data.AI1CH1_Timer_Set_Time}</td>
          <td>{ai1data.AI1CH2_Timer_Set_Time}</td>
          <td>{ai1data.AI1CH3_Timer_Set_Time}</td>
          <td>{ai1data.AI1CH4_Timer_Set_Time}</td>
          <td>{ai1data.AI1CH5_Timer_Set_Time}</td>
          <td>{ai1data.AI1CH6_Timer_Set_Time}</td>
          <td>{ai1data.AI1CH7_Timer_Set_Time}</td>
          <td>{ai1data.AI1CH8_Timer_Set_Time}</td>
        </tr>
      </tbody>
   </Table> 
        <Table responsive bordered hover size="sm"  style={{marginTop:"1rem", width:"90%" ,height:"450px",borderColor:'grey',marginBottom:'2rem'}} className='text-center  table-bordered'  >
       <tbody>
        <tr >
          <td rowSpan={3} >Sr No</td>
          <td rowSpan={3}>Parameter</td>
          <td className='text-danger'>Location</td>  
          <td className='text-danger'>Location</td>
          <td className='text-danger'>Location</td>
          <td className='text-danger'>Location</td>
          <td className='text-danger'>Location</td>
          <td className='text-danger'>Location</td>
          <td className='text-danger'>Location</td>
          <td className='text-danger'>Location</td>
        </tr>
         <tr>
          <td className='text-danger'>Sensor Name</td>
          <td className='text-danger'> Sensor Name</td>
          <td className='text-danger'>Sensor Name</td>
          <td className='text-danger'>Sensor Name</td>
          <td className='text-danger'>Sensor Name</td>
          <td className='text-danger'>Sensor Name</td>
          <td className='text-danger'>Sensor Name</td>
          <td  className='text-danger'>Sensor Name</td>
        </tr>
        <tr>
          <td>Al2 CH1</td>
          <td>Al2 CH2</td>
          <td>Al2 CH3</td>
          <td>Al2 CH4</td>
          <td>Al2 CH5</td>
          <td>Al2 CH6</td>
          <td>Al2 CH7</td>
          <td>Al2 CH8</td>
        </tr>
        <tr>
          <td>1</td>
          <td>High_High_Set_Value</td>
          <td>{ai2data.AI2CH1_High_High_Set_Value}</td>
          <td>{ai2data.AI2CH2_High_High_Set_Value}</td>
          <td>{ai2data.AI2CH3_High_High_Set_Value}</td>
          <td>{ai2data.AI2CH4_High_High_Set_Value}</td>
          <td>{ai2data.AI2CH5_High_High_Set_Value}</td>
          <td>{ai2data.AI2CH6_High_High_Set_Value}</td>
          <td>{ai2data.AI2CH7_High_High_Set_Value}</td>
          <td>{ai2data.AI2CH8_High_High_Set_Value}</td>    </tr>
        <tr>
          <td>2</td>
          <td>High_Set_Value</td>
          <td>{ai2data.AI2CH1_High_Set_Value}</td>
          <td>{ai2data.AI2CH2_High_Set_Value}</td>
          <td>{ai2data.AI2CH3_High_Set_Value}</td>
          <td>{ai2data.AI2CH4_High_Set_Value}</td>
          <td>{ai2data.AI2CH5_High_Set_Value}</td>
          <td>{ai2data.AI2CH6_High_Set_Value}</td>
          <td>{ai2data.AI2CH7_High_Set_Value}</td>
          <td>{ai2data.AI2CH8_High_Set_Value}</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Low_Set_Value</td>
          <td>{ai2data.AI2CH1_Low_Set_Value}</td>
          <td>{ai2data.AI2CH2_Low_Set_Value}</td>
          <td>{ai2data.AI2CH3_Low_Set_Value}</td>
          <td>{ai2data.AI2CH4_Low_Set_Value}</td>
          <td>{ai2data.AI2CH5_Low_Set_Value}</td>
          <td>{ai2data.AI2CH6_Low_Set_Value}</td>
          <td>{ai2data.AI2CH7_Low_Set_Value}</td>
          <td>{ai2data.AI2CH8_Low_Set_Value}</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Low_Low_Set-Value</td>
          <td>{ai2data.AI2CH1_Low_Low_Set_Value}</td>
          <td>{ai2data.AI2CH2_Low_Low_Set_Value}</td>
          <td>{ai2data.AI2CH3_Low_Low_Set_Value}</td>
          <td>{ai2data.AI2CH4_Low_Low_Set_Value}</td>
          <td>{ai2data.AI2CH5_Low_Low_Set_Value}</td>
          <td>{ai2data.AI2CH6_Low_Low_Set_Value}</td>
          <td>{ai2data.AI2CH7_Low_Low_Set_Value}</td>
          <td>{ai2data.AI2CH8_Low_Low_Set_Value}</td>
        </tr>
        <tr>
          <td>5</td>
          <td > Timer_Set_Time</td>
          <td>{ai2data.AI2CH1_Timer_Set_Time}</td>
          <td>{ai2data.AI2CH2_Timer_Set_Time}</td>
          <td>{ai2data.AI2CH3_Timer_Set_Time}</td>
          <td>{ai2data.AI2CH4_Timer_Set_Time}</td>
          <td>{ai2data.AI2CH5_Timer_Set_Time}</td>
          <td>{ai2data.AI2CH6_Timer_Set_Time}</td>
          <td>{ai2data.AI2CH7_Timer_Set_Time}</td>
          <td>{ai2data.AI2CH8_Timer_Set_Time}</td>
        </tr>
      </tbody>
    </Table> 
    <Table responsive bordered hover size="sm"  style={{marginTop:"1rem", width:"90%" ,height:"450px",borderColor:'grey',marginBottom:'5rem'}} className='text-center  table-bordered'  >
       <tbody>
        <tr >
          <td rowSpan={3} >Sr No</td>
          <td rowSpan={3}>Parameter</td>
          <td className='text-danger'>Location</td>  
          <td className='text-danger'>Location</td>
          <td className='text-danger'>Location</td>
          <td className='text-danger'>Location</td>
          <td className='text-danger'>Location</td>
          <td className='text-danger'>Location</td>
          <td className='text-danger'>Location</td>
          <td className='text-danger'>Location</td>
        </tr>
         <tr>
          <td className='text-danger'>Sensor Name</td>
          <td className='text-danger'> Sensor Name</td>
          <td className='text-danger'>Sensor Name</td>
          <td className='text-danger'>Sensor Name</td>
          <td className='text-danger'>Sensor Name</td>
          <td className='text-danger'>Sensor Name</td>
          <td className='text-danger'>Sensor Name</td>
          <td  className='text-danger'>Sensor Name</td>
        </tr>
        <tr>
          <td>Al3 CH1</td>
          <td>Al3 CH2</td>
          <td>Al3 CH3</td>
          <td>Al3 CH4</td>
          <td>Al3 CH5</td>
          <td>Al3 CH6</td>
          <td>Al3 CH7</td>
          <td>Al3 CH8</td>
        </tr>
        <tr>
          <td>1</td>
          <td>High_High_Set_Value</td>
          <td>{ai3data.AI3CH1_High_High_Set_Value}</td>
          <td>{ai3data.AI3CH2_High_High_Set_Value}</td>
          <td>{ai3data.AI3CH3_High_High_Set_Value}</td>
          <td>{ai3data.AI3CH4_High_High_Set_Value}</td>
          <td>{ai3data.AI3CH5_High_High_Set_Value}</td>
          <td>{ai3data.AI3CH6_High_High_Set_Value}</td>
          <td>{ai3data.AI3CH7_High_High_Set_Value}</td>
          <td>{ai3data.AI3CH8_High_High_Set_Value}</td>
        </tr>
        <tr>
          <td>2</td>
          <td>High_Set_Value</td>
          <td>{ai3data.AI3CH1_High_Set_Value}</td>
          <td>{ai3data.AI3CH2_High_Set_Value}</td>
          <td>{ai3data.AI3CH3_High_Set_Value}</td>
          <td>{ai3data.AI3CH4_High_Set_Value}</td>
          <td>{ai3data.AI3CH5_High_Set_Value}</td>
          <td>{ai3data.AI3CH6_High_Set_Value}</td>
          <td>{ai3data.AI3CH7_High_Set_Value}</td>
          <td>{ai3data.AI3CH8_High_Set_Value}</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Low_Set_Value</td>
          <td>{ai3data.AI3CH1_Low_Set_Value}</td>
          <td>{ai3data.AI3CH2_Low_Set_Value}</td>
          <td>{ai3data.AI3CH3_Low_Set_Value}</td>
          <td>{ai3data.AI3CH4_Low_Set_Value}</td>
          <td>{ai3data.AI3CH5_Low_Set_Value}</td>
          <td>{ai3data.AI3CH6_Low_Set_Value}</td>
          <td>{ai3data.AI3CH7_Low_Set_Value}</td>
          <td>{ai3data.AI3CH8_Low_Set_Value}</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Low_Low_Set-Value</td>
          <td>{ai3data.AI3CH1_Low_Low_Set_Value}</td>
          <td>{ai3data.AI3CH2_Low_Low_Set_Value}</td>
          <td>{ai3data.AI3CH3_Low_Low_Set_Value}</td>
          <td>{ai3data.AI3CH4_Low_Low_Set_Value}</td>
          <td>{ai3data.AI3CH5_Low_Low_Set_Value}</td>
          <td>{ai3data.AI3CH6_Low_Low_Set_Value}</td>
          <td>{ai3data.AI3CH7_Low_Low_Set_Value}</td>
          <td>{ai3data.AI3CH8_Low_Low_Set_Value}</td>
        </tr>
        <tr>
          <td>5</td>
          <td > Timer_Set_Time</td>
          <td>{ai3data.AI3CH1_Timer_Set_Time}</td>
          <td>{ai3data.AI3CH2_Timer_Set_Time}</td>
          <td>{ai3data.AI3CH3_Timer_Set_Time}</td>
          <td>{ai3data.AI3CH4_Timer_Set_Time}</td>
          <td>{ai3data.AI3CH5_Timer_Set_Time}</td>
          <td>{ai3data.AI3CH6_Timer_Set_Time}</td>
          <td>{ai3data.AI3CH7_Timer_Set_Time}</td>
          <td>{ai3data.AI3CH8_Timer_Set_Time}</td>
        </tr>
      </tbody>
    </Table> 
    <Table responsive bordered hover size="sm"  style={{marginTop:"1rem", width:"90%" ,height:"450px",borderColor:'grey',marginBottom:'5rem'}} className='text-center  table-bordered'  >
       <tbody>
        <tr >
          <td rowSpan={3} >Sr No</td>
          <td rowSpan={3}>Parameter</td>
          <td className='text-danger'>Location</td>  
          <td className='text-danger'>Location</td>
          <td className='text-danger'>Location</td>
          <td className='text-danger'>Location</td>
          <td className='text-danger'>Location</td>
          <td className='text-danger'>Location</td>
          <td className='text-danger'>Location</td>
          <td className='text-danger'>Location</td>
        </tr>
         <tr>
          <td className='text-danger'>Sensor Name</td>
          <td className='text-danger'> Sensor Name</td>
          <td className='text-danger'>Sensor Name</td>
          <td className='text-danger'>Sensor Name</td>
          <td className='text-danger'>Sensor Name</td>
          <td className='text-danger'>Sensor Name</td>
          <td className='text-danger'>Sensor Name</td>
          <td  className='text-danger'>Sensor Name</td>
        </tr>
        <tr>
          <td>Al4 CH1</td>
          <td>Al4 CH2</td>
          <td>Al4 CH3</td>
          <td>Al4 CH4</td>
          <td>Al4 CH5</td>
          <td>Al4 CH6</td>
          <td>Al4 CH7</td>
          <td>Al4 CH8</td>
        </tr>
        {/* <tr >
          <td>1</td>
          <td>Scale _Min</td>
          <td>{ai4data.AI4CH1_Scale_Min}</td>
          <td>{ai4data.AI4CH2_Scale_Min}</td>
          <td>{ai4data.AI4CH3_Scale_Min}</td>
          <td>{ai4data.AI4CH4_Scale_Min}</td>
          <td>{ai4data.AI4CH5_Scale_Min}</td>
          <td>{ai4data.AI4CH6_Scale_Min}</td>
          <td>{ai4data.AI4CH7_Scale_Min}</td>
          <td>{ai4data.AI4CH8_Scale_Min}</td>
        </tr> */}
        {/* <tr>
          <td>2</td>
          <td>Scale_Max</td>
          <td>{ai4data.AI4CH1_Scale_Max}</td>
          <td>{ai4data.AI4CH2_Scale_Max}</td>
          <td>{ai4data.AI4CH3_Scale_Max}</td>
          <td>{ai4data.AI4CH4_Scale_Max}</td>
          <td>{ai4data.AI4CH5_Scale_Max}</td>
          <td>{ai4data.AI4CH6_Scale_Max}</td>
          <td>{ai4data.AI4CH7_Scale_Max}</td>
          <td>{ai4data.AI4CH8_Scale_Max}</td>
        </tr> */}
        <tr>
          <td>1</td>
          <td>High_High_Set_Value</td>
          <td>{ai4data.AI4CH1_High_High_Set_Value}</td>
          <td>{ai4data.AI4CH2_High_High_Set_Value}</td>
          <td>{ai4data.AI4CH3_High_High_Set_Value}</td>
          <td>{ai4data.AI4CH4_High_High_Set_Value}</td>
          <td>{ai4data.AI4CH5_High_High_Set_Value}</td>
          <td>{ai4data.AI4CH6_High_High_Set_Value}</td>
          <td>{ai4data.AI4CH7_High_High_Set_Value}</td>
          <td>{ai4data.AI4CH8_High_High_Set_Value}</td>
        </tr>
        <tr>
          <td>2</td>
          <td>High_Set_Value</td>
          <td>{ai4data.AI4CH1_High_Set_Value}</td>
          <td>{ai4data.AI4CH2_High_Set_Value}</td>
          <td>{ai4data.AI4CH3_High_Set_Value}</td>
          <td>{ai4data.AI4CH4_High_Set_Value}</td>
          <td>{ai4data.AI4CH5_High_Set_Value}</td>
          <td>{ai4data.AI4CH6_High_Set_Value}</td>
          <td>{ai4data.AI4CH7_High_Set_Value}</td>
          <td>{ai4data.AI4CH8_High_Set_Value}</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Low_Set_Value</td>
          <td>{ai4data.AI4CH1_Low_Set_Value}</td>
          <td>{ai4data.AI4CH2_Low_Set_Value}</td>
          <td>{ai4data.AI4CH3_Low_Set_Value}</td>
          <td>{ai4data.AI4CH4_Low_Set_Value}</td>
          <td>{ai4data.AI4CH5_Low_Set_Value}</td>
          <td>{ai4data.AI4CH6_Low_Set_Value}</td>
          <td>{ai4data.AI4CH7_Low_Set_Value}</td>
          <td>{ai4data.AI4CH8_Low_Set_Value}</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Low_Low_Set-Value</td>
          <td>{ai4data.AI4CH1_Low_Low_Set_Value}</td>
          <td>{ai4data.AI4CH2_Low_Low_Set_Value}</td>
          <td>{ai4data.AI4CH3_Low_Low_Set_Value}</td>
          <td>{ai4data.AI4CH4_Low_Low_Set_Value}</td>
          <td>{ai4data.AI4CH5_Low_Low_Set_Value}</td>
          <td>{ai4data.AI4CH6_Low_Low_Set_Value}</td>
          <td>{ai4data.AI4CH7_Low_Low_Set_Value}</td>
          <td>{ai4data.AI4CH8_Low_Low_Set_Value}</td>
        </tr>
        <tr>
          <td>5</td>
          <td > Timer_Set_Time</td>
          <td>{ai4data.AI4CH1_Timer_Set_Time}</td>
          <td>{ai4data.AI4CH2_Timer_Set_Time}</td>
          <td>{ai4data.AI4CH3_Timer_Set_Time}</td>
          <td>{ai4data.AI4CH4_Timer_Set_Time}</td>
          <td>{ai4data.AI4CH5_Timer_Set_Time}</td>
          <td>{ai4data.AI4CH6_Timer_Set_Time}</td>
          <td>{ai4data.AI4CH7_Timer_Set_Time}</td>
          <td>{ai4data.AI4CH8_Timer_Set_Time}</td>
        </tr>
      </tbody>
    </Table> 
    </div>
    </center> 
   
    </div>
  );
}

export default StripedColumnsExample;