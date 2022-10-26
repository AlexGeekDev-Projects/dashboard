import { Fragment, useState } from "react";
import { Button, Col, Container, Form, Image, InputGroup, Row } from "react-bootstrap";
import { AiOutlineWifi } from "react-icons/ai";
import { FaBath, FaConciergeBell } from "react-icons/fa";
import { GiHotMeal, GiWashingMachine } from "react-icons/gi";
import { BiCoffeeTogo } from "react-icons/bi";
import { MdLocalLaundryService } from "react-icons/md";
import { useUiContext } from "../../context/uiContext";
import useForm from "../../hooks/useForm";

export const Rooms = () => {
  const { formData, setFormData } = useUiContext();
  const [showAddRom, setShowAddRom] = useState(false);
  const {
    handleCheckBox,
    handleInputChange,
    handleSelect,
    handleAddMultipleImgs,
    values,
    name,
    desc,
    urls,
    guests,
    guestsNumber,
    price,
  } = useForm({
    earlyCheckIn: false,
    breakfast: false,
    bathSet: false,
    wifi: false,
    coffee: false,
    washingMach: false,
    laundryService: false,
    name: "",
    desc: "",
    urls: "",
    guests: "",
    guestsNumber: "",
    price: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      rooms: { ...values },
    });
  };

  return (
    <Fragment>
      <Container className="m-3">
        {!showAddRom ? (
          <Row className="justify-content-center my-5">
            <Button
              variant="dark"
              style={{ color: "white", marginTop: 33, width: "50%" }}
              onClick={() => setShowAddRom(!showAddRom)}
            >
              Agregar habitación
            </Button>
          </Row>
        ) : (
          <Form>
            <Row className="justify-content-center">
              <Col>
                <Form.Group className="mb-4">
                  <Form.Label>Nombre de la habitación</Form.Label>
                  <Form.Control
                    name="name"
                    type="text"
                    placeholder="Ingresa el nombre"
                    value={name}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Descripción</Form.Label>
                  <Form.Control
                    name="desc"
                    as="textarea"
                    placeholder="Ingresa la descripción"
                    value={desc}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group id="boxUpload" className="mb-3 text-center">
                  <Button style={{ color: "white", marginTop: 33 }}>Agregar Imágenes</Button>
                  <Form.Control
                    id="imageUpload"
                    name="photo"
                    type="file"
                    placeholder="photo"
                    onChange={handleAddMultipleImgs}
                  />
                </Form.Group>
                {urls.map((photo, index) => {
                  return (
                    <Image key={index} width={100} height={100} src={photo} style={{ margin: 1, borderRadius: 10 }} />
                  );
                })}
                <Row>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>Número de huespedes</Form.Label>
                      <Form.Control
                        name="guests"
                        type="number"
                        placeholder="Ingresa el número"
                        value={guests}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3">
                      <Form.Label>Máx. Número de huespedes</Form.Label>
                      <Form.Control
                        name="guestsNumber"
                        type="number"
                        placeholder="Ingresa número"
                        value={guestsNumber}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group>
                  <Form.Label>Precio</Form.Label>
                  <Form.Control
                    name="price"
                    type="text"
                    placeholder="Ingresa el precio"
                    value={price}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Row className="mb-4">
                  <Form.Label>Tipo de hospedaje</Form.Label>
                  <Form.Group controlId="custom-select">
                    <Form.Control
                      as="select"
                      className="shadow"
                      style={{ width: "100%" }}
                      onChange={(e) => handleSelect(e, "lodgingType")}
                    >
                      <option value="room">Habitación</option>
                      <option value="room2">Habitación 2</option>
                      <option value="room3">Habitación 3</option>
                      <option value="room4">Habitación 4</option>
                    </Form.Control>
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Label>Tipo de hospedaje</Form.Label>
                  <Form.Group controlId="custom-select">
                    <Row className="mb-5">
                      <Col>
                        <InputGroup className="mb-4">
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
                        <InputGroup className="mb-4">
                          <Form.Check
                            aria-label="Checkbox for following text input"
                            onChange={(e) => handleCheckBox(e, "breakfast")}
                          />
                          <GiHotMeal size={30} className="ms-4 me-3 text-primary" />
                          <strong>Desayuno completo</strong>
                        </InputGroup>
                        <InputGroup className="mb-4">
                          <Form.Check
                            aria-label="Checkbox for following text input"
                            onChange={(e) => handleCheckBox(e, "bathSet")}
                          />
                          <FaBath size={30} className="ms-4 me-3 text-primary" />
                          <strong>Set de baño completo</strong>
                        </InputGroup>
                        <InputGroup className="mb-4">
                          <Form.Check
                            aria-label="Checkbox for following text input"
                            onChange={(e) => handleCheckBox(e, "wifi")}
                          />
                          <AiOutlineWifi size={30} className="ms-4 me-3 text-primary" />
                          <strong>Wifi</strong>
                        </InputGroup>
                        <InputGroup className="mb-4">
                          <Form.Check
                            aria-label="Checkbox for following text input"
                            onChange={(e) => handleCheckBox(e, "washingMach")}
                          />
                          <GiWashingMachine size={30} className="ms-4 me-3 text-primary" />
                          <strong>Lavadora</strong>
                        </InputGroup>
                        <InputGroup className="mb-4">
                          <Form.Check
                            aria-label="Checkbox for following text input"
                            onChange={(e) => handleCheckBox(e, "coffee")}
                          />
                          <BiCoffeeTogo size={30} className="ms-4 me-3 text-primary" />
                          <strong>Coffee point</strong>
                        </InputGroup>
                      </Col>
                      <Col>
                        <InputGroup className="mb-4">
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
                        <InputGroup className="mb-4">
                          <Form.Check
                            aria-label="Checkbox for following text input"
                            onChange={(e) => handleCheckBox(e, "breakfast")}
                          />
                          <GiHotMeal size={30} className="ms-4 me-3 text-primary" />
                          <strong>Desayuno completo</strong>
                        </InputGroup>
                        <InputGroup className="mb-4">
                          <Form.Check
                            aria-label="Checkbox for following text input"
                            onChange={(e) => handleCheckBox(e, "bathSet")}
                          />
                          <FaBath size={30} className="ms-4 me-3 text-primary" />
                          <strong>Set de baño completo</strong>
                        </InputGroup>
                        <InputGroup className="mb-4">
                          <Form.Check
                            aria-label="Checkbox for following text input"
                            onChange={(e) => handleCheckBox(e, "wifi")}
                          />
                          <AiOutlineWifi size={30} className="ms-4 me-3 text-primary" />
                          <strong>Wifi</strong>
                        </InputGroup>
                        <InputGroup className="mb-4">
                          <Form.Check
                            aria-label="Checkbox for following text input"
                            onChange={(e) => handleCheckBox(e, "laundryService")}
                          />
                          <MdLocalLaundryService size={30} className="ms-4 me-3 text-primary" />
                          <strong>Laudry Service</strong>
                        </InputGroup>
                        <InputGroup>
                          <Form.Check
                            aria-label="Checkbox for following text input"
                            onChange={(e) => handleCheckBox(e, "coffee")}
                          />
                          <BiCoffeeTogo size={30} className="ms-4 me-3 text-primary" />
                          <strong>Coffee point</strong>
                        </InputGroup>
                      </Col>
                    </Row>
                  </Form.Group>
                </Row>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col lg="3">
                <Button variant="dark" className="text-light w-100" onClick={handleSubmit}>
                  Actualizar cambios
                </Button>
              </Col>
            </Row>
          </Form>
        )}
      </Container>
    </Fragment>
  );
};
