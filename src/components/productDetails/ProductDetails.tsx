import { Carousel } from "antd";
import React from "react";
import Header from "../header/Header";

function ProductDetails() {
  return (
    <div className="flex flex-col justify-center items-center w-full">
        <Header/>
      <div>
        <Carousel arrows infinite={false}>
          <p>1</p>
          <p>2</p>
          <p>3</p>
        </Carousel>
      </div>
      <div></div>
    </div>
  );
}

export default ProductDetails;
