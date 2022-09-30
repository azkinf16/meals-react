import React from "react";

import { Layout, Menu } from "antd";
import { Header } from "antd/lib/layout/layout";
import { HomeOutlined, AppstoreOutlined, FireFilled } from "@ant-design/icons";

import { useNavigate } from "react-router-dom";

import "antd/dist/antd.css";

export default function Navigation() {
  const navigate = useNavigate();

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
              <h1 style={{ color: "white" }}>
                <FireFilled />
                &nbsp;Meals
              </h1>
            </div>
            <Menu mode="horizontal" theme="dark">
              <Menu.Item
                key="home"
                icon={<HomeOutlined />}
                onClick={() => navigate("/")}
              >
                Home
              </Menu.Item>
              <Menu.Item
                key="two"
                icon={<AppstoreOutlined />}
                onClick={() => navigate(() => "/Category/Beef")}
              >
                Beef
              </Menu.Item>
              <Menu.Item
                key="three"
                icon={<AppstoreOutlined />}
                onClick={() => navigate("/Category/Seafood")}
              >
                Seafood
              </Menu.Item>
            </Menu>
          </div>
        </Header>
      </Layout>
    </div>
  );
}
