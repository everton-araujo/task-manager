import { SignInButton } from '../SignInButton'

import styles from './styles.module.scss'

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.png" alt="task manager logo" />

        <nav>
          <a className={styles.active}>Home</a>
          <a>Sobre</a>
        </nav>

        <SignInButton />
      </div>
    </header>
  )
}