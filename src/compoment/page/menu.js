/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

import styles from "../../scss/pageScss/menu.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

import { Data } from "../../data/db";
import { margin } from "@mui/system";

function menu() {
  const cx = classNames.bind(styles);

  const [listData, setListData] = useState(Data);
  const [searchText, setSearchText] = useState("");


  const handleSearch = () => {
    SearchFilter()
  };
  const SearchFilter=(Data)=>{
    return  Data.filter((item)=>item.name.toLowerCase().indexOf(searchText)!==-1)
  }

  return (
    <div className={cx("menu")}>
      <div className={cx("block_search")}>
        <input
          type="text"
          placeholder="Search.."
          name="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button onClick={handleSearch}>SEARCH</button>
      </div>
      <h1>CAC MON AN BEST SALER</h1>
      <div className={cx("card_list")}>
        {SearchFilter(Data)?.map((item) => {
          return (
            <div key={item.id}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={item.img}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.mota}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Link to={`/menu/${item.slug}`}>
                    <Button size="medium" color="primary">
                      XEM MON
                    </Button>
                  </Link>

                  <AttachMoneyIcon
                    sx={{ color: "#FF9933", marginLeft: 5 }}
                  ></AttachMoneyIcon>
                  <span>{item.gia}</span>
                  <AddCircleOutlineIcon
                    sx={{ color: "#FF9933", cursor: "pointer" }}
                  ></AddCircleOutlineIcon>
                </CardActions>
              </Card>
            </div>
          );
        })}
      </div>
    
    </div>
  );
}

export default menu;
