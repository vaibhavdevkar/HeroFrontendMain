import React,{ useState, useEffect } from 'react'
import './Dashboard.css'
import { BsGraphUpArrow } from "react-icons/bs";
import { FaInfoCircle } from "react-icons/fa";
import Navbar from './Navbar';


const Dashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [headline, setHeadline] = useState("PT LINE DASHBOARD");
  const [ptlineData, setPtlineData] = useState('');

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

    fetchData();
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

  return (
   
    <div className='first'style={{overflow:"auto", maxHeight: "100vh" }}>
       <Navbar headline={headline}/>
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
{/* <hr style={{border:'0.8px solid grey',width:'95%',margin:'auto'}} /> */}

        <div className='container-fluid' >
        <div class="row mt-4 mx-auto flex-column flex-sm-row" >
      <div className="col" >
        
        <table className="table-lg table-custom ">
          <thead>
            <tr>
            <th><span style={{display:'flex',justifyContent:'space-between'}}>
              <BsGraphUpArrow />
              HOT WATER
              <FaInfoCircle /> </span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
            <td colspan="2">
            <div className="row">
              <div className="col-8">Pump Status</div>
              <div className="col-4">{ptlineData.HWPUMPSTATLBL}</div>
            </div>
          </td>
          
            </tr>
            <tr>
            <td colspan="2">
            <div className="row">
              <div className="col-8">Pump Motor Current</div>
              <div className="col-4">{ptlineData.HWPUMPMOTLBL}</div>
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
              <div className="col-4">{ptlineData.HWCIRPRSRLBL}</div>
            </div>
          </td>
            </tr>
            <tr>
            <td colspan="2">
            <div className="row">
              <div className="col-8">Temperature</div>
              <div className="col-4">{ptlineData.HWTEMPLBL}</div>
            </div>
          </td>
            </tr>
            <tr>
            <td colspan="2">
            <div className="row">
              <div className="col-8">Soft Water Flow</div>
              <div className="col-4">{ptlineData.HWSOFTWATERLBL}</div>
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
            <th><span style={{display:'flex',justifyContent:'space-between'}}>
              <BsGraphUpArrow />
            Pre-Degrease
            <FaInfoCircle />
            </span>
        

            
              </th>
            </tr>
          </thead>
          <tbody>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Pump Status</div>
                      <div className="col-4">{ptlineData.PDPUMPSTATLBL}</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Pump Motor Current</div>
                      <div className="col-4">{ptlineData.PDPUMPMOTLBL}</div>
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
                      <div className="col-4">{ptlineData.PDCIRPRSRLBL}</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Temperature</div>
                      <div className="col-4">{ptlineData.PDTEMPLBL}</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Soft Water Flow</div>
                      <div className="col-4">{ptlineData.PDSOFTWATERLBL}</div>
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
            <th><span style={{display:'flex',justifyContent:'space-between'}}>
              <BsGraphUpArrow />
               Degrease 
              <FaInfoCircle />
              </span>
              </th>
            </tr>
          </thead>
          <tbody>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Pump Status</div>
                      <div className="col-4">{ptlineData.DPUMPSTATLBL}</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Pump Motor Current</div>
                      <div className="col-4">{ptlineData.DPUMPMOTLBL}</div>
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
                      <div className="col-4">{ptlineData.DCIRPRSRLBL}</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Temperature</div>
                      <div className="col-4">{ptlineData.DTEMPLBL}</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Soft Water Flow</div>
                      <div className="col-4">{ptlineData.DSOFTWATERLBL}</div>
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
            <th><span style={{display:'flex',justifyContent:'space-between'}}>
              <BsGraphUpArrow />
            Water Rinse 1
            <FaInfoCircle/>
            </span>
              </th>
            </tr>
          </thead>
          <tbody>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Pump Status</div>
                      <div className="col-4">{ptlineData.WR1PUMPSTATLBL}</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Pump Motor Current</div>
                      <div className="col-4">{ptlineData.WR1PUMPMOTLBL}</div>
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
                      <div className="col-4">{ptlineData.WR1CIRPRSRLBL}</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Temperature</div>
                      <div className="col-4">{ptlineData.WR1TEMPLBL}</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Soft Water Flow</div>
                      <div className="col-4">{ptlineData.WR1SOFTWATERLBL}</div>
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
            <th><span style={{display:'flex',justifyContent:'space-between'}}>
              <BsGraphUpArrow />
             Water Rinse 2
            <FaInfoCircle/>
            </span>
              </th>
            </tr>
          </thead>
          <tbody>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Pump Status</div>
                      <div className="col-4">{ptlineData.WR2PUMPSTATLBL}</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Pump Motor Current</div>
                      <div className="col-4">{ptlineData.WR2PUMPMOTLBL}</div>
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
                      <div className="col-4">{ptlineData.WR2CIRPRSRLBL}</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Temperature</div>
                      <div className="col-4">{ptlineData.WR2TEMPLBL}</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Soft Water Flow</div>
                      <div className="col-4">{ptlineData.WR2SOFTWATERLBL}</div>
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
                <span style={{display:'flex',justifyContent:'space-between'}}>
              <BsGraphUpArrow />
              DM WATER 1
              <FaInfoCircle/>
              </span>
              </th>
            </tr>
          </thead>
          <tbody>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Pump Status</div>
                      <div className="col-4">{ptlineData.DMPUMPSTATLBL}</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Pump Motor Current</div>
                      <div className="col-4">{ptlineData.DMPUMPMOTLBL}</div>
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
                      <div className="col-4">{ptlineData.DMCIRPRSRLBL}</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">PH</div>
                      <div className="col-4"></div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Conductivity</div>
                      <div className="col-4" id="conductivity">
                        
                      </div>
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
            <span style={{display:'flex',justifyContent:'space-between'}}>
              <BsGraphUpArrow />
              OXSILAN
              <FaInfoCircle/>
              </span>
              </th>
            </tr>
          </thead>
          <tbody>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Pump Status</div>
                      <div className="col-4">{ptlineData.OXPUMPSTATLBL}</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Pump Motor Current</div>
                      <div className="col-4">{ptlineData.OXPUMPMOTLBL}</div>
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
                      <div className="col-4">{ptlineData.OXCIRPRSRLBL}</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">PH</div>
                      <div className="col-4"></div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Conductivity</div>
                      <div className="col-4" id="conductivity"></div>
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
            <span style={{display:'flex',justifyContent:'space-between'}}>
              <BsGraphUpArrow />
              Water Rinse 3
              <FaInfoCircle/>
              </span>
            </th>
            </tr>
          </thead>
          <tbody>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Pump Status</div>
                      <div className="col-4">{ptlineData.WR3PUMPSTATLBL}</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Pump Motor Current</div>
                      <div className="col-4">{ptlineData.WR3PUMPMOTLBL}</div>
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
                      <div className="col-4">{ptlineData.WR3CIRPRSRLBL}</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">PH</div>
                      <div className="col-4"></div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Conductivity</div>
                      <div className="col-4" id="conductivity">
                        {" "}
                      </div>
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
            <span style={{display:'flex',justifyContent:'space-between'}}>
              <BsGraphUpArrow />
              Water Rinse 4
              <FaInfoCircle/>
              </span>
              </th>
            </tr>
          </thead>
          <tbody>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Pump Status</div>
                      <div className="col-4">{ptlineData.WR4PUMPSTATLBL}</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Pump Motor Current</div>
                      <div className="col-4">{ptlineData.WR4PUMPMOTLBL}</div>
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
                      <div className="col-4">{ptlineData.WR4CIRPRSRLBL}</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">PH</div>
                      <div className="col-4"></div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Conductivity</div>
                      <div className="col-4" id="conductivity"></div>
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
            <span style={{display:'flex',justifyContent:'space-between'}}>
              <BsGraphUpArrow />
              Fresh DM Water
              <FaInfoCircle/>
              </span>
            </th>
            </tr>
          </thead>
          <tbody>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Pump Status</div>
                      <div className="col-4">{ptlineData.FDWPUMPSTATLBL}</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Pump Motor Current</div>
                      <div className="col-4">{ptlineData.FDWPUMPMOTLBL}</div>
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
                      <div className="col-4">{ptlineData.FDWCIRPRSRLBL}</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">PH</div>
                      <div className="col-4"></div>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-8">Conductivity</div>
                      <div className="col-4" id="conductivity"></div>
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