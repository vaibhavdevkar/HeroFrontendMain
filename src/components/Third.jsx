import Table from 'react-bootstrap/Table'


function BasicExample() {
  return (
    <>
    <center><div>
    <h2 style={{margin:"2rem"}}>VFD STATUS DISPLAY</h2>
    </div>
      <hr style ={{width: "90", margin:"1rem", border:" 1px solid orange"}}/>
    

      <Table responsive bordered hover size="sm" style={{marginTop:"2rem", width:"90%" ,height:"380px" }} className='text-center border-dark'  >
      <thead>
        <tr style={{backgroundColor:'orange'}}>
          <th>SrNo</th>
          <th>Parameter</th>
          <th>Motor 1</th>
          <th>Motor 2</th>
          <th>Motor 3</th>
          <th>Motor 4</th>
          <th>Motor 5</th>
          <th>Motor 6</th>
          <th>Motor 7</th>
          <th>Motor 8</th>
          <th>Motor 9</th>
          <th>Motor 10</th>
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
    {/* <footer style = {{background:"orange", bottom:"0"}}>
    
    <p class="text-center text-body-secondary">Developed by Thetavega Tech Private Limited</p>
  </footer> */}
  </center>
    </>
  );
}

export default BasicExample;