import React, { useEffect, useState } from "react";
import axios, { isCancel, AxiosError } from "axios";
import "../style/home.css";
import NavApp from "../widgets/nav_bar";
import BookElement from "../widgets/book_elemnt";
import CarouselApp from "../widgets/carousel_app";
import Book from "../models/book";
import CarouselTitles from "../widgets/carousel_titles";
let bk = new Book(
  1,
  "Harry Potter",
  "JK",
  2000,
  "",
  "",
  "https://i.pinimg.com/736x/f1/cc/99/f1cc995f8f00b7fd27dda10c9e297071--childrens-books-kid-books.jpg"
);
function Home() {
  const [serie1,setSerie] = useState(<div></div>)
  const [arrayBooks, stateArray] = useState([
    <BookElement book={bk}></BookElement>,
    <BookElement book={bk}></BookElement>,
    <BookElement book={bk}></BookElement>,
    <BookElement book={bk}></BookElement>,
    <BookElement book={bk}></BookElement>,
    <BookElement book={bk}></BookElement>,
    <BookElement book={bk}></BookElement>,
    <BookElement book={bk}></BookElement>,
    <BookElement book={bk}></BookElement>,
    <BookElement book={bk}></BookElement>,
    <BookElement book={bk}></BookElement>
  ]);
  var response;
  useEffect(() => {
    axios
      .get("https://api-libros-node.azurewebsites.net/api/libros")
      .then(function (resp) {
        console.log(resp.data);
        response = resp.data;
        var arr = [];
        for (let i = 0; i < response!.length; i ++) {
          var tBook = new Book(
            response[i].id_libro,
            response[i].titulo,
            response[i].autor,
            response[i].anio,
            response[i].genero,
            response[i].serie,
            response[i].imagen
          );
          arr.push(<BookElement book={tBook}></BookElement>);
        }
        stateArray(arr);
      });
      axios.get("https://api-libros-node.azurewebsites.net/api/series").then(
        function (series){
          console.log(series.data)
          const index = Math.floor(Math.random() * series.data.length);
          var x1 = series.data[index];
          axios.get(`https://api-libros-node.azurewebsites.net/api/libros/serie/${x1.id_serie}`).then(
            function(librosBySerie){
              console.log(librosBySerie.data)
              var tempArray = [<div></div>];
              (librosBySerie.data as any[]).forEach((libroBySerie: { id_libro: number; titulo: string; autor: string; anio: number; genero: string; serie: string | undefined; imagen: string | undefined; })=>{
                tempArray.push(
                  <BookElement book={new Book(
                    libroBySerie.id_libro,
                    libroBySerie.titulo,
                    libroBySerie.autor,
                    libroBySerie.anio,
                    libroBySerie.genero,
                    libroBySerie.serie,
                    libroBySerie.imagen
                  )}></BookElement>
                )
              })
              setSerie(<div className="titulo-Serie">
                <h2>{librosBySerie.data[0].serie}</h2>
                <CarouselApp>
                {tempArray}
              </CarouselApp></div>)
            }
          )
        }
      )
  }, []);

  return (
    <div className="App">
      <NavApp></NavApp>
      <CarouselApp>{arrayBooks}</CarouselApp>
      {serie1}
      <CarouselTitles
        title={["1", "2", "3"]}
        list={[bk, bk, bk, bk, bk, bk, bk]}
      ></CarouselTitles>
    </div>
  );
}

export default Home;
