import React from "react";
import { Table } from "react-bootstrap";
import { Task } from "../Task/Task.component";

export const TaskList = ({ tasks, ...otherProps }) => (
  <Table responsive striped bordered hover variant="dark">
    <thead>
      <tr>
        <th>#</th>
        <th>Task Name</th>
        <th>Duration</th>
        <th>Created/Updated</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {tasks.map((task, idx) => (
        <Task idx={idx} key={task.id} task={task} {...otherProps} />
      ))}
    </tbody>
  </Table>
);
