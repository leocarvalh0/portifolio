import { Titulo as TituloEstilo } from './styles'

export type Props = {
  children: string
  fontSize?: number
}

function Titulo(props: Props) {
  return <TituloEstilo fontSize={props.fontSize}>{props.children}</TituloEstilo>
}

export default Titulo
