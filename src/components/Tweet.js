import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

const Tweet = (props) => {
  const [counter, setCounter] = useState(0);
  const addCount = () => {
    setCounter(counter + 1);
  };
  const removeCount = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="tweet">
      <Card style={{ width: "58rem", margin: "auto", marginBottom: "30px" }}>
        <Card.Body>
          <Card.Title>{props.author}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {" "}
            {props.date}
          </Card.Subtitle>
          <Card.Text>{props.text.toUpperCase()}</Card.Text>
          <Card.Link href="#">
            <button onClick={addCount}>Like</button>
            <button onClick={removeCount}>Dislike</button>
          </Card.Link>
          <Card.Link href="#">{counter}</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Tweet;
