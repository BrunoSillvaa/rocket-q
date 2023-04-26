import { Container } from './styles';
import Logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <Container>
      <Link to='/'>
        <img className='logo-img' src={Logo}/>
      </Link>
    </Container>
  )
}