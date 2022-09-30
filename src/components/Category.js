import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

import Navigation from "./Navigation";

import { Layout, Card, Row, Col, Input, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const { Content } = Layout;
const { Meta } = Card;

export default function Contents() {
  const [secdata, setSecdata] = useState([]);
  const navigate = useNavigate();
  const { cat } = useParams();

  const getData = async () => {
    try {
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`
      );
      setSecdata(res.data.meals);
      console.log(secdata);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const searchFood = async (e) => {
    console.log(e.target.value);
    try {
      const datas = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/search.php?s=" + e.target.value
      );
      setSecdata(datas.data.meals);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navigation />
      <Content
        className="site-layout"
        style={{ padding: "0 50px", marginTop: 120 }}
      >
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 380 }}
        >
          <div
            className="container"
            style={{
              marginTop: "-50px",
              marginBottom: "40px",
            }}
          >
            <Space style={{ display: "flex", justifyContent: "space-between" }}>
              <h1 style={{ fontWeight: 700 }}>Meals</h1>
              <Input
                size="large"
                placeholder="Search..."
                prefix={<SearchOutlined />}
                style={{ width: 300 }}
                onChange={(e) => searchFood(e)}
              />
            </Space>
          </div>
          <Row justify="space-evenly" gutter={[42, 42]}>
            {secdata &&
              secdata.map((item) => {
                return (
                  <div className="site-card-wrapper" key={item.idMeal}>
                    <Col className="gutter-row">
                      <Card
                        hoverable
                        style={{
                          width: 240,
                        }}
                        cover={<img alt="meals" src={item.strMealThumb} />}
                        onClick={() => navigate(`/Detail/${item.idMeal}`)}
                      >
                        <Meta
                          title={item.strMeal}
                        />
                      </Card>
                    </Col>
                  </div>
                );
              })}
          </Row>
        </div>
      </Content>
    </>
  );
}
