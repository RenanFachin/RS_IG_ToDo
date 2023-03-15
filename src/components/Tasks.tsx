// COMPONENTS
import { ToDoListCard } from './ToDoListCard'

// ICONS
import { ClipboardText } from 'phosphor-react'

import { TaskProps } from './Form'

// CSS
import styles from './Tasks.module.css'

interface Props {
  tasks: TaskProps[];
  onSelect: (taskId: number) => void;
}


export function Tasks({ tasks, onSelect }: Props) {
  
  function onSelectTaskProps(taskId: number) {
    onSelect(taskId);
  }

  return (
    <div className={styles.page_wrapper}>

      <section className={styles.content}>
        <div className={styles.summary}>
          <strong>Tarefas criadas</strong>
          <span>0</span>
        </div>

        <div className={styles.completed}>
          <strong>Conclúidas</strong>
          <span>0</span>
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