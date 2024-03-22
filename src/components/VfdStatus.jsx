import Table from 'react-bootstrap/Table'
import React,{ useState, useEffect } from 'react'
import Navbar from './Navbar';

function BasicExample() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [headline, setHeadline] = useState("VFD STATUS DISPLAY");
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
  return (
    <div style={{overflow:"auto", maxHeight: "100vh" }}>
    <Navbar headline={headline}/>
    <center>
     <div >
     <div className='text  '>
        <div className="row row-cols-1 mx-sm-3 
         mx-lg-0 row-cols-sm-2 row-cols-lg-4"id="dashboard"
         style={{margin:''}}
         >
   
    <div className="col mb-1 ">
      <div className="container-fluid">
        <label>Date:</label>
        <span id='span'>{getCurrentDate()}</span>
      </div>
    </div>
  
  
    <div className="col mb-1 ">
      <div className="container-fluid">
        <label>Shift:</label>
        <span id='span'>2899</span>
      </div>
    </div>
  
  
    <div className="col mb-1 ">
      <div className="container-fluid">
        <label>Line Setting:</label>
        <span id='span'className='span3'>726</span>
      </div>
    </div>
  
  
    <div className="col mb-1 ">
      <div className="container-fluid">
        <label>Time:</label>
        <span id='span'>{formatTime(currentTime)}</span>
      </div>
  
    </div>
    </div>
</div>
      <div>

      
      <Table bordered responsive hover size="sm" style={{marginTop:"1rem", width:"90%" ,height:"420px",marginBottom:'2rem' }} className='text-center border-dark '>
      <thead>
        <tr >
          <th style={{backgroundColor:'#EE5A24',border:'2px solid white',color:'white',padding:'0.7rem'}}>SrNo</th>
          <th  style={{backgroundColor:'#EE5A24',border:'2px solid white',color:'white',padding:'0.7rem'}}>Parameter</th>
          <th style={{backgroundColor:'#EE5A24',border:'2px solid white',color:'white',padding:'0.7rem'}}>Motor 1</th>
          <th style={{backgroundColor:'#EE5A24',border:'2px solid white',color:'white',padding:'0.7rem'}}>Motor 2</th>
          <th style={{backgroundColor:'#EE5A24',border:'2px solid white',color:'white',padding:'0.7rem'}}>Motor 3</th>
          <th style={{backgroundColor:'#EE5A24',border:'2px solid white',color:'white',padding:'0.7rem'}}>Motor 4</th>
          <th style={{backgroundColor:'#EE5A24',border:'2px solid white',color:'white',padding:'0.7rem'}}>Motor 5</th>
          <th style={{backgroundColor:'#EE5A24',border:'2px solid white',color:'white',padding:'0.7rem'}}>Motor 6</th>
          <th style={{backgroundColor:'#EE5A24',border:'2px solid white',color:'white',padding:'0.7rem'}}>Motor 7</th>
          <th style={{backgroundColor:'#EE5A24',border:'2px solid white',color:'white',padding:'0.7rem'}}>Motor 8</th>
          <th style={{backgroundColor:'#EE5A24',border:'2px solid white',color:'white',padding:'0.7rem'}}>Motor 9</th>
          <th style={{backgroundColor:'#EE5A24',border:'2px solid white',color:'white',padding:'0.7rem'}}>Motor 10</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Output frequency/speed</td>
          <td>Hz</td>
          <td>Hz</td>
          <td>Hz</td>
          <td>Hz</td>
          <td>Hz</td>
          <td>Hz</td>
          <td>Hz</td>
          <td>Hz</td>
          <td>Hz</td>
          <td>Hz</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Output current</td>
          <td>A</td>
          <td>A</td>
          <td>A</td>
          <td>A</td>
          <td>A</td>
          <td>A</td>
          <td>A</td>
          <td>A</td>
          <td>A</td>
          <td>A</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Output voltage</td>
          <td>V</td>
          <td>V</td>
          <td>V</td>
          <td>V</td>
          <td>V</td>
          <td>V</td>
          <td>V</td>
          <td>V</td>
          <td>V</td>
          <td>V</td>
          </tr>
        <tr>
         <td>4</td>
          <td>Set Frequency</td>
          <td>Hz</td>
          <td>Hz</td>
          <td>Hz</td>
          <td>Hz</td>
          <td>Hz</td>
          <td>Hz</td>
          <td>Hz</td>
          <td>Hz</td>
          <td>Hz</td>
          <td>Hz</td>
</tr>
<tr>
         <td>5</td>
          <td>Running speed</td>
          <td>RPM</td>
          <td>RPM</td>
          <td>RPM</td>
          <td>RPM</td>
          <td>RPM</td>
          <td>RPM</td>
          <td>RPM</td>
          <td>RPM</td>
          <td>RPM</td>
          <td>RPM</td>
</tr>
<tr>
         <td>6</td>
          <td>Motor torque</td>
          <td>%</td>
          <td>%</td>
          <td>%</td>
          <td>%</td>
          <td>%</td>
          <td>%</td>
          <td>%</td>
          <td>%</td>
          <td>%</td>
          <td>%</td>
</tr>
<tr>
         <td>7</td>
          <td>Input power</td>
          <td>kW</td>
          <td>kW</td>
          <td>kW</td>
          <td>kW</td>
          <td>kW</td>
          <td>kW</td>
          <td>kW</td>
          <td>kW</td>
          <td>kW</td>
          <td>kW</td>
</tr>
<tr>
         <td>8</td>
          <td>Output power</td>
          <td>kW</td>
          <td>kW</td>
          <td>kW</td>
          <td>kW</td>
          <td>kW</td>
          <td>kW</td>
          <td>kW</td>
          <td>kW</td>
          <td>kW</td>
          <td>kW</td>
</tr>  
<tr>
         <td>9</td>
          <td>Motor load factor</td>
          <td>%</td>
          <td>%</td>
          <td>%</td>
          <td>%</td>
          <td>%</td>
          <td>%</td>
          <td>%</td>
          <td>%</td>
          <td>%</td>
          <td>%</td>
</tr>
<tr>
         <td>10</td>
          <td>Motor thermal load factor</td>
          <td>%</td>
          <td>%</td>
          <td>%</td>
          <td>%</td>
          <td>%</td>
          <td>%</td>
          <td>%</td>
          <td>%</td>
          <td>%</td>
          <td>%</td>
</tr>
<tr>
         <td>11</td>
          <td>Inverter thermal load factor</td>
          <td>%</td>
          <td>%</td>
          <td>%</td>
          <td>%</td>
          <td>%</td>
          <td>%</td>
          <td>%</td>
          <td>%</td>
          <td>%</td>
          <td>%</td>
</tr>


        
      </tbody>
    </Table>
    </div>
    {/* <footer style = {{background:"orange", bottom:"0"}}>
    
    <p class="text-center text-body-secondary">Developed by Thetavega Tech Private Limited</p>
  </footer> */}
  </div>
  </center>
  
    </div>
  );
}

export default BasicExample;