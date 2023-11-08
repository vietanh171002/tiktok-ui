import React, { useState, useEffect, useRef } from 'react';

import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import AccountItem from '~/components/AccountItem';

const cx = classNames.bind(styles);

function Header({ searchResults }) {
    const [showResults, setShowResults] = useState(false);
    // const searchResultRef = useRef();

    const handleInputClick = () => {
        setShowResults(!showResults);
    };

    // useEffect(() => {
    //     const handleDocumentClick = (e) => {
    //         if (searchResultRef.current && !searchResultRef.current.contains(e.target)) {
    //             // Clicked outside the search result container
    //             setShowResults(false);
    //         }
    //     };

    //     document.addEventListener('click', handleDocumentClick);

    //     return () => {
    //         document.removeEventListener('click', handleDocumentClick);
    //     };
    // }, []);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </div>{' '}
                <div className={cx('search')}>
                    <input placeholder="Search accounts and videos" onClick={handleInputClick} />{' '}
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faSpinner} />{' '}
                    </button>{' '}
                    <FontAwesomeIcon className={cx('loading')} icon={faCircleXmark} />{' '}
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />{' '}
                    </button>{' '}
                    {showResults && searchResults.length > 0 && (
                        <div className={cx('search-results')}>
                            <PopperWrapper>
                                {' '}
                                {/* <ul>
                                                                                                                                                                                <h4> Accounts </h4>
                                                                                                                                                                                {searchResults.map((result, index) => (
                                                                                                                                                                                    <li key={index}> {result} </li>
                                                                                                                                                                                ))}
                                                                                                                                                                            </ul> */}{' '}
                                <h4> Accounts </h4> <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>{' '}
                        </div>
                    )}{' '}
                </div>{' '}
                <div className={cx('actions')}> actions </div>{' '}
            </div>{' '}
        </header>
    );
}

export default Header;
