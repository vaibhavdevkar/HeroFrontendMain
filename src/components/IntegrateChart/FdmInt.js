import Navbar from '../Navbar';
import FDM1Conductivity from '../FreshDMWater/FDM1Conductivity'
import FDM1Current from '../FreshDMWater/FDM1Current'
import FDM1Pressure from '../FreshDMWater/FDM1Pressure'
import FDM1Ph from '../FreshDMWater/FDM1Ph'



const FdmInt = () => {
  

  return (
    <div>
      <Navbar headline="Fresh DM Water" />
      <FDM1Current />
      <FDM1Pressure />
      <FDM1Ph />
      <FDM1Conductivity />
     
    </div>
  );
};




export default FdmInt