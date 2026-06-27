import { useState } from "react";
import styles from "./AddTaskModal.module.css";

function AddTaskModal({ closeModal, addTask }) {
  const [title, setTitle] = useState("");
  const [caption, setCaption] = useState("");
  const [important, setImportant] = useState(false);
  const [isTitleEmpty, setIsTitleEmpty] = useState(false);
  const [isCaptionEmpty, setIsCaptionEmpty] = useState(false);

  const checkModal = () => {
    if (title.trim() == "") {
      setIsTitleEmpty(true);
    }
    else if (caption.trim() == "") {
      setIsCaptionEmpty(true);
    } else {
      addTask(title, caption, important);
      closeModal();
    }
  };

  return (
    <div className={styles.modalScreen}>
      <input
        type="text"
        className={`${styles.getTitle} ${isTitleEmpty?"":styles.spaceBottom}`}
        placeholder="Enter the title..."
        value={title}
        onChange={(event) => {
          setTitle(event.target.value)
          setIsTitleEmpty(false)
        }}
      />
      {isTitleEmpty && (
        <small>You must not leave the new task title empty.</small>
      )}
      <textarea
        className={`${styles.getCaption} ${isCaptionEmpty?"":styles.spaceBottom}`}
        rows={40}
        placeholder="Enter the caption..."
        value={caption}
        onChange={(event) => {
          setCaption(event.target.value)
          setIsCaptionEmpty(false)
        }}
      ></textarea>
      {isCaptionEmpty && (
        <small>You must not leave the new task caption empty.</small>
      )}
      <label>
        <input
          type="checkbox"
          checked={important}
          onChange={(event) => setImportant(event.target.checked)}
        />
        important task
      </label>
      <div className={styles.buttons}>
        <button className={styles.createTaskBtn} onClick={checkModal}>
          create task
        </button>
        <button
          className={styles.closeTaskBtn}
          onClick={() => {
            closeModal();
          }}
        >
          close task
        </button>
      </div>
    </div>
  );
}

export default AddTaskModal;
