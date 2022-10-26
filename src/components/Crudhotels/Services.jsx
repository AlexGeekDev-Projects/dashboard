import { Fragment } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { FaConciergeBell } from "react-icons/fa";
import { GiHotMeal } from "react-icons/gi";
import { FaBath } from "react-icons/fa";
import { AiOutlineWifi } from "react-icons/ai";
import { useUiContext } from "../../context/uiContext";
import useForm from "../../hooks/useForm";

export const Services = () => {
  const { formData, setFormData } = useUiContext();
  const { handleCheckBox, values } = useForm({
    bathSet: false,
    bathSeth2: false,
    breakfast: false,
    breakfast2: false,
    earlyCheckIn: false,
    earlyCheckIn2: false,
    wifi: false,
    wifi2: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      services: { ...values },
    });
  };
  return (
    <Fragment>
      <Container className="m-5">
        <Row className="mb-5">
          <Col>
            <InputGroup className="mb-3">
              <Form.Check
                aria-label="Checkbox for following text input"
                onChange={(e) => handleCheckBox(e, "earlyCheckIn")}
              />
              <FaConciergeBell
                size={30}
                className="ms-4 me-3 text-primary"
                onChange={(e) => handleCheckBox(e, "earlyCheckIn")}
              />
              <strong>Early check In</strong>
            </InputGroup>
          </Col>
          <Col>
            <InputGroup className="mb-3">
              <Form.Check
                aria-label="Checkbox for following text input"
                onChange={(e) => handleCheckBox(e, "breakfast")}
              />
              <GiHotMeal size={30} className="ms-4 me-3 text-primary" />
              <strong>Desayuno completo</strong>
            </InputGroup>
          </Col>
          <Col>
            <InputGroup className="mb-3">
              <Form.Check
                aria-label="Checkbox for following text input"
                onChange={(e) => handleCheckBox(e, "bathSet")}
              />
              <FaBath size={30} className="ms-4 me-3 text-primary" />
              <strong>Set de baño completo</strong>
            </InputGroup>
          </Col>
          <Col>
            <InputGroup className="mb-3">
              <Form.Check aria-label="Checkbox for following text input" onChange={(e) => handleCheckBox(e, "wifi")} />
              <AiOutlineWifi size={30} className="ms-4 me-3 text-primary" />
              <strong>Wifi</strong>
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <InputGroup className="mb-3">
              <Form.Check
                aria-label="Checkbox for following text input"
                onChange={(e) => handleCheckBox(e, "earlyCheckIn2")}
              />
              <FaConciergeBell size={30} className="ms-4 me-3 text-primary" />
              <strong>Early check In</strong>
            </InputGroup>
          </Col>
          <Col>
            <InputGroup className="mb-3">
              <Form.Check
                aria-label="Checkbox for following text input"
                onChange={(e) => handleCheckBox(e, "breakfast2")}
              />
              <GiHotMeal size={30} className="ms-4 me-3 text-primary" />
              <strong>Desayuno completo</strong>
            </InputGroup>
          </Col>
          <Col>
            <InputGroup className="mb-3">
              <Form.Check
                aria-label="Checkbox for following text input"
                onChange={(e) => handleCheckBox(e, "bathSeth2")}
              />
              <FaBath size={30} className="ms-4 me-3 text-primary" />
              <strong>Set de baño completo</strong>
            </InputGroup>
          </Col>
          <Col>
            <InputGroup className="mb-3">
              <Form.Check aria-label="Checkbox for following text input" onChange={(e) => handleCheckBox(e, "wifi2")} />
              <AiOutlineWifi size={30} className="ms-4 me-3 text-primary" />
              <strong>Wifi</strong>
            </InputGroup>
          </Col>
        </Row>
        <Row className="justify-content-center mt-5">
          <Col lg="3">
            <Button variant="dark" className="text-light w-100" onClick={handleSubmit}>
              Actualizar cambios
            </Button>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
