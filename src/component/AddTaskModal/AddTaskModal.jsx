import styles from "./AddTaskModal.module.css";

function AddTaskModal() {
  return <div className={styles.modalScreen}>
    <input type="text" className={styles.getTitle} placeholder="Enter the title..."/>
    <textarea className={styles.getCaption} rows={40} placeholder="Enter the caption..."></textarea>
    <label>
      <input type="checkbox" />
      important task
    </label>
    <div className={styles.buttons}>
      <button className={styles.createTaskBtn}>create task</button>
      <button className={styles.closeTaskBtn}>close task</button>
    </div>
    
  </div>;
}

export default AddTaskModal;
