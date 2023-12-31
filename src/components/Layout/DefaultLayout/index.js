import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss'

import Header from '~/components/Layout/components/Header';
import Sidebar from './Sidebar/index.js';
import Navigation from '~/components/Layout/components/Navigation';
import Footer from '~/components/Layout/components/Footer';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <Navigation />
            <div className={cx('container')}>
                <div className={cx('content')}>{children}</div>
                <Sidebar />
            </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
