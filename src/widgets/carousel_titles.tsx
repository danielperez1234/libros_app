import React,{ReactChild} from "react";
import { Carousel } from "react-responsive-carousel";
import Book from "../models/book";
import CarouselApp from "./carousel_app";
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import "../style/carousel_app.css"
import BookElement from "./book_elemnt";
import "../style/carousel_titles.css"
interface Props{title:string[],list: Book[]}

function CarouselTitles({title,list}:Props){
  const arrayThree = [];
  for (let i = 0; i < list!.length ; i += 3) {
    arrayThree.push(
      <div className="carouselTitles">
        <div className="carouselTitle">{title[((i+3)/3)-1]}</div>
      <div className="arrayThree"> 
      {<BookElement book={list[i]}></BookElement> } 
      {list!.length>(i+1)? <BookElement book={list[i+1]}></BookElement> :<div></div>}
      {list!.length>(i+2)? <BookElement book={list[i+2]}></BookElement>  :<div></div>}
      </div></div>);
      
  }
  return(
    <Carousel
  axis="horizontal"
  showStatus={false}
  autoPlay={true}
  interval={3000}
  infiniteLoop={true}

>
     {arrayThree}
  </Carousel>
  )
}
export default CarouselTitles