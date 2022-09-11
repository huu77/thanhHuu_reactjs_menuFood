import React from "react";
import styles from '../../scss/pageScss/contact.scss';
import classNames from 'classnames/bind';

function contact() {
    const cx = classNames.bind(styles);
    return <div className={cx('contact_dad')}>
    <div className={cx('contact')}>
             <div className={cx('sendInformation')}>
            

                <h1>CONTACT</h1>
                <p>Please contact us through the information below</p>
            </div>
            <div className={cx('form_contact')}>
                <input type="text" name="name" placeholder="Ho Ten" className={cx('name')}/>
                <input type="email" name="email" placeholder="email"  className={cx('email')}/>
                <input type="text" name="sdt" placeholder="sdt" className={cx('sdt')}/>
                <input type="text" name="tieude" placeholder="Tieu De" className={cx('tieude')}/>
                <textarea name="noidung" placeholder="NOI Dung " className={cx('noidung')}/>
           

             </div>
             <div className={cx("bang")}>
                bang
             </div>
            <div className={cx('map')}>
                iagdbvuiyabdi
            </div>
    </div>
    </div>
    
}

export default contact;