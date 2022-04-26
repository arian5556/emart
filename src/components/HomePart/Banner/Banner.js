import React from "react";
import { Link } from "react-router-dom";
import { Button, Carousel } from "react-bootstrap";

const Banner = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/jDcGP5n/photo-1555529669-e69e7aa0ba9a.jpg"
          alt="First slide"
        />
        <Carousel.Caption className="fw-bold">
          <h3 className="fs-1 ">E MART</h3>
          <p className="fs-5">Get The best Product from our website .</p>
          <Button
            variant="outline-warning"
            as={Link}
            to="/shop"
            className="me-2"
          >
            Shop Now
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/Wnd7jBy/photo-1605902711622-cfb43c4437b5.jpg"
          alt="Second slide"
        />

        <Carousel.Caption className="fw-bold w-25">
          <h3 className="fs-1 ">SECURE PAYMENT</h3>
          <p className="fs-5 ">100% secure payment</p>
          <Button
            variant="outline-warning"
            as={Link}
            to="/shop"
            className="me-2"
          >
            Shop Now
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/Y0JtNBb/photo-1607082348824-0a96f2a4b9da.jpg"
          alt="Third slide"
        />

        <Carousel.Caption className="fw-bold">
          <h3 className="fs-1">DELIVERY ON TIME</h3>
          <p className="fs-5">If good have problems?Easy return policy</p>
          <Button
            variant="outline-warning"
            as={Link}
            to="/shop"
            className="me-2"
          >
            Shop Now
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
