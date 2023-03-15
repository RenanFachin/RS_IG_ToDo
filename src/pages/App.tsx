import { Header } from '../components/Header'
import { Form } from '../components/Form'

import styles from './App.module.css'
import { Tasks } from '../components/Tasks'

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