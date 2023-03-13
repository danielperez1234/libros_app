import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import Book from "../models/book";
import "../style/book_element.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";

function BookElement({ book }: { book:Book}) {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const handleClose = () => {
    setShow(!show )
  };
  const handleIr = ()=>{
    navigate(`/book/${book.id}`)
  }
  useEffect(() => {
    console.log(show);
  }, [show]);
  return (
    <div className="bookCard" onClick={handleClose}>
      <img src={book.image} alt="" />
      <div className="bookCardTitle">
        <p className="pTitle">{book.title}</p>
        <p className="pAuthor">{book.author}</p>
        <p className="pYear">{book.year}</p>
      </div>
      <Modal className="myModal"  show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{book.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="body" >
        <div>by: {book.author}</div>
        <div> {book.year}</div>
        <div>{book.genre}</div>
        <div>{(book.series != null && book.series !== ""? "Serie: " :"")+book.series}</div>
        <img src={book.image} alt="" />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleIr}> ir</Button>
        </Modal.Footer>
      </Modal>
    </div>
    
  );
}
export default BookElement;
