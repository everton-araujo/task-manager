import { FormEvent, useState } from "react"
import axios from 'axios'

export default function Posts() {
  const [email, setEmail] = useState('');

  function handleAddNewPost(event: FormEvent) {
    event.preventDefault();

    axios.post('/api/posts', {
      user: 'Everton',
      message: email
    })
  }

  return (
    <main>
      <form
        onSubmit={handleAddNewPost}
      >
        <img src="/rocketseat.svg" alt="Rocketseat" />
  
        <h1>
          Assine a newsletter da Rocketseat e receba os melhores conteúdos sobre programação!
        </h1>
  
        <input
          placeholder="Seu melhor e-mail"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
  
        <button
          type="submit"
        >
          INSCREVER
        </button>
      </form>
    </main>
  )
}
