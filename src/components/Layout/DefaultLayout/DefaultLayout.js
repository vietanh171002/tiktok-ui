import Header from '../components/Header';
import Sidebar from './Sidebar';
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    //mock results
    const searchResults = ['Result 1', 'Result 2', 'Result 3'];

    return (
        <div className={cx('wrapper')}>
            <Header searchResults={searchResults} />{' '}
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}> {children} </div>{' '}
            </div>{' '}
        </div>
    );
}

export default DefaultLayout;
