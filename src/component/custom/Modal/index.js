import React from "react";
import { Modal } from "react-bootstrap";

export default ({ children, onHide, show }) => {
  return (
    <Modal
      onHide={onHide}
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      {children}
    </Modal>
  );
};
