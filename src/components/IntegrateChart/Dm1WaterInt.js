import Navbar from '../Navbar';
import Dm1Conductivity from '../DM1Water/Dm1Conductivity'
import Dm1Current from '../DM1Water/Dm1Current'
import Dm1Ph from '../DM1Water/Dm1Ph'
import Dm1Pressure from '../DM1Water/Dm1Pressure'



const Dm1WaterInt = () => {
  

  return (
    <div>
      <Navbar headline="DM 1 Water Chart" />
      <Dm1Current />
      <Dm1Pressure />
      <Dm1Conductivity />
      <Dm1Ph />
    </div>
  );
};



export default Dm1WaterInt