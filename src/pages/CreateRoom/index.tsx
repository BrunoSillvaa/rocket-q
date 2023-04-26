import { Container, HomeForm, Main } from './styes'
import { Header } from '../../components/Header'
import { FiUsers } from 'react-icons/fi'

import HomeBgImg from '../../assets/home-bg-img.svg'

export default function Home() {
  return (
    <Container>
      <Header />

      <Main>
        <img className='home-bg-img' src={HomeBgImg} />

        <HomeForm>
          <h2>Crie sua própria sala</h2>
          <input type="text" placeholder='Insira uma senha' />
          <button>
            <FiUsers />
            Criar sala
          </button>
        </HomeForm>
      </Main>
    </Container>
  )
}
