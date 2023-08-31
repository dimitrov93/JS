import React from "react";
import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

const Todo = ({ text }) => {
  const [modal, setModal] = useState(false);

  const deleteHandler = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false)
  }

  return (
    <div className="card">
      <h2>{text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          DELETE
        </button>
      </div>
      {modal && <Modal onCancel={closeModal} onConfirm={closeModal} />}
      {modal && <Backdrop onCancel={closeModal} />}
    </div>
  );
};

export default Todo;
