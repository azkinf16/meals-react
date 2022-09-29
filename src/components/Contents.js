import React, { useState, useEffect } from "react";
import axios from "axios";

import { Layout, Card, Row, Col } from "antd";

const { Content } = Layout;
const { Meta } = Card;

export default function Contents() {
  const [data, setData] = useState([]);
  // const navigate = useNavigate();

  const loadData = async () => {
    try {
      const res = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/search.php?f=b"
      );
      console.log(res);
      setData(res.data.meals);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <Content
        className="site-layout"
        style={{ padding: "0 50px", marginTop: 64}}
      >
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 380 }}
        >
          <Row justify="space-evenly" gutter={[42, 42]}>
            {data &&
              data.map((item) => {
                return (
                  <div className="site-card-wrapper" key={item.idMeal}>
                    <Col className="gutter-row">
                      <Card
                        hoverable
                        style={{
                          width: 240,
                        }}
                        cover={<img alt="meals" src={item.strMealThumb} />}
                      >
                        <Meta
                          title={item.strMeal}
                          description={item.strCategory}
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
