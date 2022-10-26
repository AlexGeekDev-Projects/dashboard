import React, { Fragment, useEffect } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { MdHotel } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { AiOutlineWifi, AiOutlineCoffee } from "react-icons/ai";
import useFetch from "../hooks/useFetch";
import { Loading } from "../components";
import { Link } from "react-router-dom";

export const Hotels = () => {
  const { handleRooms, rooms, isLoading } = useFetch();
  useEffect(() => {
    handleRooms();
  }, []);

  return (
    <Fragment>
      {isLoading ? (
        <Loading />
      ) : (
        <Fragment>
          <Container className="mt-3">
            <Row>
              <Col lg="1">
                <MdHotel size={50} />
              </Col>
              <Col lg="6">
                <h1>Hoteles</h1>
              </Col>
              <Col lg="3">
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Buscar"
                    className="me-2"
                    aria-label="Search"
                    style={{ height: 40 }}
                  />
                  <Button style={{ height: 40, color: "white" }} variant="primary">
                    Buscar
                  </Button>
                </Form>
              </Col>
              <Col>
                <Link to="/createHotels">
                  <Button style={{ height: 40, color: "white" }} variant="primary">
                    Crear Hotel
                  </Button>
                </Link>
              </Col>
            </Row>
            <Row>
              {rooms.length > 0 && (
                <Fragment>
                  {rooms.map((room) => {
                    return (
                      <Card style={{ width: "18rem", margin: 10 }} key={room.id}>
                        <Card.Img variant="top" src={room.url} width={50} height={150} className="my-3" />
                        <Card.Body className="text-center">
                          <Card.Title>Room Title</Card.Title>
                          <Card.Text>
                            <ImLocation2 /> {room.id}
                          </Card.Text>
                          <Card.Text>
                            <MdHotel /> 1 <GiForkKnifeSpoon /> 2 <AiOutlineWifi /> 5 <AiOutlineCoffee />
                          </Card.Text>
                          <Button className="text-light" variant="primary">
                            Ver más
                          </Button>
                        </Card.Body>
                      </Card>
                    );
                  })}
                </Fragment>
              )}
            </Row>
          </Container>
        </Fragment>
      )}
    </Fragment>
  );
};
