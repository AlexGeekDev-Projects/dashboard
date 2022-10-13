import React, { Fragment } from "react";
import { Button, Container, Form, Image, Nav, Navbar } from "react-bootstrap";
import { useAdminContext } from "../context/adminContext";
import useLogout from "../hooks/useLogout";
import { useUiContext } from "../context/uiContext";
import { Link } from "react-router-dom";
import logo from "../assets/logo/logo.png";
import { AiFillDashboard } from "react-icons/ai";
import { BiHotel, BiPackage } from "react-icons/bi";
import { HiUsers } from "react-icons/hi";
import { FcStatistics } from "react-icons/fc";

export const NavBar = () => {
  const { adminDb } = useAdminContext();
  const { logout } = useLogout();
  const { active } = useUiContext();

  return (
    <Fragment>
      <Navbar bg="primary" variant="dark">
        <Container fluid>
          <Navbar.Brand>
            <Link to="/">
              <Image className="rounded float-left" src={logo} width={150} />
            </Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/" className="mx-4 mt-2 text-center">
              <strong className="text-light">
                <AiFillDashboard size={30} className="me-1" />
                Dashboard
              </strong>
            </Link>
            <Link to="/hotels" className="mx-4 mt-2 text-center">
              <strong className="text-light">
                <BiHotel size={30} className="me-1" />
                Hoteles
              </strong>
            </Link>
            <Link to="/packages" className="mx-4 mt-2 text-center">
              <strong className="text-light">
                <BiPackage size={30} className="me-1" />
                Paquetes
              </strong>
            </Link>
            <Link to="/users" className="mx-4 mt-2 text-center">
              <strong className="text-light">
                <HiUsers size={30} className="me-1" />
                Usuarios
              </strong>
            </Link>
            <Link to="/statistics" className="mx-4 mt-2 text-center">
              <strong className="text-light">
                <FcStatistics size={30} className="me-1" />
                Estadisticas
              </strong>
            </Link>
            <Form className="d-flex mt-2">
              <Form.Control
                type="search"
                placeholder="Buscar"
                className="me-2"
                aria-label="Search"
                style={{ height: 40 }}
              />
              <Button style={{ height: 40 }} variant="dark">
                Buscar
              </Button>
            </Form>
            {active && (
              <Link to="/profile" className="mx-3 mt-2 text-center">
                <strong className="text-light"> {adminDb.name} </strong>
              </Link>
            )}
            {active && (
              <Link to="/profile">
                <Image className="imgProfile mt-2 mx-2" src={adminDb.photo} width={40} />
              </Link>
            )}
            <Button style={{ height: 40 }} variant="secondary" className="mx-2 mt-2" onClick={logout}>
              Logout
            </Button>
          </Nav>
        </Container>
      </Navbar>
    </Fragment>
  );
};
