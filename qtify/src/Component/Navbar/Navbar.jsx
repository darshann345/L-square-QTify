import React from 'react';
import styles from './Navbar.module.css';
import Logo from '../Logo/Logo';
import Search from '../Search/Search';
import FeedBackButton from '../FeedBack/FeedBackButton'; 
const Navbar = () => {
    return (
        <>
            <div className={styles.navbar}>
                <Logo logoText="tify" /> 
                <Search search={"Search a song of your choice"} />
                <FeedBackButton />
            </div>
        </>
        
    );
};
export default Navbar;
