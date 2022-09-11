import React from "react";
import { useParams } from "react-router-dom";
import { Data } from "../../data/db";

import Button from "@mui/material/Button";
function MenuChild() {
  const { slug } = useParams();
  const data = Data.filter((data) => data.slug === slug);

  return (
    <div>
      {data.map((item) => {
        return (
          <div key={item.id} style={{ display: "flex" }}>
            <div
              style={{
                width: "50%",
                marginTop: "50px",
                marginBottom: "50px",
                marginRight: "10px",
              }}
            >
              <img src={item.img} style={{ width: "100%" }}></img>
            </div>
            <div
              style={{
                width: "50%",
                marginTop: "50px",
                marginBottom: "50px",
                marginLeft: "10px",
              }}
            >
              <h1>{item.name}</h1>
              <p style={{ fontSize: "20px" }}>{item.mota}</p>
              <p style={{ fontSize: "16px" }}>GIÁ:{item.gia}</p>
              <Button variant="contained" color="success">
                Đặt ngay
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default MenuChild;
