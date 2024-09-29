import React from "react";
import styles from "./styles.module.css";
import { MainLogo } from "../svg/NavbarIcons";
import { NavList } from "@/data";
import { FacebookLogo, InstagramLogo, TwitterLogo } from "../svg/FooterIcons";

const Footer = () => {
  return (
    <footer className={styles.main_container}>
      <section className={styles.footer_container}>
        <MainLogo className={styles.footer_logo} />
        <ul className={styles.footer_list_container}>
          {NavList.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
        <div className={styles.footer_social_link_container}>
          <FacebookLogo />
          <InstagramLogo />
          <TwitterLogo />
        </div>
      </section>

      <p className={styles.footer_copyright}>
        © 2021 SceneSwitcher. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
