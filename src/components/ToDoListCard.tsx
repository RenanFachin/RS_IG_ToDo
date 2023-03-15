// ICONS
import { Trash, Check } from 'phosphor-react'
import { useState } from 'react'

// CSS
import styles from './ToDoListCard.module.css'

interface toDoListCardProps {
  content: string;
  taskId: number;
  isFinished: boolean;
  onSelect: (taskId: number) => void;
}

export function ToDoListCard({ content, isFinished, onSelect, taskId }: toDoListCardProps) {
  
  function handleToggleTask() {
    onSelect(taskId)
  }

  return (
    <div className={styles.card}>

      <button
        className={isFinished ? styles.taskCompleted : styles.notFinished}
        onClick={handleToggleTask}
      >
        {isFinished ? <Check size={16} /> : null}
      </button>

      <p className={isFinished ? styles.taskTextCompleted : styles.taskText}>
        {content}
      </p>

      <button className={styles.deleteItem}>
        <Trash size={24} />
      </button>

    </div>
  )
}