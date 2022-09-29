import React from "react";

import { Layout, Menu } from "antd";
import { Header } from "antd/lib/layout/layout";
import { HomeOutlined, SettingOutlined, AppstoreOutlined, FireFilled } from "@ant-design/icons";

import "antd/dist/antd.css";

export default function Navigation() {
  return (
    <div>
      <Layout>
        <Header
          style={{
            position: "fixed",
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
              margin: "0 80px",
            }}
          >
            <div className="left">
              <h1 style={{ color: "white" }}><FireFilled /> Meals</h1>
            </div>
            <Menu mode="horizontal" theme="dark">
              <Menu.Item key="home" icon={<HomeOutlined />}>
                Home
              </Menu.Item>
              <Menu.SubMenu
                key="SubMenu"
                title="Category"
                icon={<SettingOutlined />}
              >
                <Menu.Item key="two" icon={<AppstoreOutlined />}>
                  Dessert
                </Menu.Item>
                <Menu.Item key="three" icon={<AppstoreOutlined />}>
                  Beef
                </Menu.Item>
              </Menu.SubMenu>
            </Menu>
          </div>
        </Header>
      </Layout>
    </div>
  );
}
