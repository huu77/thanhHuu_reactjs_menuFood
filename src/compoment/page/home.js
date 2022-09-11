import React from "react";
import styles from '../../scss/pageScss/home.scss';
import classNames from 'classnames/bind';
import {Link} from 'react-router-dom';

function home() {
    const cx = classNames.bind(styles);
    return ( <div className={cx('home_style')}>
        <div className={cx('home_style_chil')}>
      <h1>Food Coner</h1>
      <p>INDIAN FOOD AT A CLICK</p>
     
      <Link to="/contact">
      <button>Order Now</button>
      </Link>
      </div>
    </div> );
}

export default home;