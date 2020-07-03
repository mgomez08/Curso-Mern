import React, { useState, useEffect } from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import Logo from "../../../assets/img/png/LogoLogin.png";
export default function MenuTop() {
  return (
    <Menu className="menu-top" mode="horizontal">
      <Menu.Item className="menu-top__logo">
        <Link to={"/"}>
          <img src={Logo} alt="Multicine" />
        </Link>
      </Menu.Item>
      <Menu.Item className="menu-top__item">
        <Link to={"/"}>Inicio</Link>
      </Menu.Item>
      <Menu.Item className="menu-top__item">
        <Link to={"/cartelera"}>Cartelera</Link>
      </Menu.Item>

      <div>Social Media...</div>
    </Menu>
  );
}
