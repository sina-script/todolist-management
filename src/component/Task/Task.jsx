import styles from "./Task.module.css"

function Task() {
  return (
    <article>
        <div className={styles.descriptions}>
            <h3 className={styles.taskTitle}>React js</h3>
            <p className={styles.taskCaption}>Lorem ipsum dolor sit amet consectetur adipisicing elit.accusantium nulla labore eum sint.</p>
        </div>
                <div className={styles.buttons}>
            <img className={styles.icons} src="./public/complete.png" alt="complete task icon" />
            <img className={styles.icons} src="./public/remove.png" alt="remove task icon" />
        </div>
    </article>
  )
}

export default Task