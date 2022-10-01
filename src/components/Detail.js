import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Content } from "antd/lib/layout/layout";
import Navigation from "./Navigation";

import axios from "axios";
import { Row, Col, Image } from "antd";

import "./Detail.css";
import Foot from "./Foot";

export default function Detail() {
  const [meal, setMeal] = useState([]);
  const [ing, setIng] = useState([]);
  let { id } = useParams();

  const getData = async () => {
    try {
      const datas = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );

      let data = datas.data.meals[0];
      console.log(data);

      setMeal(data);

      let tempIng = [];

      for (let i = 0; i <= 20; i++) {
        if (data[`strIngredient${i}`]) {
          tempIng.push([data[`strIngredient${i}`], data[`strMeasure${i}`]]);
        }
      }

      setIng(tempIng);
      console.log(ing);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Navigation />
      <Content
        className="site-layout"
        style={{ padding: "0 200px 45px", marginTop: 100 }}
      >
        <div
          className="site-layout-background"
          style={{
            padding: 24,
            display: "flex",
            background: "#F5F5F5",
            borderRadius: 10,
          }}
        >
          <Row>
            <Col span={12}>
              <Image
                style={{ width: "100%", height: "100%", borderRadius: 10 }}
                src={meal.strMealThumb}
              />
            </Col>
            <Col span={12} style={{ paddingLeft: 20 }}>
              <div className="info">
                <div className="left">
                  <h3 style={{ fontWeight: 800 }}>{meal.strMeal}</h3>
                  <p>Category&nbsp;:&nbsp;{meal.strCategory}</p>
                  <h2>Ingredients&nbsp;:</h2>
                  <ul style={{ marginLeft: "-20px" }}>
                    {ing.map((ingredient) => {
                      return (
                        <li>
                          {ingredient[1]} {ingredient[0]}
                        </li>
                      );
                    })}
                  </ul>
                  <br />
                  <i>
                    <strong>Tags&nbsp;:&nbsp;</strong>
                    {meal.strTags}
                  </i>
                </div>
                <div className="right">
                  <h2>
                    <i>Instruction</i>
                  </h2>
                  <p>{meal.strInstructions}</p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Content>
      <Foot />
    </>
  );
}
