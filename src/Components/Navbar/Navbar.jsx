import React from "react";
import Button from "../Button/Button";
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Search1 from "../Search/Search1";

const Navbar = ({ data }) => {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <Search placeholder="Search a song of your choice" data={data} />
      {/* <Search1 data={data} /> */}
      <Button children="Give Feedback" />
    </nav>
  );
};

export default Navbar;
