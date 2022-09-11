import React from 'react';
import styles from '../scss/navbar.scss';
import classNames from 'classnames/bind';
import logo from '../assests/Avantages-Food-logo-Transparent-002.png'
import {Link} from 'react-router-dom';
import Avatar from '@mui/material/Avatar'

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import Menu from '@mui/material/Menu';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import { useState } from 'react';

const listIcon=['Thông Tin Cá Nhân','Cài Đặt','Đăng Xuất'];
const ITEM_HEIGHT = 48;
function Navbar(){
    const cx = classNames.bind(styles);

    const [anchorEl, setAnchorEl] =useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  

    
return <div className={cx('navbar')}>
            <div className={cx('rightSidebar')}>
            <Link to="/"> <img src={logo}/></Link>
             
            </div>
            
            <div className={cx('leftSidebar')}>
              <Link to="/home" className={cx('link_to')}>Home</Link>
              <Link to="/menu" className={cx('link_to')}>Menu</Link>
              <Link to="/about" className={cx('link_to')}>About</Link>
              <Link to="/contact" className={cx('link_to')}>Contact</Link>
             </div>
            
             

              <div className={cx('avatar')}>
              <Tippy content="Personal Information">  
              <Link to="/Info">

                <Avatar
                  alt="Remy Sharp"
                  src={logo}
                  sx={{ width: 56, height: 56 ,borderRadius:15}}
                />
              </Link>
              </Tippy>

              </div>
              <div className={cx('icon_navbar')}>
                <ArrowRightIcon 
                  aria-label="more"
                  id="long-button"
                  aria-controls={open ? 'long-menu' : undefined}
                  aria-expanded={open ? 'true' : undefined}
                  aria-haspopup="true"
                  onClick={handleClick}
                  sx={{width:40,height:40,color:'white'}}
                  >
                    
                  <MoreVertIcon />
                 
                </ArrowRightIcon>
            
                <Menu
                  id="long-menu"
                  MenuListProps={{
                    'aria-labelledby': 'long-button',
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  PaperProps={{
                    style: {
                      maxHeight: ITEM_HEIGHT * 4.5,
                      width: '13rem',
                    },
                  }}
                >
                  {listIcon.map((option) => (
                    <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                      {option}
                      
                    </MenuItem>
                  ))}
                </Menu>
              </div>
    </div>
}
export default Navbar;