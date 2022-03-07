import styles from './styles.module.scss'

interface RepoProps {
  repo: {
    name: string;
    subscribers_count: string;
    open_issues: string;
    stargazers_count: string;
    forks: string;
  }
}

export default function About({ repo }: RepoProps) {
  return (
    <main className={styles.content}>
      <h1>Sobre nós</h1>
      <h3>Por que nascemos</h3>
      <p>
        Nascemos com o intuito em ajudar na organização do gerenciamento de projetos.
      </p>

      <p>
        E aplicar conhecimentos em Next.js <br />
        Esta página será utilizada para explicar como o projeto funciona. 
      </p>

      <h2>Questões técnicas</h2>

      <h3>Visão macro do fluxo</h3>
      <img src="./images/macro-vision.png" alt="Visão macro do fluxo do projeto. Home para autenticação github para salvar dados no db para mostrar conteúdo recebendo informações do CMS" />

      <h3>Por que só temos login social?</h3>
      <p>
        Porquê a princípio a aplicação é <em>Serverless</em>, portanto a validação se faz por OAuth. No momento a conta escolhida foi do github. <br />
        Posteriormente ganhará autenticação com Google e ao longo que o projeto cresça, terá uma autenticação própria quando um servidor for construído.
      </p>

      <section>
        <h3>Gostaria de contribuir?</h3>
        <p>
          O projeto é open source e o repositório do github se encontra
          <a href={`https://github.com/everton-araujo/${repo.name}`} target="_blank" rel="noreferrer"> aqui</a>.
        </p>

        <p>
          No momento possuímos <br />
          Contribuintes: {repo.subscribers_count} <br />
          Issues abertas: {repo.open_issues} <br />
          Estrelas: {repo.stargazers_count} <br />
          Forks: {repo.forks} <br />
        </p>

        <p>
          Esses valores foram pegos da api do github e são renderizados de forma estática utilizando o <em>getStaticProps</em>. <br />
          Com atualização a cada 24 horas. <br />
          Por falar em renderização de forma estática,
          <a href="https://www.notion.so/SSG-Static-Site-Generation-cef59337f3ef4546902ae09e0e2ba0e8" target="_blank" rel="noreferrer"> aqui </a> 
          tem um post que fiz no notion enquanto estudava sobre SSG (Static Site Generation).
        </p>
      </section>
    </main>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://api.github.com/repos/everton-araujo/task-manager')
  const repo = await res.json()

  return {
    props: {
      repo
    },
    revalidate: 60 * 60 * 24 // 24 hours
  }
}
