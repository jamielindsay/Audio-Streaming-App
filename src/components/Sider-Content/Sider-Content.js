import React from "react";
import "./Sider-Content.css";
import { Icon, Button } from "antd";

export default function SiderContent() {
  return (
    <div className="sider-content">
      <div>
        <Button type="primary" shape="circle" size="large">
          <Icon type="home" theme="filled" />
        </Button>
      </div>
      <div className="sider-main-links">
        <Button type="link">New</Button>
        <Button type="link">Browse</Button>
        <Button type="link">Saved</Button>
      </div>
    </div>
  );
}
