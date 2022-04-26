import React from "react";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Items from "../Items/Items";
import Style from "../Style/Style";

const Home = () => {
  return (
    <div className="font">
      <Banner></Banner>
      <div className="note text-center ">
        <h1 className="my-3 fs-1">E mart ®</h1>
        <p className="fs-5">
          An extensive collection of elegant websites and multiple <br />{" "}
          practical shop features ready for your eCommerce <br /> venture!
        </p>
      </div>
      <Style></Style>
      <Contact></Contact>
      <Items></Items>
    </div>
  );
};

export default Home;
