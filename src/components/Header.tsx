// CSS
import styles from './Header.module.css'

// ASSETS
import toDoLogo from '../assets/Logo.svg'

export function Header(){
  return(
    <header className={styles.content}>
      <img src={toDoLogo} />
    </header>
  )
}