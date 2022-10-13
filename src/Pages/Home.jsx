import { Fragment, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { BsFillBookmarksFill, BsFillCalendarCheckFill } from "react-icons/bs";
import { ImExit, ImEnter } from "react-icons/im";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { CardLastRes, Chart } from "../components";

export const Home = () => {
  const [value, onChange] = useState(new Date());

  return (
    <Fragment>
      <Container className="mt-3" fluid>
        <Row className="justify-content-center">
          <Col>
            <Card bg="secondary" text="white" style={{ width: "14rem", height: "8rem" }} className="mb-5 mx-3">
              <Card.Body>
                <Row>
                  <Col>
                    <Card.Title style={{ fontWeight: "bolder", fontSize: "2rem" }}> 85 </Card.Title>
                    <Card.Text>Nuevas Reservaciones</Card.Text>
                  </Col>
                  <Col className="text-end">
                    <BsFillBookmarksFill size={50} fontVariant="primary" />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card bg="primary" text="white" style={{ width: "14rem", height: "8rem" }} className="mb-5 mx-3">
              <Card.Body>
                <Row>
                  <Col>
                    <Card.Title style={{ fontWeight: "bolder", fontSize: "2rem" }}> 46 </Card.Title>
                    <Card.Text>Hoteles</Card.Text>
                  </Col>
                  <Col className="text-end">
                    <BsFillCalendarCheckFill size={50} />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card bg="secondary" text="white" style={{ width: "14rem", height: "8rem" }} className="mb-5 mx-3">
              <Card.Body>
                <Row>
                  <Col>
                    <Card.Title style={{ fontWeight: "bolder", fontSize: "2rem" }}> 68 </Card.Title>
                    <Card.Text>Check Out</Card.Text>
                  </Col>
                  <Col className="text-end">
                    <ImExit size={50} />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card bg="primary" text="white" style={{ width: "14rem", height: "8rem" }} className="mb-5 mx-3">
              <Card.Body>
                <Row>
                  <Col>
                    <Card.Title style={{ fontWeight: "bolder", fontSize: "2rem" }}> 15 </Card.Title>
                    <Card.Text>Check In</Card.Text>
                  </Col>
                  <Col className="text-end">
                    <ImEnter size={50} />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="justify-content-center mb-5">
          <Chart />
        </Row>
        <Row className="text-center">
          <Col lg="3">
            <h2 className="text-primary">Calendario</h2>
            <Calendar onChange={onChange} value={value} />
          </Col>
          <Col>
            <Row>
              <Col>
                <h2 className="text-primary">Ultimas Reservaciones</h2>
              </Col>
            </Row>
            <Row>
              <CardLastRes />
            </Row>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};
