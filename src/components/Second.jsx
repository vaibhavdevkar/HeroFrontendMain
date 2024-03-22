import Table from 'react-bootstrap/Table';

function StripedColumnsExample() {
  return (
    <> 
       <center> <div > 
         <h2 style={{marginTop:"2rem"}}> ANALOG PARAMETER SETTING SCREEN </h2> 
       </div> 
       <hr style={{width:"90%", margin:"1rem" , border:" 1px solid orange"}}/> 
     <Table responsive bordered hover size="sm" style={{marginTop:"2rem", width:"90%" ,height:"380px" }} className='text-center border-dark'  >
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
          <td>Al1 CH1</td>
          <td>Al1 CH2</td>
          <td>Al1 CH3</td>
          <td>Al1 CH4</td>
          <td>Al1 CH5</td>
          <td>Al1 CH6</td>
          <td>Al1 CH7</td>
          <td>Al1 CH8</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Scale _Min</td>
          <td>D300</td>
          <td>D320</td>
          <td>D340</td>
          <td>D360</td>
          <td>D380</td>
          <td>D400</td>
          <td>D420</td>
          <td>D440</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Scale_Max</td>
          <td>D301</td>
          <td>D321</td>
          <td>D341</td>
          <td>D361</td>
          <td>D381</td>
          <td>D401</td>
          <td>D421</td>
          <td>D441</td>
        </tr>
        <tr>
          <td>3</td>
          <td>High_High_Set_Value</td>
          <td>D304</td>
          <td>D324</td>
          <td>D344</td>
          <td>D364</td>
          <td>D384</td>
          <td>D404</td>
          <td>D424</td>
          <td>D444</td>
        </tr>
        <tr>
          <td>4</td>
          <td>High_Set_Value</td>
          <td>D305</td>
          <td>D325</td>
          <td>D345</td>
          <td>D365</td>
          <td>D385</td>
          <td>D405</td>
          <td>D425</td>
          <td>D445</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Low_Set_Value</td>
          <td>D306</td>
          <td>D326</td>
          <td>D346</td>
          <td>D366</td>
          <td>D386</td>
          <td>D406</td>
          <td>D426</td>
          <td>D446</td>
        </tr>
        <tr>
          <td>6</td>
          <td>Low_Low_Set-Value</td>
          <td>D307</td>
          <td>D327</td>
          <td>D347</td>
          <td>D367</td>
          <td>D387</td>
          <td>D407</td>
          <td>D427</td>
          <td>D447</td>
        </tr>
        <tr>
          <td>7</td>
          <td>Timer_Set_Time</td>
          <td>D308</td>
          <td>D328</td>
          <td>D348</td>
          <td>D368</td>
          <td>D388</td>
          <td>D408</td>
          <td>D428</td>
          <td>D448</td>
        </tr>
      </tbody>
    </Table> 
       <h3> LINE WISE CHANNEL 2,3 AND 4</h3>
         {/* <div  style={{backgroundColor:" #FF8C00" ,marginTop:"2rem"}}> 
          <p>Developed by thetavega Tech Private Limited</p>
         </div> */}
       </center>
 </>
  );
}

export default StripedColumnsExample;