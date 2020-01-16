import React from "react";
import "./Header-Content.css";
import { Input, Avatar, Menu, Dropdown } from "antd";

const { Search } = Input;

export default function HeaderContent() {
  const accountMenu = (
    <Menu className="account-menu">
      <Menu.Item key="0">Account</Menu.Item>
      <Menu.Item key="1">Settings</Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">Log out</Menu.Item>
    </Menu>
  );

  return (
    <div className="header-content">
      <Search
        className="header-content-search"
        placeholder="input search text"
        onSearch={value => console.log(value)}
      />
      <Dropdown
        overlay={accountMenu}
        trigger={["click"]}
        placement="bottomCenter"
      >
        <Avatar className="header-user" icon="user"></Avatar>
      </Dropdown>
    </div>
  );
}
