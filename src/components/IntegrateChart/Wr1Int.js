import Navbar from '../Navbar';
import  Wr1Current from '../WR1Chart/Wr1Current'
import Wr1Pressure from '../WR1Chart/Wr1Pressure'
import Wr1Temp from '../WR1Chart/Wr1Temp'



const Wr1Int = () => {
  

  return (
    <div>
      <Navbar headline=" Water Rinse 1 Chart" />
      <Wr1Current />
      <Wr1Pressure />
      <Wr1Temp />
     
    </div>
  );
};


export default Wr1Int