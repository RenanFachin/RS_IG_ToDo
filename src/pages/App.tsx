import { Header } from '../components/Header'
import { Form } from '../components/Form'

import { Tasks } from '../components/Tasks'

import styles from './App.module.css'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.pageWrapper}>
        <div className={styles.limits}>
          <Form />

          <main>
            <Tasks />
          </main>
        </div>
      </div>
    </div>
  )
}