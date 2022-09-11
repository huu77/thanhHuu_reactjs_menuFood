import React from "react";
import styles from '../scss/footer.scss';
import classNames from 'classnames/bind';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function Footer() {
    const cx = classNames.bind(styles);
    return <div className={cx('footer')}>
       <div className={cx('footer_chil')}>
        <InstagramIcon
      sx={{width:40,height:40,color:'white',marginRight:3}}/>
        <TwitterIcon
          sx={{width:40,height:40,color:'white',marginRight:3}}/>
        <FacebookIcon
          sx={{width:40,height:40,color:'white',marginRight:3}}/>
        <LinkedInIcon
          sx={{width:40,height:40,color:'white',marginRight:3}}/>
       </div>
       <span>&copy; IndianFooder.com</span>
    </div>
    
}

export default Footer;