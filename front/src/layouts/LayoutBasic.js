import React from "react";
import { Route, Switch } from "react-router-dom";
import { Layout, Row, Col } from "antd";
import "./LayoutBasic.scss";
import MenuTop from "../components/Web/MenuTop";

export default function LayoutBasic(props) {
  const { routes } = props;
  const { Footer } = Layout;

  return (
    <Row>
      <Col lg={4} />
      <Col lg={16}>
        <MenuTop />
        <LoadRoutes routes={routes} />
        <Footer> Marlon Gómez </Footer>
      </Col>
      <Col ñg={4} />
    </Row>
  );
}

function LoadRoutes({ routes }) {
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </Switch>
  );
}
