import React from "react";
import { Modal } from "react-bootstrap";
import "./ModalDialog.style.css";

export const ModalDialog = (props) => (
  <Modal
    show={props.show}
    onHide={props.onHide}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        <h3 className="task-title">{props.title}</h3>
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>{props.children}</Modal.Body>
  </Modal>
);
