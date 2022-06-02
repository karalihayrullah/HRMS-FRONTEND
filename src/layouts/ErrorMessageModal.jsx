import React from "react";
import { Modal, Header, Icon } from "semantic-ui-react";

export default function ErrorMessageModal({ onClose, onOpen, open, content }) {
  return (
    <Modal
      basic
      dimmer
      onClose={onClose}
      onOpen={onOpen}
      open={open}
      size="small"
    >
      <Header icon as="h2" className="orbitron">
        <Icon name="x" />
        {content}
      </Header>
    </Modal>
  );
}
