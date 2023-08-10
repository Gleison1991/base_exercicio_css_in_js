import styles from './Hero.module.css'
import { Formulario, FormDiv, HeroTitle } from './styles'

const Hero = () => (
  <Formulario className={styles.form}>
    <FormDiv className="container">
      <HeroTitle className={styles.heroTitle}>
        As melhores vagas para tecnologia, design e artes visuais.
      </HeroTitle>
    </FormDiv>
  </Formulario>
)

export default Hero
