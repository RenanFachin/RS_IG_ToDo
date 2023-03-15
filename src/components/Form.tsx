// ICONS
import { PlusCircle } from 'phosphor-react'
import { FormEvent, useState } from 'react'

// CSS
import styles from './Form.module.css'
import { Tasks } from './Tasks'

export interface TaskProps {
  content: string;
  id: number;
  isCompleted: boolean;
}

const allTasks: TaskProps[] = [
  {
    id: 1,
    content: 'teste',
    isCompleted: false
  },
  {
    id: 2,
    content: 'teste',
    isCompleted: true
  },
  {
    id: 3,
    content: 'teste',
    isCompleted: false
  },
]

export function Form() {

  const [tasks, setTasks] = useState<TaskProps[]>(allTasks)
  const [taskText, setTaskText] = useState('')

  function selectTask(taskId: number) {
    const newTasksArray = tasks.map((task: TaskProps) => {
      if (task.id === taskId) {
        task.isCompleted = !task.isCompleted;
      }
      return task;
    });
    setTasks(newTasksArray);
  }

  function handleCreateNewTask(event: FormEvent){
    event.preventDefault()

    const newTask ={
      content: taskText,
      id: Math.random() * 20,
      isCompleted: false
    }

    setTasks([...tasks, newTask])

    setTaskText('')
  }

  return (
    <>
      <form className={styles.formContent} onSubmit={handleCreateNewTask}>
        <input
          placeholder='Adiciona uma nova tarefa'
          value={taskText}
          onChange={e => setTaskText(e.target.value)}
        />

        <button type='submit'>
          Criar

          <PlusCircle size={20} />
        </button>
      </form>

      <Tasks
        onSelect={selectTask}
        tasks={tasks}
      />
    </>
  )
}