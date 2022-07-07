import React from "react";
import { Card } from "react-bootstrap";
import "./NoTask.styles.css";

export const NoTask = () => (
  <div className="card-wrapper">
    <Card
      bg="dark"
      text="white"
      style={{ width: "18rem", textAlign: "center" }}
    >
      <Card.Body>
        <Card.Text>No Tasks Available yet!!</Card.Text>
      </Card.Body>
    </Card>
  </div>
);
