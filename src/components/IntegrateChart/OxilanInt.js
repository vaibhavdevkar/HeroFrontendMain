import Navbar from '../Navbar';
import OxsilanConductivity from '../Oxsilan/OxsilanConductivity'
import OxsilanCurrent from '../Oxsilan/OxsilanCurrent'
import OxsilanPh from '../Oxsilan/OxsilanPh'
import OxsilanPressure from '../Oxsilan/OxsilanPressure'



const OxilanInt = () => {
  

  return (
    <div>
      <Navbar headline="Oxsilan Chart" />
      <OxsilanCurrent />
      <OxsilanPressure />
      <OxsilanPh />
      <OxsilanConductivity />  
    </div>
  );
};


export default OxilanInt