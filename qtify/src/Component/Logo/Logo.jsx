import React from 'react';
import styles from './logo.module.css';

const Logo = ({ logoText }) => {
    return (
        <div className={styles['logo-container']}>
            <span className={styles['logo-icon']}>
                Q
            </span>            
            <span className={styles['logo-icon-text']}>{logoText}</span>
        </div>
    );
};

export default Logo;
