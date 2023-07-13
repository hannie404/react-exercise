import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Slide({ images }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {images.map((image, idx) => (
        <Carousel.Item key={idx}>
          <img className="d-block w-100" src={image} alt={`Slide ${idx + 1}`} />
          <Carousel.Caption>
            <h3>{`Slide ${idx + 1} label`}</h3>
            <p>{`Slide ${idx + 1} description`}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Slide;
