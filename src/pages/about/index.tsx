import styles from './styles.module.scss'

export default function About() {
  return (
    <main className={styles.content}>
      <h1>Sobre nós</h1>
      <h3>Porque nascemos</h3>
      <p>
        Nascemos com o intuito em ajudar na organização do gerenciamento de projetos

      </p>

      <h2>Questões técnicas</h2>
      <h3>Porque só temos login social</h3>
      <p>
        A principio a página foi construída sem back-end, portanto a validação se faz por OAuth e por enquanto a conta escolhida foi github. <br />
        Posteriormente ganhará autenticação com Google e ao longo que o projeto crescer, terá uma autenticação própria quando um servidor back-end for construído.
      </p>

      <h3>Gostaria de contribuir?</h3>
      <p>
        O projeto é open source e o repositório do github se encontra
        <a href="https://github.com/everton-araujo/task-manager" target="_blank" rel="noreferrer"> aqui</a>.
      </p>
    </main>
  )
}
