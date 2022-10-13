import { Fragment, useEffect } from "react";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo/logo.png";
import { useUiContext } from "../context/uiContext";
import useForm from "../hooks/useForm";
import useLogin from "../hooks/useLogin";

export const Login = () => {
  const { handleInputChange, email, password } = useForm({
    email: "",
    password: "",
  });
  const { login } = useLogin();
  const navigate = useNavigate();
  const { active } = useUiContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  useEffect(() => {
    if (active) {
      navigate("/");
    }
  }, []);

  return (
    <Fragment>
      <Container fluid className="loginContainer">
        <Row>
          <Col className="rowLoginHero p-5">
            <h1 className="titleLoginHero">Bienvenido a Ganga Hoteles Dashboard</h1>
            <Image src={logo} className="rounded mx-auto d-block logoHero" />
          </Col>
          <Col className="rowLogin">
            <h1 className="titleLogin">Inicia Sesión</h1>
            <Form className="justify-content-center text-center" onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label style={{ color: "white", fontWeight: "bolder" }}>
                  Dirección de correo electrónico
                </Form.Label>
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label style={{ color: "white", fontWeight: "bolder" }}>Contraseña</Form.Label>
                <Form.Control
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Link to={"/register"}>
                  <Form.Text style={{ color: "white" }}>Crear una Cuenta</Form.Text>
                </Link>
              </Form.Group>
              <Button variant="secondary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
