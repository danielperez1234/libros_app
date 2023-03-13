import React from "react";
import "../style/home.css";
import NavApp from "../widgets/nav_bar";
import BookElement from "../widgets/book_elemnt";
import CarouselApp from "../widgets/carousel_app";
import Book from "../models/book";
import CarouselTitles from "../widgets/carousel_titles";
let bk = new Book(1,"Harry Potter","JK",2000,"","","https://d827xgdhgqbnd.cloudfront.net/wp-content/uploads/2016/04/09121712/book-cover-placeholder.png");
function Home() {
  return (
    <div className="App">
      <NavApp></NavApp>
      <CarouselApp>
      <BookElement book={bk}></BookElement>
      <BookElement book={bk}></BookElement>
      <BookElement book={bk}></BookElement>
      <BookElement book={bk}></BookElement>
      <BookElement book={bk}></BookElement>
      <BookElement book={bk}></BookElement>
      <BookElement book={bk}></BookElement>
      <BookElement book={bk}></BookElement>
      <BookElement book={bk}></BookElement>
      <BookElement book={bk}></BookElement>
      <BookElement book={bk}></BookElement>
      </CarouselApp>
      <CarouselTitles title={["1","2","3"]} list={[bk,bk,bk,bk,bk,bk,bk]}></CarouselTitles>
    </div>
  );
}

export default Home;
