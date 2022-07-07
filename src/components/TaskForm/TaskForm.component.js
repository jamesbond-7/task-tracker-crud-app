import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./TaskForm.styles.css";
import { ModalDialog } from "../Modal/ModalDialog.component";

export const TaskForm = ({ show, task = {}, ...otherProps }) => {
  const [name, setName] = useState("");
  const [duration, setDuration] = useState("");
  const [err, setErr] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [id, setId] = useState("");

  useEffect(() => {
    const isTask = Object.keys(task).length > 0;
    if (isTask) {
      const { id, name, duration } = task;
      setName(name);
      setDuration(duration);
      setEditMode(true);
      setId(id);
    } else {
      setName("");
      setDuration("");
      setEditMode(false);
    }
    setErr("");
  }, [task]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const dateTime = new Intl.DateTimeFormat("en-in", {
      year: "numeric",
      month: "long",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }).format(new Date());
    editMode
      ? otherProps.onUpdate({ id, name, duration, dateTime })
      : otherProps.onSave({
          id: uuidv4(),
          name,
          duration,
          dateTime,
        });
    setName("");
    setDuration("");
    otherProps.onHide();
  };

  const handleChange = (e) => {
    switch (e.target.name) {
      case "name":
        !name.trim()
          ? setErr({ name: "Kindly input name" })
          : setErr({ name: "" });
        setName(e.target.value);
        break;
      case "duration":
        !duration.trim()
          ? setErr({ duration: "Kindly input duration" })
          : setErr({ duration: "" });
        setDuration(e.target.value);
        break;
      default:
        setErr({});
    }
  };

  return (
    <ModalDialog show={show} onHide={otherProps.onHide} title="Task">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>*Task name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Fill task name"
            value={name}
            onChange={handleChange}
          />
          <Form.Text className="text-warning mt-2">{err?.name}</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>*Duration</Form.Label>
          <Form.Control
            type="text"
            name="duration"
            placeholder="Fill duration"
            value={duration}
            onChange={handleChange}
          />
          <Form.Text className="text-warning">{err?.duration}</Form.Text>
        </Form.Group>
        <Button
          variant="outline-light"
          type="submit"
          disabled={!name || !duration}
        >
          Submit
        </Button>
      </Form>
    </ModalDialog>
  );
};
