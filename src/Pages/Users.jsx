import { Fragment, useEffect } from "react";
import { Button, Col, Container, Form, Image, Row, Table } from "react-bootstrap";
import { HiUsers } from "react-icons/hi";
import { Loading } from "../components";
import useFetch from "../hooks/useFetch";

export const Users = () => {
  const { users, isLoading, handleUsers } = useFetch();

  useEffect(() => {
    handleUsers();
  }, []);
  return (
    <Container className="mt-3">
      <Row>
        <Col lg="1">
          <HiUsers size={50} />
        </Col>
        <Col lg="6">
          <h1>Usuarios</h1>
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
          <Button style={{ height: 40, color: "white" }} variant="primary">
            Crear Hotel
          </Button>
        </Col>
      </Row>
      <Row>
        {isLoading ? (
          <Loading />
        ) : (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Fecha de Registro</th>
                <th>Reservaciones</th>
                <th>Total de pagos</th>
                <th>Email</th>
                <th>Estatus</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => {
                return (
                  <tr key={`${user.id}`} className="text-center">
                    <td className="text-start">
                      <Image src={user.image} width={50} height={50} className="imgProfile me-3" />
                      <strong className="text-primary"> {user.name} </strong>
                    </td>
                    <td> {user.date} </td>
                    <td> {user.hotel} </td>
                    <td> {user.age} </td>
                    <td>{user.email} </td>
                    <td>
                      {user.status === null ? (
                        <Button variant="secondary">Suspendido</Button>
                      ) : (
                        <Button className="text-light">En línea</Button>
                      )}{" "}
                    </td>
                    <td className="fs-6 fw-bolder"> ... </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        )}
      </Row>
    </Container>
  );
};
