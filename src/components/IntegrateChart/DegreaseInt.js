import Navbar from '../Navbar';
import DegreaseCurrent from '../DegreaseChart/DegreaseCurrent'
import DegreasePressure  from '../DegreaseChart/DegreasePressure'
import DegreaseTemp from '../DegreaseChart/DegreaseTemp'


const DegreaseInt = () => {
  

  return (
    <div>
      <Navbar headline="Degrease Chart" />
      <DegreaseCurrent />
      <DegreasePressure />
      <DegreaseTemp />
    </div>
  );
};


export default DegreaseInt