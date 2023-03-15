import { Trash, Check } from 'phosphor-react'

import styles from './ToDoListCard.module.css'

export function ToDoListCard() {
  const isFinished = true


  return (
    <div className={styles.card}>

      <button className={isFinished ? styles.taskCompleted : styles.notFinished}>
        {isFinished ? <Check size={16} /> : null}
      </button>

      <p className={isFinished ? styles.taskTextCompleted : styles.taskText}>
        Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
      </p>

      <button className={styles.deleteItem}>
        <Trash size={24} />
      </button>

    </div>
  )
}