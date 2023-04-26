import { Header } from '../../components/Header'
import { Link } from 'react-router-dom'
import { Container, HomeForm, Main } from './styles'
import { FiLogIn, FiUsers } from 'react-icons/fi'

import HomeBgImg from '../../assets/home-bg-img.svg'

export default function Home() {
  return (
    <Container>
      <Header />

      <Main>
        <img className='home-bg-img' src={HomeBgImg} />

        <HomeForm>
          <div className='enter-section'>
            <h2>Entre como participante</h2>
            <input type='text' placeholder='Código da sala' />
            <button type='submit'>
              <FiLogIn className='icon' />
              Entrar na sala
            </button>
          </div>

          <div className='diviser'>
            <span /> <p>ou</p> <span />
          </div>

          <div className='create-section'>
            <h2>Crie sua própria sala, de forma fácil</h2>
            <Link to='/create-room'>
              <FiUsers className='icon' />
              Criar sala
            </Link>
          </div>
        </HomeForm>
      </Main>
    </Container>
  )
}
