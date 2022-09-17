import * as React from "react";
import Box from "@mui/joy/Box";
import IconButton from "@mui/joy/IconButton";
import Input from "@mui/joy/Input";
import KeyRoundedIcon from "@mui/icons-material/KeyRounded";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import styles from '../scss/login.scss';
import classNames from 'classnames/bind';


export default function InputIntegration() {

    const cx = classNames.bind(styles);
  return (
    <div className={cx('login_form')}>
        <Box sx={{ display: "flex", flexDirection: "column" ,width:"300px",marginTop:"50px",color:"white"}} >
        <Input
          size="lg"
          startDecorator={<AccountCircleIcon />}
          placeholder="Tai Khoan"
          type="text"
         
        />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column",width:"300px",marginTop:"50px",color:"white"}}>
        <Input
          size="lg"
          startDecorator={<KeyRoundedIcon />}
          placeholder="Password"
          type="password"
          endDecorator={
            <IconButton color="neutral">
              <VisibilityRoundedIcon />
            </IconButton>
          }
        />
      </Box>
      <Button variant="contained" color="success" sx={{margin:"30px",marginBottom:"50px"}}>
        LOGIN
      </Button>
    </div>
  );
}
