import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap';
import Formulario from './Formulario';
import './style.css'

function App() {
  return (
    <Container>
      <h1 className='text-center bg-primary text-light p-3 mt-5'>Formulario</h1>
      <Formulario></Formulario>
     </Container>
    
  );
}

export default App;
