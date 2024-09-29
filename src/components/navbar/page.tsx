import React from "react";
import styles from "./styles.module.css";
import { Hamburger, MainLogo } from "../svg/NavbarIcons";
import { NavList } from "@/data";

const Navbar = () => {
  return (
    <nav className={styles.main_container}>
      <MainLogo className={styles.main_logo} />
      <ul className={styles.nav_list_container}>
        {NavList.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <ul className={styles.nav_btn_container}>
        <li className={styles.login_btn}>Login</li>
        <li className={styles.started_btn}>Get started</li>
      </ul>
      <Hamburger className={styles.hamburger_icon} />
    </nav>
  );
};

export default Navbar;
