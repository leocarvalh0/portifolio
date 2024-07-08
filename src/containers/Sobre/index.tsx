import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

function Sobre() {
  return (
    <section>
      <Titulo fontSize={16}>Sobre mim</Titulo>
      <Paragrafo tipo="principal">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio hic
        libero doloribus consequatur, tempore id dolore nesciunt expedita
        officiis nisi? Vitae dignissimos tempore voluptate, blanditiis aliquam
        iste ducimus enim adipisci.
      </Paragrafo>
      <GithubSecao>
        <img src="https://github-readme-stats.vercel.app/api?username=leocarvalh0&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=leocarvalh0&layout=compact&langs_count=7&theme=dracula" />
      </GithubSecao>
    </section>
  )
}

export default Sobre
