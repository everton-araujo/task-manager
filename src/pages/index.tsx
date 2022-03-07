import Head from "next/head";

import styles from './home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Task Manager</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.content}>
          <span>Olá, seja bem vindo! 🥰</span>
          <h1>Sua plataforma de <br />
            <span>gerenciamento</span> de projetos esta aqui
          </h1>
          <p>
            Vamos organizar o gerenciamento desses projetos aí? <br /> 
            que, convenhamos, sabemos que estão bagunçados
          </p>
        </section>

        <img src="/images/girl-coding.svg" alt="Girl coding" />
      </main>
    </>
  )
}
