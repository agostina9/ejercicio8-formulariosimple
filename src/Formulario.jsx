import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const Formulario = () => {
  const emailRegExp = new RegExp(
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
  );
  const dniRegExp = new RegExp(/^[0-9]+([.][0-9]+)?$/);

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [dni, setDni] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre.trim()=== '' || apellido.trim()=== '' || !dniRegExp.test(dni) || !emailRegExp.test(email)) {
      alert("Corregir datos");
      return;
    } else {
      setNombre("");
      setApellido("");
      setDni("")
      setEmail("");
      alert("Datos enviados");
    }
  };

  return (
    <Form onSubmit={handleSubmit} className='bg p-5'>
      <Form.Group className="mb-3" >
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          onChange={(e) => setNombre(e.target.value)}
          value={nombre}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Apellido</Form.Label>
        <Form.Control
          type="text"
          onChange={(e) => setApellido(e.target.value)}
          value={apellido}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>DNI</Form.Label>
        <Form.Control
          type="number"
          onChange={(e) => setDni(e.target.value)}
          value={dni}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
  );
};

export default Formulario;