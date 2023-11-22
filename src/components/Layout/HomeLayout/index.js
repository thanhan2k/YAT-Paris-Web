import classNames from 'classnames/bind';
import styles from './HomeLayout.module.scss';

import Header from '~/components/Layout/components/Header';
import Navigation from '~/components/Layout/components/Navigation';
import Footer from '~/components/Layout/components/Footer';

const cx = classNames.bind(styles);

function HomeLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <Navigation />
            <div className="container">
                <div className="content">{children}</div>
            </div>
            <Footer />
        </div>
    );
}

export default HomeLayout;
