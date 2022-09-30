import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Content } from "antd/lib/layout/layout";
import Navigation from "./Navigation";

import axios from "axios";
import { Row, Col, Image } from "antd";

import "./Detail.css";

export default function Detail() {
  const [meal, setMeal] = useState([]);
  let { id } = useParams();

  const getData = async () => {
    try {
      const datas = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      setMeal(datas.data.meals[0]);
      console.log(meal);
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
        style={{ padding: "0 350px", marginTop: 110 }}
      >
        <div
          className="site-layout-background"
          style={{
            padding: 24,
            minHeight: 360,
            display: "flex",
            background: "#F5F5F5",
          }}
        >
          <Row gutter={550}>
            <Col span={6}>
              <Image width={500} src={meal.strMealThumb} />
            </Col>
            <Col span={6}>
              <h1 style={{ fontWeight: 800 }}>{meal.strMeal}</h1>
              <p>Category&nbsp;:&nbsp;{meal.strCategory}</p>
              <br />
              <div className="ingredients">
                <h2>Ingredients&nbsp;:</h2>
                <ul style={{ marginLeft: "-20px" }}>
                  <li>
                    {meal.strMeasure1}
                    {meal.strIngredient1}
                  </li>
                  <li>
                    {meal.strMeasure2} {meal.strIngredient2}
                  </li>
                  <li>
                    {meal.strMeasure3} {meal.strIngredient3}
                  </li>
                  <li>
                    {meal.strMeasure4} {meal.strIngredient4}
                  </li>
                  <li>
                    {meal.strMeasure5} {meal.strIngredient5}
                  </li>
                  {/* <li>{meal.strMeasure6} {meal.strIngredient6}</li>
                <li>{meal.strMeasure7} {meal.strIngredient7}</li> */}
                </ul>
              </div>
              <br />
              <h2>{meal.strArea}&nbsp;FOOD!!</h2>
              <br />
              <br />
              <br />
              <i>
                <strong>Tags&nbsp;:&nbsp;</strong>
                {meal.strTags}
              </i>
            </Col>
          </Row>
        </div>
      </Content>
    </>
  );
}
