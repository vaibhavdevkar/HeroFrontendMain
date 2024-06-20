import Navbar from '../Navbar';
import  Wr3Current from '../WR3Chart/Wr3Current'
import Wr3Pressure from '../WR3Chart/Wr3Pressure'
import Wr3Conductivity from '../WR3Chart/Wr3Conductivity'
import Wr3Ph from '../WR3Chart/Wr3Ph'




const Wr3Int = () => {
  

  return (
    <div>
      <Navbar headline=" Water Rinse 3 Chart" />
      <Wr3Current />
      <Wr3Pressure />
      <Wr3Ph />
      <Wr3Conductivity /> 
    </div>
  );
};



export default Wr3Int