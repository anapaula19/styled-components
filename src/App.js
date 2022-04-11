
import { Container, Heade, Titulo, BemVindo } from './styled';

function App() {
  return (
    <Container>
      <Heade>
        <Titulo>Projeto Styled</Titulo>
      </Heade>

      <BemVindo cor='ff00ff' tamanho={50}>Bem vindo ao sistema</BemVindo>
    </Container>
  );
}

export default App;

/*
<div className="container">
  <header className="header">
    <a className="titulo">Projeto Styled</a>
  </header>
  <h1>Bem vindo ao Sistema </h1>
</div>
*/