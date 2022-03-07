import Link from 'next/link'
import { useState } from 'react'

import { SignInButton } from '../SignInButton'

import styles from './styles.module.scss'

export function Header() {
  const [isHomeActive, setIsHomeActive] = useState(true);
  const [isAboutActive, setIsAboutActive] = useState(false);

  function handleActiveTab(tab: string) {
    if (tab === 'home') {
      setIsHomeActive(true)
      setIsAboutActive(false)
    } else {
      setIsAboutActive(true)
      setIsHomeActive(false)
    }
  }

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.png" alt="task manager logo" />

        <nav>
          <Link href='/'>
            <a className={isHomeActive ? styles.active : ''} onClick={() => handleActiveTab('home')}>
              Home
            </a>
          </Link>
          <Link href='/about'>
            <a className={isAboutActive ? styles.active : ''} onClick={() => handleActiveTab('about')}>
              Sobre
            </a>
          </Link>
        </nav>

        <SignInButton />
      </div>
    </header>
  )
}
