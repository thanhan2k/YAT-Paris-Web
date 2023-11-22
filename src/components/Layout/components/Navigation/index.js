import classNames from 'classnames/bind';
import styles from './Navigation.module.scss';

import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Navigation() {
    return (
        <div className={cx('wrapper')}>
            <ul className={cx('nav')}>
                <li>
                    <Link className={cx('link-style')} to="/">TRANG CHỦ</Link>
                </li>
                <li>
                    <Link className={cx('link-style')} to="/nuoc-hoa">NƯỚC HOA</Link>
                </li>
                <li>
                    <Link className={cx('link-style')} to="/nhom-huong">NHÓM HƯƠNG</Link>
                </li>
                <li>
                    <Link className={cx('link-style')} to="/thuong-hieu">THƯƠNG HIỆU</Link>
                </li>
                <li>
                    <Link className={cx('link-style')} to="/san-pham-yeu-thich">SẢN PHẨM YÊU THÍCH</Link>
                </li>
                <li>
                    <Link className={cx('link-style')} to="/about">VỀ YATPARIS</Link>
                </li>
            </ul>
        </div>
    );
}

export default Navigation;
