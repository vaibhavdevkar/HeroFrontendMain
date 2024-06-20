import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import axios from 'axios';

const Wr2Temp = () => {
  const [chartData, setChartData] = useState({
    series: [{
      name: 'Hot Water Temperature',
      data: []
    }],
    options: {
      chart: {
        type: 'line',
        height: 350
      },
      xaxis: {
        type: 'datetime'
      },
      title: {
        align: 'center'
      },
      stroke: {
        curve: 'smooth',
        width: 2 
      },
      markers: {
        size: 5
      }
    }
  });

  const fetchData = async (interval) => {
    let startDate, endDate;

    if (interval === '1d') {
      const today = new Date();
      startDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
      endDate = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 23, 59, 59);
    } else if (interval === '7d') {
      startDate = new Date();
      startDate.setDate(startDate.getDate() - 7);
      endDate = new Date();
    }else if (interval === '15d') {
      startDate = new Date();
      startDate.setDate(startDate.getDate() - 15);
      endDate = new Date();
    } else if (interval === '1m') {
      startDate = new Date();
      startDate.setMonth(startDate.getMonth() - 1);
      endDate = new Date();
    } else if (interval === '3m') {
      startDate = new Date();
      startDate.setMonth(startDate.getMonth() - 3);
      endDate = new Date();
    }

    try {
      const response = await axios.get(`http://localhost:5002/api/pumpmotorcurrent/WR2TEMPLBL?startDate=${startDate}&endDate=${endDate}`);
      const data = response.data.map(record => ({
        x: new Date(record.Date_Time).getTime(),
        y: record.WR2TEMPLBL
      }));
      setChartData(prevState => ({
        ...prevState,
        series: [{ data }],
      }));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData('1d'); // Fetch data for the current day initially
  }, []);

  return (
    <div>
      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-md-12 mb-4">
            <div className="card">
              <div className="card-body">
              <h4 className="font-weight-bold">Temperature</h4>
              <Chart options={chartData.options} series={chartData.series} type="line" height={400} />
                
                <div className="btn-group" role="group">
                  {/* <button type="button" className="btn btn-secondary" onClick={() => fetchData('1d')}>1 Day</button> */}
                  <button type="button" className="btn btn-secondary" onClick={() => fetchData('7d')}>7 Days</button>
                  <button type="button" className="btn btn-secondary" onClick={() => fetchData('15d')}>15 Days</button>
                  <button type="button" className="btn btn-secondary" onClick={() => fetchData('1m')}>1 Month</button>
                  <button type="button" className="btn btn-secondary" onClick={() => fetchData('3m')}>3 Months</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Wr2Temp