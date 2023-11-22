import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import images from '~/assets/images';

// eslint-disable-next-line
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// eslint-disable-next-line
import { faPhoneFlip } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('f-col', 'col-1')}>   
                <img className={cx('logo')} src={images.logoFooter} alt="LOGO" width="184" height="90" />
                <div className={cx('contact')}>
                    <p>Tổng đài chăm sóc: 1900 2901</p>
                    <FontAwesomeIcon icon={faPhoneFlip} className={cx('phone-icon')} />
                </div>
                <div className={cx('social-link')}>
                    <p>Thông tin liên hệ:</p>
                    <div className={cx('icons-app')}>
                        <img src={images.google} alt="Gmail" />
                        <img src={images.facebook} alt="facebook" />
                        <img src={images.instagram} alt="instagram" />
                        <img src={images.twitter} alt="twitter" />
                    </div>
                </div>
            </div>
            <div className={cx('f-col')}>
                <h4 className={cx('header')}>Chính sách & quy định</h4>
                <div className={cx('content')}>
                    <p>Qui định thanh toán</p>
                    <p>Chính sách huỷ đơn đặt hàng</p>
                    <p>Qui chế hoạt động</p>
                    <p>Chính sách bảo mật</p>
                </div>
            </div>
            <div className={cx('f-col')}>
                <h4 className={cx('header')}>Khách hàng & đối tác</h4>
                <div className={cx('content')}>
                    <p>Tuyển dụng</p>
                    <p>Đối tác</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
