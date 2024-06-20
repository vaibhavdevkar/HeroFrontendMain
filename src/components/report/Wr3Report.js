import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import Table from 'react-bootstrap/Table';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

const Wr3Report = () => {
  const [headline, setHeadline] = useState("Degrease Report");
  const [data, setData] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('http://localhost:5002/api/wr3report');
      const jsonData = await response.json();
      setData(jsonData);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setIsLoading(false);
    }
  };

  const filterData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`http://localhost:5002/api/wr3report?startDate=${startDate}&endDate=${endDate}`);
      const jsonData = await response.json();
      setData(jsonData);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching filtered data:', error);
      setIsLoading(false);
    }
  };

  const formatDateTime = (dateTimeString) => {
    const options = {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    };
    return new Date(dateTimeString).toLocaleString(undefined, options);
  };

  const exportToExcel = () => {
    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.xlsx';
    const formattedData = data.map(row => ({
      DateTime: formatDateTime(row.Date_Time),
      WR3PUMPSTATLBL: row.WR3PUMPSTATLBL,
      WR3PUMPMOTLBL: row.WR3PUMPMOTLBL,
      WR3TANKLVLLBL: row.WR3TANKLVLLBL,
      WR3CIRPRSRLBL: row.WR3CIRPRSRLBL,
      WR3PHLBL: row.WR3PHLBL,
      WR3Conductivity: row.WR3Conductivity
    }));
    const ws = XLSX.utils.json_to_sheet(formattedData);
    const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const dataBlob = new Blob([excelBuffer], { type: fileType });
    saveAs(dataBlob, 'hotwater_data' + fileExtension);
  };

  return (
    <div>
      <Navbar headline={headline} />
      <div className="container-fluid mt-4">
        <div className="row mb-3">

          <div className="col-md-1 mt-3">
            <label htmlFor="startDate" className="form-label">Start Date</label>
          </div>
          <div className="col-md-3 mb-3 mt-2">
            <input type="date" className="form-control" id="startDate" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
          </div>
          <div className="col-md-1 mt-3">
            <label htmlFor="endDate" className="form-label">End Date</label>
          </div>
          <div className="col-md-3 mb-3 mt-2">
            <input type="date" className="form-control" id="endDate" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
          </div>

          <div className="col-md-1 col-1 mt-2">
            <button className="btn btn-primary btn-block" onClick={filterData}>Filter</button>
          </div>
          <div className="mb-3 col-md-2 mt-2">
            <button className="btn btn-success btn-block" onClick={exportToExcel}>Export to Excel</button>
          </div>

        </div>
        {isLoading ? (
          <p>Loading...</p>
        ) : data.length === 0 ? (
          <p>Data is not found</p>
        ) : (
          <Table responsive bordered hover>
            <thead className="thead-dark">
              <tr>
                <th>DateTime</th>
                <th>Pump Status</th>
                <th>Pump Motor Current</th>
                <th>Tank Level</th>
                <th>Circulation Pressure</th>
                <th>PH</th>
                <th>Conductivity</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index}>
                  <td>{formatDateTime(row.Date_Time)}</td>
                  <td>{row.WR3PUMPSTATLBL}</td>
                  <td>{row.WR3PUMPMOTLBL}</td>
                  <td>{row.WR3TANKLVLLBL}</td>
                  <td>{row.WR3CIRPRSRLBL}</td>
                  <td>{row.WR3PHLBL}</td>
                  <td>{row.WR3Conductivity}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </div>
    </div>
  )
}


export default Wr3Report