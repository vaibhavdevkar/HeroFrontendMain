// import React, { useEffect, useState } from 'react';
// import Navbar from '../Navbar';
// import Chart from 'react-apexcharts';
// import axios from 'axios';

// const Hotwatercharts = () => {
//   const [chartData, setChartData] = useState({
//     series: [{
//       name: 'Pump Motor Current',
//       data: []
//     }],
//     options: {
//       chart: {
//         type: 'line',
//         height: 350
//       },
//       xaxis: {
//         type: 'datetime'
//       },
//       title: {
//         // text: 'Pump Motor Current Over Time',
//         align: 'center'
//       },
//       stroke: {
//         curve: 'smooth',
//          width: 2 
//       },
//       markers: {
//         size: 5
//       }
//     }
//   });

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get('http://localhost:5002/api/pumpmotorcurrent/HWPUMPMOTLBL');
//       const data = response.data.map(record => ({
//         x: new Date(record.Date_Time).getTime(),
//         y: record.HWPUMPMOTLBL
//       }));
//       setChartData(prevState => ({
//         ...prevState,
//         series: [{ data }],
//       }));
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   return (
//     <div>
//       <Navbar headline="Hot Water Chart" />
//       <div className="container-fluid mt-4">
//         <div className="row">
//           <div className="col-md-12 mb-4">
//             <div className="card">
//               <div className="card-body">
//                 <h4 className="font-weight-bold">Pump Motor Current Chart</h4>
//                 <Chart options={chartData.options} series={chartData.series} type="line" height={400} />
//               </div>
//             </div>
//           </div>
//           {/* <div className="col-md-6 mb-4">
//             <div className="card">
//               <div className="card-body">
//                 <h5 className="card-title">Other Chart</h5>
                
//               </div>
//             </div>
//           </div> */}
//         </div>
//       </div>
//     </div>
//   );
// };


//  export default Hotwatercharts;

import Navbar from '../Navbar';
import HwCurrent from '../allcharts/HwCurrent';
import HwPressure from '../allcharts/HwPressure';
import HwTemp from '../allcharts/HwTemp';

const Hotwatercharts = () => {
  

  return (
    <div>
      <Navbar headline="Hot Water Chart" />
      <HwCurrent />
      <HwPressure />
      <HwTemp />
    </div>
  );
};

export default Hotwatercharts;
