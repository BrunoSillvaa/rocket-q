import { Header } from "../HomeWrapper/styles"
import { Container, FormWrapper } from "./styles"

export default () => {
  return (
    <Container>
      <FormWrapper>
        <input type="number" placeholder="Codigo da sala"/>
        <button>Entrar na sala</button>
      </FormWrapper>
      <div className="line">
        <span></span>
        <p>ou</p>
        <span></span>
      </div>
      <div className="create-room">
        <h2>Crie sua propria sala, de forma facil</h2>
        <button>Criar sala</button>
      </div>
    </Container>
  )
}