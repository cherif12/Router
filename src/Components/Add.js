import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Link, useNavigate } from "react-router-dom";

export function Add({ handelAdd }) {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [rating, setRating] = useState("");
  const [trailer, setTrailer] = useState("");
  // const [id, setId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, description, imgUrl, rating, trailer);
    const data = { name, description, imgUrl, rating, trailer };
    if (!name || !description || !imgUrl || !rating || !trailer ) {
      
     return alert("vide")
    }
    handelAdd({...data,id:Math.random()});
      setName("");
      setDescription("");
      setImgUrl("");
      setRating("");
      setTrailer("");
navigate("/")
    
  };

  return (
    <>
      <Row>
        <Col className="b" sm={12}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              padding: "20px",
            }}
          >
            <form
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
              onSubmit={handleSubmit}
            >
              <h1 style={{ color: "white" }}>Add your Movie</h1>
              <div style={{ display: "flex" }}>
                <InputGroup
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mb-3"
                >
                  <InputGroup.Text
                    style={{ borderRadius: "0%" }}
                    id="inputGroup-sizing-default"
                  >
                    Movie Name
                  </InputGroup.Text>
                  <Form.Control
                    style={{ borderRadius: "0%" }}
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    
                  />
                </InputGroup>
              </div>

              <div style={{ display: "flex" }}>
                <InputGroup
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="mb-3"
                >
                  <InputGroup.Text
                    style={{ borderRadius: "0%" }}
                    id="inputGroup-sizing-default"
                  >
                    Movie Description
                  </InputGroup.Text>
                  <Form.Control
                    style={{ borderRadius: "0%" }}
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                  />
                </InputGroup>
              </div>
              <div style={{ display: "flex" }}>
                <InputGroup
                  value={imgUrl}
                  onChange={(e) => setImgUrl(e.target.value)}
                  className="mb-3"
                >
                  <InputGroup.Text
                    style={{ borderRadius: "0%" }}
                    id="inputGroup-sizing-default"
                  >
                    Poster Url
                  </InputGroup.Text>
                  <Form.Control
                  type="url"
                    style={{ borderRadius: "0%" }}
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                  />
                </InputGroup>
              </div>
              <div style={{ display: "flex" }}>
                <InputGroup
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                  className="mb-3"
                  
                >
                  <InputGroup.Text
                    style={{ borderRadius: "0%" }}
                    id="inputGroup-sizing-default"
                  >
                    Movie Rating
                  </InputGroup.Text>
                  <Form.Control
                  type="number"
                    style={{ borderRadius: "0%" }}
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                  />
                </InputGroup>
              </div>

              <div style={{ display: "flex" }}>
                <InputGroup
                  value={rating}
                  onChange={(e) => setTrailer(e.target.value)}
                  className="mb-3"
                >
                  <InputGroup.Text
                    style={{ borderRadius: "0%" }}
                    id="inputGroup-sizing-default"
                  >
                    Movie Trailer
                  </InputGroup.Text>
                  <Form.Control
                  type="url"
                    style={{ borderRadius: "0%" }}
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                  />
                </InputGroup>
              </div>

             
              <button style={{ width: "100%" }} className="btn_add">
                Add Movie
              </button>
            </form>
          </div>
        </Col>
        
      </Row>
    </>
  );
}
