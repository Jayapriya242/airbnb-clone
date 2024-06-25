// import React from 'react';
// import Header from './Components/HeaderComponents/HeaderComponents';
// import Button from './Components/ButtonComponents/ButtonComponents';
// import Image1 from './Components/FooterComponents/Carousel1';
// import Image2 from './Components/FooterComponents/Carousel2';
// import Image3 from './Components/FooterComponents/Carousel3';
// import IconScroller from './Components/IconComponents/IconComponents';
// import MultipleCarousel1 from './Components/FooterComponents/PastCarousel1';
// import PastCarousel2 from './Components/FooterComponents/PastCarousel2';



// const App = () => {
//   return (
//     <div className="App">
//       <Header />
//       <Button/>
//       <IconScroller/>
//       <Image1/>
//       <Image2/>
//       <Image3/>
//       <MultipleCarousel1/>
//       <PastCarousel2/>
     
      
      
//     </div>
//   );
// };

// export default App;


import React, { useState } from 'react';
import Header from './Components/HeaderComponents/HeaderComponents';
import ButtonComponents from './Components/ButtonComponents/ButtonComponents';
import Image1 from './Components/CaroselComponent/Carousel1';
import Image2 from './Components/CaroselComponent/Carousel2';
import Image3 from './Components/CaroselComponent/Carousel3';
import IconScroller from './Components/IconComponents/IconComponents';
import MultipleCarousel1 from './Components/CaroselComponent/PastCarousel1';
import PastCarousel2 from './Components/CaroselComponent/PastCarousel2';
import Footer from './Components/FooterComponent/FooterComponent';

const App = () => {
  const [searchParams, setSearchParams] = useState(null);

  const handleSearch = (params) => {
    setSearchParams(params);
  };

  return (
    <div className="App">
      <Header />
      <ButtonComponents onSearch={handleSearch} />
      <IconScroller />
      <Image1 />
      <Image2 />
      <Image3 />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="section-header">
        <h1>Past Experience</h1>
      </div>
      <MultipleCarousel1/>
      <PastCarousel2 />
      <Footer/>
    </div>
  );
};

export default App;




