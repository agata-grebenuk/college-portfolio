import React from 'react';

import Header from '../header/header.jsx';
import Works from '../work/works.jsx';
import Footer from '../footer/footer.jsx';
import Slider from '../slider/slider.jsx';

import tempData from '../../utils/data.js';


function App() {
  return (
    <div>
      <Header typeOfWorks={tempData.typeOfWorks}/>
      <Works works={tempData.works} />
      <Slider/>
      <Footer/>
    </div>
  );
}

export default App;