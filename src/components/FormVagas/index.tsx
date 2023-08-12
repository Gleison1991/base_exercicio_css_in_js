import { FormEvent, useState } from 'react'

import styles from './FormVagas.module.css'

import { FormularioVagas, Pesquisar, Campo } from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <FormularioVagas className={styles.form} onSubmit={aoEnviarForm}>
      <Campo
        className={styles.campo}
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <Pesquisar className={styles.btnPesquisar} type="submit">
        Pesquisar
      </Pesquisar>
    </FormularioVagas>
  )
}

export default FormVagas
