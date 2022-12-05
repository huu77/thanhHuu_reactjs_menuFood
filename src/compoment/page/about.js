import React, { useState } from "react";
import styles from "../../scss/pageScss/about.scss";
import classNames from "classnames/bind";
import { Data } from "../../data/db";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
export default function about() {
  const cx = classNames.bind(styles);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [data, setData] = useState(Data);
  const handleDelte = (id) => {
    let datacopy = [...data];
    let index = data.findIndex((item) => item.id === id);
    datacopy.splice(index, 1);
    setData(datacopy);

    console.log("click" + id);
  };
  const handleCapNhap = (id) => {}; 
  return (
    <div style={{ maxHeight: 600, width: "100%" }}>
      <Link to="/about/newCard">
        <Button variant="contained" style={{marginTop:30, marginLeft:30 ,background: "black" , textDecoration:"none"}}> TAO MOI</Button>
      </Link>
      <table className={cx("TB_about")}>
        <tr>
          <th>TEN SAN PHAM</th>
          <th>MO TA</th>
          <th colSpan={2}>CHINH SUA</th>
        </tr>
        {data.map((item) => {
          return (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.mota}</td>
              <td>
                <Button
                  variant="contained"
                  onClick={(e) => handleDelte(item.id)}
                >
                  {" "}
                  DELETE
                </Button>
              </td>
              <td>
                <Button
                  variant="contained"
                  onClick={(e) => handleCapNhap(item.id)}
                >
                  {" "}
                  CAP NHAP
                </Button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
