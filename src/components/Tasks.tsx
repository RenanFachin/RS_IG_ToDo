// COMPONENTS
import { ToDoListCard } from './ToDoListCard'

// ICONS
import { ClipboardText } from 'phosphor-react'

// INTERFACE
import { TaskProps } from './Form'

// CSS
import styles from './Tasks.module.css'

interface Props {
  tasks: TaskProps[];
  onSelect: (taskId: number) => void;
  onDelete: (taskId: number) => void;
}


export function Tasks({ tasks, onSelect, onDelete }: Props) {

  const tasksCount = tasks.length;
  const doneTasksCount = tasks.filter(
    (task: TaskProps) => task.isCompleted === true
  ).length;

  function onSelectTaskProps(taskId: number) {
    onSelect(taskId);
  }

  function onDeleteTaskProps(taskId: number) {
    onDelete(taskId);
  }

  return (
    <div className={styles.page_wrapper}>

      <section className={styles.content}>
        <div className={styles.summary}>
          <strong>Tarefas criadas</strong>
          <span>{tasksCount}</span>
        </div>

        <div className={styles.completed}>
          <strong>Conclúidas</strong>
          <span>{doneTasksCount} de {tasksCount}</span>
        </div>
      </section>


      <section className={styles.tasks}>

        {
          tasks.length === 0 ?
            (
              <div className={styles.placeholder}>
                <ClipboardText size={56} />

                <strong>Você ainda não tem tarefas cadastradas</strong>
                <p>Crie tarefas e organize seus itens a fazer</p>


              </div>
            )
            :
            (
              <div className={styles.toDoList}>

                {
                  tasks.map(task => {
                    return (
                      <ToDoListCard
                        key={task.id}
                        taskId={task.id}
                        content={task.content}
                        isFinished={task.isCompleted}
                        onSelect={onSelectTaskProps}
                        onDelete={onDeleteTaskProps}
                      />
                    )
                  })
                }

              </div>
            )
        }
      </section>
    </div>
  )
}