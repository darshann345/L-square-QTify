import React from "react";
import styles from "./../Logo/logo.module.css";
import LogoImg from "../../../src/Assests/logo.png";

const Logo=()=>{

return(
    <div className={styles.logoDiv}>
        <img src={LogoImg} width={67} alt="logo"/>
    </div>
)
};

export default Logo;