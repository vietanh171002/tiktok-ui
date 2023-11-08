import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './AccountItem.module.scss';
import classNames from 'classnames/bind';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-1/366315113_1335011573775607_3867111404781981474_n.jpg?stp=cp6_dst-jpg_p240x240&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Ef9ITF_vo0cAX-0-d18&_nc_oc=AQkYH_QkfwqqcjjsirKofY1j2gXxggIflxQ8G-1GPVfw16XMb7H9yvGdeuftotq1QJU&_nc_ht=scontent.fhan17-1.fna&oh=00_AfBVdGfXHsiOQxG3t3jOWPEgo4CIgkjn3Zr_su708dd6JA&oe=654EDA23"
                alt="Hoa"
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span> Ngo Viet Anh </span> <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>{' '}
                <span className={cx('username')}> vietanh1710 </span>{' '}
            </div>{' '}
        </div>
    );
}

export default AccountItem;
