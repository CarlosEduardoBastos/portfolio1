import React from "react";
import { Carousel } from "react-bootstrap";
import foto from "../img/site.png";

function ControlledCarousel() {
  const [index, setIndex] = React.useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} variant="dark">
      <Carousel.Item>
        <img className="d-block w-100" src={foto} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={foto} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={foto} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

//   render(<ControlledCarousel />);
export default ControlledCarousel;
