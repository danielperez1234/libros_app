import React from "react";
import "../style/home.css";
import NavApp from "../widgets/nav_bar";
import BookElement from "../widgets/book_elemnt";
import CarouselApp from "../widgets/carousel_app";
import Book from "../models/book";
import CarouselTitles from "../widgets/carousel_titles";
let bk = new Book(1,"Harry Potter","JK",2000,"","","https://i.pinimg.com/736x/f1/cc/99/f1cc995f8f00b7fd27dda10c9e297071--childrens-books-kid-books.jpg");
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
