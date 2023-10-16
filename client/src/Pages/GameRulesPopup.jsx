import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");
//npm install react-modal

export default function GameRulesPopup({ isOpen, onClose, text }) {
  return (
    <>
      <Modal isOpen={isOpen} onRequestClose={onClose}>
        <div>
          <h2>Game Rules</h2>
          <p>{text}</p>
          <button onClick={onClose}>Close</button>
        </div>
      </Modal>
    </>
  );
}
