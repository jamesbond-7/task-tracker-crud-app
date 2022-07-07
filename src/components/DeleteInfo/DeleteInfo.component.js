import React from "react";
import { Button, Card, Stack } from "react-bootstrap";
import { ModalDialog } from "../Modal/ModalDialog.component";
import "./DeleteInfo.styles.css";

export const DeleteInfo = ({ deleteTaskDetails, ...otherProps }) => {
  const handleDelete = () => {
    otherProps.delete(deleteTaskDetails.id);
    otherProps.onHide();
  };
  return (
    <ModalDialog
      show={otherProps.show}
      onHide={otherProps.onHide}
      title="Review Task"
    >
      <div className="card-wrapper">
        <Card bg="dark" text="white">
          <Card.Body>
            <Card.Text>Name - {deleteTaskDetails.name}</Card.Text>
            <Card.Text>Duration - {deleteTaskDetails.duration}</Card.Text>
            <Stack direction="horizontal" gap={3}>
              <Button variant="outline-danger" onClick={handleDelete}>
                Delete
              </Button>
              <Button
                variant="outline-light"
                onClick={() => otherProps.onHide()}
              >
                Cancel
              </Button>
            </Stack>
          </Card.Body>
        </Card>
      </div>
    </ModalDialog>
  );
};
