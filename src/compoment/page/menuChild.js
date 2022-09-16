import React from "react";
import { useParams } from "react-router-dom";
import { Data } from "../../data/db";
import Swal from 'sweetalert2'
import Button from "@mui/material/Button";
function MenuChild() {
  const { slug } = useParams();
  const data = Data.filter((data) => data.slug === slug);
const handleClick=()=>{
  const Toast = Swal.mixin({
    toast: true,
    position: 'bottom-end',
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  
  Toast.fire({
    icon: 'success',
    title: 'Signed in successfully'
  })
}
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
              <Button variant="contained" color="success" onClick={handleClick}>
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
