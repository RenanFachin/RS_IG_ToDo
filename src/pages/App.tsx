import { Header } from '../components/Header'
import { Form } from '../components/Form'
import styles from './App.module.css'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.pageWrapper}>
        <div className={styles.limits}>
          <Form />
        </div>
      </div>
    </div>
  )
}