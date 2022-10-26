import { Fragment } from "react";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import { useUiContext } from "../../context/uiContext";
import useForm from "../../hooks/useForm";

export const Description = () => {
  const { formData, setFormData } = useUiContext();
  const {
    handleInputChange,
    handleDirectValue,
    hotelName,
    checkIn,
    shortDesc,
    checkOut,
    longdesc,
    phone,
    phone2,
    email,
    website,
    handleAddMultipleImgs,
    values,
    urls,
  } = useForm({
    hotelName: "",
    checkIn: "",
    shortDesc: "",
    checkOut: "",
    longdesc: "",
    phone: "",
    phone2: "",
    email: "",
    website: "",
    images: [],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      description: { ...values },
    });
  };

  return (
    <Fragment>
      <Container fluid>
        <Row className="my-3">
          <Form onSubmit={handleSubmit}>
            <Row className="justify-content-center mb-4">
              <Col lg="5">
                <Form.Group>
                  <Form.Label>Nombre de hotel</Form.Label>
                  <Form.Control
                    name="hotelName"
                    type="name"
                    placeholder="Ingresa el nombre del hotel"
                    value={hotelName}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Descripción corta</Form.Label>
                  <Form.Control
                    name="shortDesc"
                    as="textarea"
                    placeholder="Ingresa una descripción corta"
                    value={shortDesc}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group className="text-start">
                  <Form.Label>Descripción larga</Form.Label>
                  <Form.Control
                    name="longdesc"
                    as="textarea"
                    placeholder="Ingresa una descripción larga"
                    value={longdesc}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Label>Teléfono</Form.Label>
                      <Form.Control
                        name="phone"
                        type="phone"
                        placeholder="Ingresa el teléfono"
                        value={phone}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>Teléfono 2</Form.Label>
                      <Form.Control
                        name="phone2"
                        type="phone"
                        placeholder="Ingresa el teléfono 2"
                        value={phone2}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group>
                      <Form.Label>E-mail</Form.Label>
                      <Form.Control
                        name="email"
                        type="email"
                        placeholder="Ingresa el correo electrónico"
                        value={email}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>Website</Form.Label>
                      <Form.Control
                        name="website"
                        type="url"
                        placeholder="Ingresa el sitio web"
                        value={website}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Label>Categoría Hotel</Form.Label>
                <ReactStars count={5} size={24} activeColor="#ffd700" onChange={(e) => handleDirectValue(e, "stars")} />
              </Col>
              <Col lg="5">
                <Form.Group>
                  <Form.Label>Horario Check In</Form.Label>
                  <Form.Control
                    name="checkIn"
                    type="date"
                    placeholder="Ingresa el check in"
                    value={checkIn}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Horario Check Out</Form.Label>
                  <Form.Control
                    name="checkOut"
                    type="date"
                    placeholder="Ingresa el check out"
                    value={checkOut}
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
