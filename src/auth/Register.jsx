import { Fragment, useEffect } from "react";
import { Button, Col, Container, Image, Row, Form, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useUiContext } from "../context/uiContext";
import useForm from "../hooks/useForm";
import useRegister from "../hooks/useRegister";

export const Register = () => {
  const { values, name, email, password, phone, userName, handleInputChange, handleAddImage } = useForm({
    name: "",
    email: "",
    password: "",
    phone: "",
    userName: "",
  });
  const { emailReg } = useRegister();
  const { loading, active } = useUiContext();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const path = `admins/${email}/profile/${name}`;
    const nameDb = "admins";
    emailReg(values, path, nameDb);
  };

  useEffect(() => {
    if (active) {
      navigate("/");
    }
  }, []);

  return (
    <Fragment>
      <Container fluid>
        <Row className="my-4">
          <Col>
            <Button className="mt-3" variant="secondary" onClick={() => navigate("/login")}>
              Regresar
            </Button>
          </Col>
          <Col md={{ span: 5, offset: 3 }}>
            <p className="text-primary" style={{ fontWeight: "bolder", fontSize: 40, marginBottom: 60 }}>
              Registro Perfil de usuarios
            </p>
          </Col>
        </Row>
        <Row className="my-5">
          <Container>
            <Form className="justify-content-center text-center" onSubmit={handleSubmit}>
              <Row>
                <Col className="px-5">
                  <Form.Group className="mb-3">
                    <Form.Label className="text-primary" style={{ fontWeight: "bolder" }}>
                      Nombre Completo
                    </Form.Label>
                    <Form.Control
                      name="name"
                      type="name"
                      placeholder="Ingresa tu nombre completo"
                      value={name}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </Col>
                <Col className="px-5">
                  <Form.Group className="mb-3">
                    <Form.Label className="text-primary" style={{ fontWeight: "bolder" }}>
                      Nombre de Usuario
                    </Form.Label>
                    <Form.Control
                      name="userName"
                      type="name"
                      placeholder="Ingresa tu nombre de usuario"
                      value={userName}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col className="px-5">
                  <Form.Group className="mb-3">
                    <Form.Label className="text-primary" style={{ fontWeight: "bolder" }}>
                      Correo electrónico
                    </Form.Label>
                    <Form.Control
                      name="email"
                      type="email"
                      placeholder="Ingresa tu correo electrónico"
                      value={email}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </Col>
                <Col className="px-5">
                  <Form.Group className="mb-3">
                    <Form.Label className="text-primary" style={{ fontWeight: "bolder" }}>
                      Contraseña
                    </Form.Label>
                    <Form.Control
                      name="password"
                      type="password"
                      placeholder="Ingresa tu contraseña"
                      value={password}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col className="px-5">
                  <Form.Group className="mb-3">
                    <Form.Label className="text-primary" style={{ fontWeight: "bolder" }}>
                      Teléfono
                    </Form.Label>
                    <Form.Control
                      name="phone"
                      type="tel"
                      placeholder="Ingresa tu teléfono"
                      value={phone}
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </Col>
                <Col className="px-5">
                  <Form.Group id="boxUpload" className="mb-3">
                    <Button style={{ color: "white", marginTop: 33 }}>Elige una foto de perfil</Button>
                    <Form.Control
                      id="imageUpload"
                      name="photo"
                      type="file"
                      placeholder="photo"
                      onChange={handleAddImage}
                    />
                  </Form.Group>
                  <Image className="imgProfile" src={values.url} width={100} height={100} />
                </Col>
              </Row>
              <Row></Row>
              <Row className="px-5 mt-3 justify-content-center">
                {!loading ? (
                  <Button type="submit" style={{ color: "white", marginTop: 50 }}>
                    Enviar
                  </Button>
                ) : (
                  <Spinner animation="border" variant="primary" />
                )}
              </Row>
            </Form>
          </Container>
        </Row>
      </Container>
    </Fragment>
  );
};
