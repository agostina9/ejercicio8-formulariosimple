import {Button, Form} from 'react-bootstrap';

const Formulario = () => {
    return (
        <Form className='bg p-4'>
      <Form.Group className="mb-3">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Ingresar nombre" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Apellido</Form.Label>
        <Form.Control type="text" placeholder="Ingresar apellido" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>DNI</Form.Label>
        <Form.Control type="number" placeholder="Ingresar DNI" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Ingresar email" />
      </Form.Group>
      <Button variant="primary" type="submit" className='justify-content-center'>
       Enviar
      </Button>
    </Form>
    );
};

export default Formulario;