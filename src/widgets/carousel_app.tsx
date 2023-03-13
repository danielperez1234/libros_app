import React, { ReactChild } from "react";
import { Carousel } from "react-responsive-carousel";
import BookElement from "./book_elemnt";
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import "../style/carousel_app.css"
interface Props {
  children?: ReactChild[];
}


function CarouselApp({ children }: Props) {
  const arrayThree = [];
  for (let i = 0; i < children!.length ; i += 3) {
    arrayThree.push(
      <div className="arrayThree"> 
      {children![i]} 
      {children!.length>(i+1)? children![i+1] :<div></div>}
      {children!.length>(i+2)? children![i+2] :<div></div>}
      </div>);
      
  }
  return (
    <Carousel
  axis="horizontal"
  showStatus={false}
  autoPlay={true}
  interval={3000}
  infiniteLoop={true}

>
     {arrayThree}
  </Carousel>
  );
}

export default CarouselApp;