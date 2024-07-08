import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'

import { Descricao, BotaoTema, SideBarContainer } from './styles'

function Sidebar() {
  return (
    <aside>
      <SideBarContainer>
        <Avatar />
        <Titulo fontSize={20}>Leonardo Carvalho</Titulo>
        <Paragrafo tipo="secundario" fontSize={16}>
          leocarvalh0
        </Paragrafo>
        <Descricao tipo="principal" fontSize={12}>
          Engenheiro Front-end
        </Descricao>
        <BotaoTema>Trocar tema</BotaoTema>
      </SideBarContainer>
    </aside>
  )
}

export default Sidebar
