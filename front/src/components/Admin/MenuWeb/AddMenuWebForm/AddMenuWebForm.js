import React, { useState } from "react";
import { Form, Icon, Input, Button, Select, notification } from "antd";
import "./AddMenuWebForm.scss";
import { addMenuApi } from "../../../../api/menu";
import { getAccessTokenApi } from "../../../../api/auth";
export default function AddMenuWebForm(props) {
  const { setIsVisibleModal, setReloadMenuWeb } = props;
  const [menuWebData, setMenuWebData] = useState({});

  const addMenu = (event) => {
    event.preventDefault();
    let finalData = {
      title: menuWebData.title,
      url:
        (menuWebData.http ? menuWebData.http : "http://multicine.com/") +
        menuWebData.url,
    };
    if (!finalData.title || !finalData.url || !menuWebData.url) {
      notification["error"]({
        message: "Todos los campos son obligatorios.",
      });
    } else {
      const accessToken = getAccessTokenApi();
      finalData.active = false;
      finalData.order = 1000;
      addMenuApi(accessToken, finalData)
        .then((response) => {
          notification["success"]({
            message: response,
          });
          setIsVisibleModal(false);
          setReloadMenuWeb(true);
          setMenuWebData({});
          finalData = {};
        })
        .catch(() => {
          notification["error"]({
            message: "Error en el servidor",
          });
        });
    }
  };
  return (
    <div className="add-menu-web-form">
      <AddForm
        menuWebData={menuWebData}
        setMenuWebData={setMenuWebData}
        addMenu={addMenu}
      />
    </div>
  );
}

function AddForm(props) {
  const { menuWebData, setMenuWebData, addMenu } = props;
  const { Option } = Select;

  const selectBefore = (
    <Select
      defaultValue="http://multicine.com/"
      style={{ width: 180 }}
      onChange={(e) => setMenuWebData({ ...menuWebData, http: e })}
    >
      <Option value="http://multicine.com/">http://multicine.com/</Option>
      <Option value="https://multicine.com/">https://multicine.com/</Option>
    </Select>
  );

  return (
    <Form className="form-add" onSubmit={addMenu}>
      <Form.Item>
        <Input
          prefix={<Icon type="font-size" />}
          placeholder="Titulo"
          value={menuWebData.title}
          onChange={(e) =>
            setMenuWebData({ ...menuWebData, title: e.target.value })
          }
        />
      </Form.Item>
      <Form.Item>
        <Input
          addonBefore={selectBefore}
          placeholder="URL"
          value={menuWebData.url}
          onChange={(e) =>
            setMenuWebData({ ...menuWebData, url: e.target.value })
          }
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="btn-submit">
          Crear menú
        </Button>
      </Form.Item>
    </Form>
  );
}
