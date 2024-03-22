import React, { useState, useEffect } from "react";
import './First.css'
import { BsGraphUpArrow } from "react-icons/bs";
import { FaInfoCircle } from "react-icons/fa";


const First = () => {
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

  return (
    <div className='first'>
      
       
        <div className='heading'>
                <h4>PT LINE DASHBOARD</h4>
        </div>
        <div className='text'>
        
       
          <label >
            {" "}
            Date: <span id='span' >23-09-2023</span>
          </label>
          <label>
            Shift: <span id='span'> 2</span>
          </label>
          <label>
            Line Setting: <span id='span' >726</span>
          </label>
          <label>
            Time: <span id='span' >15:33:05</span>
          </label>
        
        </div>
        <div className='container-fluid'>
        <div class="row mt-4 mx-auto flex-column flex-sm-row">
      <div className="col">
        
        <table className="table-lg table-custom ">
          <thead>
            <tr>
            <th><span><BsGraphUpArrow style={{marginRight:'4rem'}}/></span>
              HOT WATER
              <span> <FaInfoCircle style={{marginLeft:'2rem'}}/></span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
            <td colspan="2">
            <div className="row">
              <div className="col-7">Pump Status</div>
              <div className="col-3">{ptlineData.HWPUMPSTATLBL}</div>
            </div>
          </td>
          
            </tr>
            <tr>
            <td colspan="2">
            <div className="row">
              <div className="col-7">Pump Motor Current</div>
              <div className="col-3">{ptlineData.HWPUMPMOTLBL}</div>
            </div>
          </td>
            </tr>
            <tr>
            <td colspan="2">
            <div className="row">
              <div className="col-7">Tank Level</div>
              <div className="col-3">{ptlineData.HWTANKLVLLBL}</div>
            </div>
          </td>
            </tr>
            <tr>
            <td colspan="2">
            <div className="row">
              <div className="col-7">Circulation Pressure</div>
              <div className="col-3">{ptlineData.HWCIRPRSRLBL}</div>
            </div>
          </td>
            </tr>
            <tr>
            <td colspan="2">
            <div className="row">
              <div className="col-7">Temperature</div>
              <div className="col-3">{ptlineData.HWTEMPLBL}</div>
            </div>
          </td>
            </tr>
            <tr>
            <td colspan="2">
            <div className="row">
              <div className="col-7">Soft Water Flow</div>
              <div className="col-3">{ptlineData.HWSOFTWATERLBL}</div>
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
            <th><span><BsGraphUpArrow style={{marginRight:'4rem'}}/></span>
            Pre-Degrease

            <span> <FaInfoCircle style={{marginLeft:'2rem'}}/></span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
            <td colspan="2">
            <div className="row">
              <div className="col-7">Pump Status</div>
              <div className="col-3">ON</div>
            </div>
          </td>
          
            </tr>
            <tr>
            <td colspan="2">
            <div className="row">
              <div className="col-7">Pump Motor Current</div>
              <div className="col-3">{ptlineData.PDPUMPMOTLBL}</div>
            </div>
          </td>
            </tr>
            <tr>
            <td colspan="2">
            <div className="row">
              <div className="col-7">Tank Level</div>
              <div className="col-3">{ptlineData.PDTANKLVLLBL}</div>
            </div>
          </td>
            </tr>
            <tr>
            <td colspan="2">
            <div className="row">
              <div className="col-7">Circulation Pressure</div>
              <div className="col-3">{ptlineData.PDCIRPRSRLBL}</div>
            </div>
          </td>
            </tr>
            <tr>
            <td colspan="2">
            <div className="row">
              <div className="col-7">Temperature</div>
              <div className="col-3">{ptlineData.PDTEMPLBL}</div>
            </div>
          </td>
            </tr>
            <tr>
            <td colspan="2">
            <div className="row">
              <div className="col-7">Soft Water Flow</div>
              <div className="col-3">{ptlineData.PDSOFTWATERLBL}</div>
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
                  <th>
                    <span>
                      <BsGraphUpArrow style={{ marginRight: "4rem" }} />
                    </span>
                    Degrease
                    <span>
                      {" "}
                      <FaInfoCircle style={{ marginLeft: "2rem" }} />
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-7">Pump Status</div>
                      <div className="col-3">{ptlineData.DPUMPSTATLBL}</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-7">Pump Motor Current</div>
                      <div className="col-3">{ptlineData.DPUMPMOTLBL}</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-7">Tank Level</div>
                      <div className="col-3">{ptlineData.DTANKLVLLBL}</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-7">Circulation Pressure</div>
                      <div className="col-3">{ptlineData.DCIRPRSRLBL}</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-7">Temperature</div>
                      <div className="col-3">{ptlineData.DTEMPLBL}</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2">
                    <div className="row">
                      <div className="col-7">Soft Water Flow</div>
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
            <th><span><BsGraphUpArrow style={{marginRight:'4rem'}}/></span>
            Water Rinse 1

            <span> <FaInfoCircle style={{marginLeft:'2rem'}}/></span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
            <td colspan="2">
            <div className="row">
              <div className="col-7">Pump Status</div>
              <div className="col-3">ON</div>
            </div>
          </td>
          
            </tr>
            <tr>
            <td colspan="2">
            <div className="row">
              <div className="col-7">Pump Motor Current</div>
              <div className="col-3">200A</div>
            </div>
          </td>
            </tr>
            <tr>
            <td colspan="2">
            <div className="row">
              <div className="col-7">Tank Level</div>
              <div className="col-3">High</div>
            </div>
          </td>
            </tr>
            <tr>
            <td colspan="2">
            <div className="row">
              <div className="col-7">Circulation Pressure</div>
              <div className="col-3">2.5 Bar</div>
            </div>
          </td>
            </tr>
            <tr>
            <td colspan="2">
            <div className="row">
              <div className="col-7">Temperature</div>
              <div className="col-3">25 Deg</div>
            </div>
          </td>
            </tr>
            <tr>
            <td colspan="2">
            <div className="row">
              <div className="col-7">Soft Water Flow</div>
              <div className="col-3">25L/Min</div>
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
            <th><span><BsGraphUpArrow style={{marginRight:'4rem'}}/></span>
             Water Rinse 2

             <span> <FaInfoCircle style={{marginLeft:'2rem'}}/></span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
            <td colspan="2">
            <div className="row">
              <div className="col-7">Pump Status</div>
              <div className="col-3">ON</div>
            </div>
          </td>
          
            </tr>
            <tr>
            <td colspan="2">
            <div className="row">
              <div className="col-7">Pump Motor Current</div>
              <div className="col-3">200A</div>
            </div>
          </td>
            </tr>
            <tr>
            <td colspan="2">
            <div className="row">
              <div className="col-7">Tank Level</div>
              <div className="col-3">High</div>
            </div>
          </td>
            </tr>
            <tr>
            <td colspan="2">
            <div className="row">
              <div className="col-7">Circulation Pressure</div>
              <div className="col-3">2.5 Bar</div>
            </div>
          </td>
            </tr>
            <tr>
            <td colspan="2">
            <div className="row">
              <div className="col-7">Temperature</div>
              <div className="col-3">25 Deg</div>
            </div>
          </td>
            </tr>
            <tr>
            <td colspan="2">
            <div className="row">
              <div className="col-7">Soft Water Flow</div>
              <div className="col-3">25L/Min</div>
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
              <th><span><BsGraphUpArrow style={{marginRight:'4rem'}}/></span>
              DM WATER 1

             <span> <FaInfoCircle style={{marginLeft:'2rem'}}/></span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
            <td colspan="2">
            <div className="row">
              <div className="col-7">Pump Status</div>
              <div className="col-3">ON</div>
            </div>
          </td>
          
            </tr>
            <tr>
            <td colspan="2">
            <div className="row">
              <div className="col-7">Pump Motor Current</div>
              <div className="col-3">200A</div>
            </div>
          </td>
            </tr>
            <tr>
            <td colspan="2">
            <div className="row">
              <div className="col-7">Tank Level</div>
              <div className="col-3">High</div>
            </div>
          </td>
            </tr>
            <tr>
            <td colspan="2">
            <div className="row">
              <div className="col-7">Circulation Pressure</div>
              <div className="col-3">2.5 Bar</div>
            </div>
          </td>
            </tr>
            <tr>
            <td colspan="2">
            <div className="row">
              <div className="col-7">PH</div>
              <div className="col-3">25 Deg</div>
            </div>
          </td>
            </tr>
          
            <tr>
            <td colspan="2">
            <div className="row">
              <div className="col-7">Conductivity</div>
              <div className="col-3" id="conductivity">250 µS</div>
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
            <th><span><BsGraphUpArrow style={{marginRight:'4rem'}}/></span>
            OXSILAN


            <span> <FaInfoCircle style={{marginLeft:'2rem'}}/></span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
            <td colspan="2">
            <div className="row">
              <div className="col-7">Pump Status</div>
              <div className="col-3">ON</div>
            </div>
          </td>
          
            </tr>
            <tr>
            <td colspan="2">
            <div className="row">
              <div className="col-7">Pump Motor Current</div>
              <div className="col-3">200A</div>
            </div>
          </td>
            </tr>
            <tr>
            <td colspan="2">
            <div className="row">
              <div className="col-7">Tank Level</div>
              <div className="col-3">High</div>
            </div>
          </td>
            </tr>
            <tr>
            <td colspan="2">
            <div className="row">
              <div className="col-7">Circulation Pressure</div>
              <div className="col-3">2.5 Bar</div>
            </div>
          </td>
            </tr>
            <tr>
            <td colspan="2">
            <div className="row">
              <div className="col-7">PH</div>
              <div className="col-3">25 Deg</div>
            </div>
          </td>
            </tr>
          
            <tr>
            <td colspan="2">
            <div className="row">
              <div className="col-7">Conductivity</div>
              <div className="col-3"id="conductivity"></div>
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
            <th><span><BsGraphUpArrow style={{marginRight:'4rem'}}/></span>
            Water Rinse 3


            <span> <FaInfoCircle style={{marginLeft:'2rem'}}/></span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
            <td colspan="2">
            <div className="row">
              <div className="col-7">Pump Status</div>
              <div className="col-3">ON</div>
            </div>
          </td>
          
            </tr>
            <tr>
            <td colspan="2">
            <div className="row">
              <div className="col-7">Pump Motor Current</div>
              <div className="col-3">200A</div>
            </div>
          </td>
            </tr>
            <tr>
            <td colspan="2">
            <div className="row">
              <div className="col-7">Tank Level</div>
              <div className="col-3">High</div>
            </div>
          </td>
            </tr>
            <tr>
            <td colspan="2">
            <div className="row">
              <div className="col-7">Circulation Pressure</div>
              <div className="col-3">2.5 Bar</div>
            </div>
          </td>
            </tr>
            <tr>
            <td colspan="2">
            <div className="row">
              <div className="col-7">PH</div>
              <div className="col-3">25 Deg</div>
            </div>
          </td>
            </tr>
          
            <tr>
            <td colspan="2">
            <div className="row">
              <div className="col-7">Conductivity</div>
              <div className="col-3" id="conductivity"> </div>
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
            <th><span><BsGraphUpArrow style={{marginRight:'4rem'}}/></span>
            Water Rinse 4


            <span> <FaInfoCircle style={{marginLeft:'2rem'}}/></span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
            <td colspan="2">
            <div className="row">
              <div className="col-7">Pump Status</div>
              <div className="col-3">ON</div>
            </div>
          </td>
          
            </tr>
            <tr>
            <td colspan="2">
            <div className="row">
              <div className="col-7">Pump Motor Current</div>
              <div className="col-3">200A</div>
            </div>
          </td>
            </tr>
            <tr>
            <td colspan="2">
            <div className="row">
              <div className="col-7">Tank Level</div>
              <div className="col-3">High</div>
            </div>
          </td>
            </tr>
            <tr>
            <td colspan="2">
            <div className="row">
              <div className="col-7">Circulation Pressure</div>
              <div className="col-3">2.5 Bar</div>
            </div>
          </td>
            </tr>
            <tr>
            <td colspan="2">
            <div className="row">
              <div className="col-7">PH</div>
              <div className="col-3">25 Deg</div>
            </div>
          </td>
            </tr>
          
            <tr>
            <td colspan="2">
            <div className="row">
              <div className="col-7">Conductivity</div>
              <div className="col-3" id="conductivity"></div>
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
            <th><span><BsGraphUpArrow style={{marginRight:'2rem'}}/></span>
            Fresh DM Water


            <span> <FaInfoCircle style={{marginLeft:'1rem'}}/></span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
            <td colspan="2">
            <div className="row">
              <div className="col-7">Pump Status</div>
              <div className="col-3">ON</div>
            </div>
          </td>
          
            </tr>
            <tr>
            <td colspan="2">
            <div className="row">
              <div className="col-7">Pump Motor Current</div>
              <div className="col-3">200A</div>
            </div>
          </td>
            </tr>
            <tr>
            <td colspan="2">
            <div className="row">
              <div className="col-7">Tank Level</div>
              <div className="col-3">High</div>
            </div>
          </td>
            </tr>
            <tr>
            <td colspan="2">
            <div className="row">
              <div className="col-7">Circulation Pressure</div>
              <div className="col-3">2.5 Bar</div>
            </div>
          </td>
            </tr>
            <tr>
            <td colspan="2">
            <div className="row">
              <div className="col-7">PH</div>
              <div className="col-3">25 Deg</div>
            </div>
          </td>
            </tr>
          
            <tr>
            <td colspan="2">
            <div className="row">
              <div className="col-7">Conductivity</div>
              <div className="col-3" id="conductivity"></div>
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

export default First