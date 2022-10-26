import { Fragment, useState } from "react";
import { Button, Container, Row, Tab, Tabs } from "react-bootstrap";
import { Address } from "./Address";
import { Description } from "./Description";
import { Rooms } from "./Rooms";
import { Services } from "./Services";
import { RiHotelFill } from "react-icons/ri";
import { ImLocation2 } from "react-icons/im";
import { AiOutlineWifi } from "react-icons/ai";
import { TbHotelService } from "react-icons/tb";
import { useUiContext } from "../../context/uiContext";

export const CrudNavbar = () => {
  const [tabKey, initTabKey] = useState("one");
  const { formData } = useUiContext();

  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <Fragment>
      <Container>
        <Row>
          <Tabs activeKey={tabKey} fill className="mt-4" onSelect={(e) => initTabKey(e)}>
            <Tab
              eventKey="one"
              title={
                <Fragment>
                  <RiHotelFill size={30} /> Descripción
                </Fragment>
              }
            >
              <Description />
            </Tab>
            <Tab
              eventKey="two"
              title={
                <Fragment>
                  <ImLocation2 size={30} /> Dirección
                </Fragment>
              }
            >
              <Address />
            </Tab>
            <Tab
              eventKey="three"
              title={
                <Fragment>
                  <AiOutlineWifi size={30} /> Servicios
                </Fragment>
              }
            >
              <Services />
            </Tab>
            <Tab
              eventKey="four"
              title={
                <Fragment>
                  <TbHotelService size={30} /> Habitaciones
                </Fragment>
              }
            >
              <Rooms />
            </Tab>
          </Tabs>
          <Button className="text-light" onClick={handleSubmit}>
            Guardar Hotel
          </Button>
        </Row>
      </Container>
    </Fragment>
  );
};
