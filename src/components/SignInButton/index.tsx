import { FaGithub } from 'react-icons/fa'
import { signIn, signOut, useSession } from 'next-auth/react'

import styles from './styles.module.scss'

export function SignInButton() {
  const { data: session } = useSession()

  return session ? (
    <button
      className={styles.signInButton}
      type='button'
      onClick={() => signOut()}
    >
      <FaGithub />
      {session.user.name}
    </button>
  ) : (
    <button
      className={styles.signInButton}
      type='button'
      onClick={() => signIn('github')}
    >
      <FaGithub />
      Entrar com github
    </button>
  )
}
