import Navbar from '../Navbar';
import  Wr4Current from '../WR4Chart/Wr4Current'
import Wr4Pressure from '../WR4Chart/Wr4Pressure'
import Wr4Conductivity from '../WR4Chart/Wr4Conductivity'
import Wr4Ph from '../WR4Chart/Wr4Ph'




const Wr4Int = () => {
  

  return (
    <div>
      <Navbar headline=" Water Rinse 4 Chart" />
      <Wr4Current />
      <Wr4Pressure />
      <Wr4Ph />
      <Wr4Conductivity /> 
    </div>
  );
};



export default Wr4Int