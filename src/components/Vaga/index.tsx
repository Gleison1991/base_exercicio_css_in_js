import styles from './Vaga.module.css'
import { Vagas, VagaTitulo, VagaLink } from './styles'

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const Vaga = (props: Props) => (
  <Vagas className={styles.vaga}>
    <VagaTitulo className={styles.vagaTitulo}>{props.titulo}</VagaTitulo>
    <ul>
      <li>Localizacao: {props.localizacao}</li>
      <li>Senioridade: {props.nivel}</li>
      <li>Tipo de contratacao: {props.modalidade}</li>
      <li>
        Salário: {props.salarioMin} - {props.salarioMax}
      </li>
      <li>Requisitos: {props.requisitos.join(', ')}</li>
    </ul>
    <VagaLink className={styles.vagaLink} href="#">
      Ver detalhes e candidatar-se
    </VagaLink>
  </Vagas>
)

export default Vaga
