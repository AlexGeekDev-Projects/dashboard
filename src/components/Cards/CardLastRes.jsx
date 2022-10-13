import { Fragment, useEffect } from "react";
import { Card, Col, Image, Row } from "react-bootstrap";
import useFetch from "../../hooks/useFetch";
import { Loading } from "../Loading/Loading";

export const CardLastRes = () => {
  const { users, isLoading, handleUsers } = useFetch();

  useEffect(() => {
    handleUsers();
  }, []);

  return (
    <Fragment>
      {isLoading ? (
        <Loading />
      ) : (
        <Fragment>
          {users.map((user) => {
            return (
              <Card
                bg="light"
                key={user.name}
                text="dark"
                style={{ width: "18rem", marginInline: 10 }}
                className="mb-2"
              >
                <Card.Body>
                  <Row className="text-start">
                    <Col>
                      <Image className="imgProfile w-75" src={user.image} />
                    </Col>
                    <Col>
                      <Card.Title> {user.name} </Card.Title>
                      <Card.Text> {user.hotel} </Card.Text>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            );
          })}
        </Fragment>
      )}
    </Fragment>
  );
};
