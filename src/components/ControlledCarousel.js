import React from "react";
import { Carousel } from "react-bootstrap";
import foto from "../img/site.png";
import modelo1 from "../img/modelo1.png";
import modelo2 from "../img/modelo2.png";

function ControlledCarousel() {
  const [index, setIndex] = React.useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} variant="dark">
      <Carousel.Item>
        <img className="d-block w-100" src={modelo1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={foto} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={modelo2} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

//   render(<ControlledCarousel />);
export default ControlledCarousel;
