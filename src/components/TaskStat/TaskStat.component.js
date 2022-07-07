import React from "react";
import { Card } from "react-bootstrap";
import "./TaskStat.styles.css";

export const TaskStat = ({ tasks }) => (
  <div className="wrapper">
    <Card
      bg="dark"
      text="white"
      style={{ width: "18rem", textAlign: "center" }}
    >
      <Card.Header>Number of Tasks</Card.Header>
      <Card.Body>
        <Card.Title> So far yet </Card.Title>
        <Card.Text>{tasks.length}</Card.Text>
      </Card.Body>
    </Card>
  </div>
);
