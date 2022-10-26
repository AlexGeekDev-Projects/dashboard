import { Fragment } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useUiContext } from "../../context/uiContext";
import useForm from "../../hooks/useForm";

export const Address = () => {
  const { formData, setFormData } = useUiContext();
  const { handleInputChange, country, city, code, address, address2, values } = useForm({
    country: "",
    city: "",
    code: "",
    address: "",
    address2: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ ...formData, address: { ...values } });
  };

  return (
    <Fragment>
      <Container fluid>
        <Row className="my-3">
          <Form onSubmit={handleSubmit}>
            <Row className="justify-content-center mb-4">
              <Col lg="3">
                <Form.Group>
                  <Form.Label>País</Form.Label>
                  <Form.Control
                    name="country"
                    type="text"
                    placeholder="Ingresa el país"
                    value={country}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
              <Col lg="3">
                <Form.Group>
                  <Form.Label>Ciudad</Form.Label>
                  <Form.Control
                    name="city"
                    type="text"
                    placeholder="Ingresa la ciudad"
                    value={city}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
              <Col lg="3">
                <Form.Group>
                  <Form.Label>Código Postal</Form.Label>
                  <Form.Control
                    name="code"
                    type="text"
                    placeholder="Ingresa el código postal"
                    value={code}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="justify-content-center mb-5">
              <Col lg="4">
                <Form.Group>
                  <Form.Label>Dirección 1</Form.Label>
                  <Form.Control
                    name="address"
                    as="textarea"
                    placeholder="Ingresa la dirección"
                    value={address}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
              <Col lg="4">
                <Form.Group>
                  <Form.Label>Dirección 2</Form.Label>
                  <Form.Control
                    name="address2"
                    as="textarea"
                    placeholder="Ingresa la dirección"
                    value={address2}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col lg="3">
                <Button type="submit" variant="dark" className="text-light w-100">
                  Actualizar cambios
                </Button>
              </Col>
            </Row>
          </Form>
        </Row>
      </Container>
    </Fragment>
  );
};
