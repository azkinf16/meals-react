import { Layout, Menu } from "antd";
import { Header } from "antd/lib/layout/layout";
import "antd/dist/antd.css";
import React from "react";

export default function Navigation() {
  return (
    <div>
      <Layout>
        <Header
          style={{
            position: "relative",
            zIndex: 1,
            width: "100%",
          }}
        >
          <div
            className="container"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignContent: "center",
              height: "64px",
              margin: "0 100px",
            }}
          >
            <div className="left">
              <h1 style={{ color: "white" }}>Meals</h1>
            </div>
            <Menu mode="horizontal" theme="dark">
              <Menu.Item>Home</Menu.Item>
              <Menu.Item>Chiken</Menu.Item>
              <Menu.Item>Desert</Menu.Item>
            </Menu>
          </div>
        </Header>
      </Layout>
    </div>
  );
}
