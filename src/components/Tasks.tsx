import { ClipboardText } from 'phosphor-react'

import styles from './Tasks.module.css'

export function Tasks() {
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
        <div className={styles.placeholder}>
          <ClipboardText size={56}/>

          <strong>Você ainda não tem tarefas cadastradas</strong>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      </section>
    </div>
  )
}