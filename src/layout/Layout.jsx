import { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { NavBar } from "./NavBar";
import { Sidebar } from "./Sidebar";
import { useUiContext } from "../context/uiContext";

export const Layout = ({ children }) => {
  const { active } = useUiContext();
  const Render = () => {
    if (active) {
      return (
        <Fragment>
          <NavBar />
          <Container fluid>
            <Row>
              <Col lg="10">{children}</Col>
              <Col>
                <Sidebar />
              </Col>
            </Row>
          </Container>
        </Fragment>
      );
    } else {
      return <Fragment>{children}</Fragment>;
    }
  };

  return <Render />;
};
