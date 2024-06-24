
import React, { useState } from 'react';
import './Carousel2.css';


import image2 from '../../assets/Images/image2.webp';
import image4 from '../../assets/Images/image4.webp';
import image5 from '../../assets/Images/image5.webp';
import image6 from '../../assets/Images/image6.webp';
import image7 from '../../assets/Images/image7.webp';
import image8 from '../../assets/Images/image8.webp';
import image9 from '../../assets/Images/image9.webp';
import image10 from '../../assets/Images/image10.webp';
import image11 from '../../assets/Images/image11.webp';
import image12 from '../../assets/Images/image12.webp';

const Carousel = ({ images}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <button className="carousel-button prev" onClick={prevSlide}>&lt;</button>
  
      <div className="carousel-slides" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
          >
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      <button className="carousel-button next" onClick={nextSlide}>&gt;</button>
  
    </div>
  );
};

const MultipleCarousel1= () => {
  const carouselsData = [
    { images: [image9, image5, image6] },
    { images: [image10, image8, image9]},
    { images: [image11, image9, image10]},
    { images: [image12, image4, image2] }
  ];

  return (
    <div className="multiple-carousel">
      {carouselsData.map((carousel, index) => (
        <Carousel key={index} images={carousel.images} />
      ))}
    </div>
  );
};

export default MultipleCarousel1;
