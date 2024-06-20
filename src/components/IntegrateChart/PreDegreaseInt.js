import React, { useEffect, useRef } from 'react';
import { Dropdown } from 'react-bootstrap'; // Bootstrap components
import PdPressure from '../PreDegreaseChart/PdPressure';
import PdTemp from '../PreDegreaseChart/PdTemp';
import PdCurrent from '../PreDegreaseChart/PdCurrent';
import Navbar1 from '../Navbar';

// Ensure Bootstrap CSS is imported
import 'bootstrap/dist/css/bootstrap.min.css';

const PreDegreaseInt = () => {
  const scrollContainerRef = useRef(null);

  // Set up Scrollspy when the component mounts
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.setAttribute('data-bs-spy', 'scroll');
      scrollContainerRef.current.setAttribute('data-bs-target', '#dropdown-navbar');
      scrollContainerRef.current.setAttribute('data-bs-offset', '0'); // Adjust offset if needed
      scrollContainerRef.current.setAttribute('tabindex', '0');
    }
  }, []);

  return (
    <div>
     <div style={{position : "sticky" , top: "0", zIndex: "900"}}>
     <Navbar1 headline="Water Rinse 1 Chart" />
    

      {/* Dropdown-based navigation */}
      <Dropdown>
        <Dropdown.Toggle variant="light" id="dropdown-navbar" className='m-3'>
          Select Chart
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#section-current">PdCurrent</Dropdown.Item>
          <Dropdown.Item href="#section-pressure">PdPressure</Dropdown.Item>
          <Dropdown.Item href="#section-temp">PdTemp</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      </div>

      {/* Scrollable container with Scrollspy attributes */}
      <div
        ref={scrollContainerRef}
        style={{ height: '80vh', overflowY: 'auto', overflowX: 'hidden', scrollBehavior: 'smooth' }} // Ensure no horizontal scroll
      >
        {/* Sections with unique IDs for Scrollspy */}
        <div id="section-current">
          <PdCurrent />
        </div>
        <div id="section-pressure">
          <PdPressure />
        </div>
        <div id="section-temp">
          <PdTemp />
        </div>
      </div>
    </div>
  );
};

export default PreDegreaseInt;
