import { Fragment } from "react";
import { Container, Row } from "react-bootstrap";
import ReactLoading from "react-loading";
import { colors } from "../../sass/Colors";

export const Loading = () => {
  return (
    <Fragment>
      <Container>
        <Row className="justify-content-center text-center align-items-center" style={{ height: "100vh" }}>
          <ReactLoading type="bars" color={colors.primary} height={"20%"} width={"20%"} />
          <h1 className="text-primary fw-bolder">Cargando</h1>
        </Row>
      </Container>
    </Fragment>
  );
};
