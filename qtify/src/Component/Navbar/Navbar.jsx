import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import SearchBar from "../Search/Search";
import Button from "../Buttons/Button";

const Navbar = () => {

    return (
        <>
            <nav className={styles.navbar}>
                <Logo />
                <SearchBar search={"Search a song of your choice"} />
                <Button children={"Give Feedback"} />
                <h1>Dummy</h1>
            </nav>

        </>

    );
}

export default Navbar;