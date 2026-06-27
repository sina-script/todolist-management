import { useState } from "react";
import styles from "./AddTaskModal.module.css";

function AddTaskModal({ closeModal, addTask }) {
  const [title, setTitle] = useState("");
  const [caption, setCaption] = useState("");
  const [important, setImportant] = useState(false);

  return (
    <div className={styles.modalScreen}>
      <input
        type="text"
        className={styles.getTitle}
        placeholder="Enter the title..."
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <textarea
        className={styles.getCaption}
        rows={40}
        placeholder="Enter the caption..."
        value={caption}
        onChange={(event) => setCaption(event.target.value)}
      ></textarea>
      <label>
        <input
          type="checkbox"
          checked={important}
          onChange={(event) => setImportant(event.target.checked)}
        />
        important task
      </label>
      <div className={styles.buttons}>
        <button
          className={styles.createTaskBtn}
          onClick={() => {
            addTask(title, caption, important);
            closeModal()
          }}
        >
          create task
        </button>
        <button className={styles.closeTaskBtn} onClick={()=>closeModal()}>
          close task
        </button>
      </div>
    </div>
  );
}

export default AddTaskModal;
