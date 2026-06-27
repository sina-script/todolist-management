import styles from "./Task.module.css"

function Task({id, taskTitle, taskCaption, isCompleted, isImportant ,completeTask}) {
  return (
    <article>
      <div className={styles.descriptions}>
        <h3 className={styles.taskTitle}>{taskTitle}</h3>
        <p className={styles.taskCaption}>{taskCaption}</p>
      </div>

      <div className={styles.buttons}>
        <p className={`${styles.completedLabel} ${isCompleted?"":styles.hidden}`}>completed</p>
        <p className={`${styles.importantLabel} ${isImportant?"":styles.hidden}`}>important</p>
        <img className={styles.icons} src="./public/complete.png" alt="complete task icon" onClick={()=>completeTask(id)}/>
        <img className={styles.icons} src="./public/remove.png" alt="remove task icon" />
      </div>
    </article>
  )
}

export default Task
