import React from "react";
import { useParams } from "react-router-dom";

function Libro(){
  const { libroId } = useParams();
  return (
    <div>{libroId}</div>
  )
}
export default Libro;