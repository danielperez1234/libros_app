import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/crear.css";
import NavApp from "../widgets/nav_bar";

function Create() {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    gender: "",
    serie: "",
    year: 2000,
    image: ""
  });
  const handleSubmit = (event:React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log(formData);
    
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    console.log(event.target);
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
      
    }));
  };
  return (
    <div>
      <NavApp></NavApp>
      <div className="crearBody">
        <div className="crearTitle">Crear Libro</div>
        <Form className="myForm">
          <Form.Group className="group">
            <Form.Label>TITULO</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter title"
              onChange={handleChange}
              name="title"
              value={formData.title}
            />
          </Form.Group>

          <Form.Group className="group">
            <Form.Label>AUTOR</Form.Label>
            <Form.Control
              as="select"
              name="author"
              value={formData.author}
              onChange={handleChange}
            >
              <option>Jane Austen</option>
              <option>Charles Dickens</option>
              <option>Mark Twain</option>
            </Form.Control>
          </Form.Group>

          <Form.Group className="group">
            <Form.Label>GENERO</Form.Label>
            <Form.Control
              as="select"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option>Romance</option>
              <option>Sci-Fi</option>
              <option>Horror</option>
            </Form.Control>
          </Form.Group>

          <Form.Group className="group">
            <Form.Label>SERIE</Form.Label>
            <Form.Control
              as="select"
              name="serie"
              value={formData.serie}
              onChange={handleChange}
            >
              <option>Harry Potter</option>
              <option>Lord of the Rings</option>
              <option>Game of Thrones</option>
            </Form.Control>
          </Form.Group>

          <Form.Group className="group">
            <Form.Label>ANIO</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter year"
              onChange={handleChange}
              name="year"
              value={formData.year}
            />
          </Form.Group>

          <Form.Group className="group">
            <Form.Label>LINK IMAGEN</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter image URL"
              onChange={handleChange}
              name="image"
              value={formData.image}
            />
          </Form.Group>

          <div className="formButton">
            <Button variant="primary" type="submit" onSubmit={handleSubmit}>
              ENVIAR
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Create;
