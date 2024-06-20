import Navbar from '../Navbar';
import  Wr2Current from '../WR2Chart/Wr2Current'
import Wr2Pressure from '../WR2Chart/Wr2Pressure'
import Wr2Temp from '../WR2Chart/Wr2Temp'



const Wr2Int = () => {
  

  return (
    <div>
      <Navbar headline=" Water Rinse 2 Chart" />
      <Wr2Current />
      <Wr2Pressure />
      <Wr2Temp />
     
    </div>
  );
};


export default Wr2Int