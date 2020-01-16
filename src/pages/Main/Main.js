import React from "react";
import "./Main.css";
import { Layout } from "antd";
import SiderContent from "../../components/Sider-Content/Sider-Content";
import HeaderContent from "../../components/Header-Content/Header-Content";
import FooterContent from "../../components/Footer-Content/Footer-Content";

const { Header, Footer, Sider, Content } = Layout;

export default function Main() {
  return (
    <Layout className="main-page">
      <Layout>
        <Sider className="main-sider">
          <SiderContent></SiderContent>
        </Sider>
        <Layout>
          <Header className="main-header">
            <HeaderContent></HeaderContent>
          </Header>
          <Content className="main-content">Content</Content>
        </Layout>
      </Layout>
      <Footer className="main-footer">
        <FooterContent></FooterContent>
      </Footer>
    </Layout>
  );
}
