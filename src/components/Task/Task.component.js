import React from "react";
import { FaTimes, FaPencilAlt } from "react-icons/fa";

import "./Task.styles.css";

export const Task = ({ idx, task, ...otherProps }) => {
  const handleEdit = () => {
    const [currTask] = otherProps.onEdit(task.id);
    otherProps.showModal(true);
    otherProps.newTask(currTask);
  };

  const handleOnDelete = () => {
    const [taskToDelete] = otherProps.onDelete(task.id);
    otherProps.removeTask(taskToDelete);
    otherProps.showDeleteModal(true);
  };

  return (
    <tr>
      <td>{idx + 1}</td>
      <td>{task.name}</td>
      <td>{task.duration}</td>
      <td>{task.dateTime}</td>
      <td>
        <FaPencilAlt onClick={handleEdit} className="icon edit-icon" />
      </td>
      <td>
        <FaTimes onClick={handleOnDelete} className="icon delete-icon" />
      </td>
    </tr>
  );
};
