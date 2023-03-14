import { PlusCircle } from 'phosphor-react'

import styles from './Form.module.css'

export function Form() {
  return (
    <form className={styles.formContent}>
      <input
        placeholder='Adiciona uma nova tarefa'
      />

      <button type='submit'>
        Criar

        <PlusCircle size={20}/>
      </button>
    </form>
  )
}