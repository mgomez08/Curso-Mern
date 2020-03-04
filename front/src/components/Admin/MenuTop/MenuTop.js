import React from "react";
import { Button, Icon } from "antd";
import Logo from "../../../assets/img/png/Logo.png";
import "./MenuTop.scss";
export default function MenuTop(props) {
  const { menuCollapsed, setMenuCollapsed } = props;
  return (
    <div className="menu-top">
      <div className="menu-top__left">
        <img className="menu-top__left-logo" src={Logo} alt="MultiCine" />
        <Button type="link" onClick={() => setMenuCollapsed(!menuCollapsed)}>
          <Icon type={menuCollapsed ? "menu-unfold" : "menu-fold"} />
        </Button>
      </div>
      <div className="menu-top__right">
        <Button type="link">
          <Icon type="poweroff" />
        </Button>
      </div>
    </div>
  );
}
