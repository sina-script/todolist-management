import styles from "./Task.module.css"

function Task({ taskTitle, taskCaption, isCompleted, isImportant }) {
  return (
    <article>
      <div className={styles.descriptions}>
        <h3 className={styles.taskTitle}>{taskTitle}</h3>
        <p className={styles.taskCaption}>{taskCaption}</p>
      </div>

      <div className={styles.buttons}>
        <img className={styles.icons} src="./public/complete.png" alt="complete task icon" />
        <img className={styles.icons} src="./public/remove.png" alt="remove task icon" />
      </div>
    </article>
  )
}

export default Task
