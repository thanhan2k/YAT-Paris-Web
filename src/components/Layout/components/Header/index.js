import classNames from 'classnames/bind';
// eslint-disable-next-line
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// eslint-disable-next-line
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('wrapper-logo')}>
                <img className={cx('logo')} src={images.logo} alt="LOGO" width="184" height="90" />
            </div>
            <div className={cx('action')}>
                <div className={cx('search')}>
                    <input placeholder="Search" spellCheck={false} />
                    {/* <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}
                </div>
                <div className={cx('my-account')}>
                    <img src={images.user} alt="LOGO" width="24" height="24" />
                    MY ACCOUNT
                </div>
                <div className={cx('my-cart')}>
                    <img src={images.cart} alt="LOGO" width="24" height="24" />
                    MY CART
                </div>
            </div>
        </header>
    );
}

export default Header;
