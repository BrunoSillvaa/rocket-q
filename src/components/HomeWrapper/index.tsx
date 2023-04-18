import { Container, Header } from "./styles"

export default ({children}: any) => {
  return (
    <Container>
      <Header><img src="logo.svg" /></Header>
      <img className="bg-img" src="home-bg-img.svg" />
      {children}
    </Container>
  )
}