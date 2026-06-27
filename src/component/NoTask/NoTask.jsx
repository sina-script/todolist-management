import styles from "./NoTask.module.css"

function NoTask() {
  return (
    <div className={styles.noCityTemplate}>
        <h2>There isn't any task.</h2>
        <img src="./public/empty-box.png" alt="no task icon" />
    </div>
  )
}

export default NoTask