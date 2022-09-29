import React from "react";

import { Layout, Menu } from "antd";
import { Header } from "antd/lib/layout/layout";
import { HomeOutlined } from '@ant-design/icons'

import "antd/dist/antd.css";



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
              margin: "0 80px",
            }}
          >
            <div className="left">
              <h1 style={{ color: "white", marginLeft: '10px' }}>Meals</h1>
            </div>
            <Menu mode="horizontal" theme="dark">
              <Menu.Item><HomeOutlined style={{ paddingRight: '5px'}}/> Home</Menu.Item>
              <Menu.Item>Seafood</Menu.Item>
              <Menu.Item>Beef</Menu.Item>
              <Menu.Item>Vegetarian</Menu.Item>
              <Menu.Item>Lamb</Menu.Item>
              <Menu.Item>Dessert</Menu.Item>
              <Menu.Item>Side</Menu.Item>
              <Menu.Item>Goat</Menu.Item>
            </Menu>
          </div>
        </Header>
      </Layout>
    </div>
  );
}
