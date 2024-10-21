"use client";

import styles from "./Header.module.scss";
import { useEffect, useState } from "react";
import HeaderNav from "@/app/ui/components/Header/HeaderNav/HeaderNav";

export default function Header() {
  const [currentScrollY, setCurrentScrollY] = useState("start");

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;

      if (scroll > 400) {
        setCurrentScrollY("down");
      } else if (scroll <= 400 && scroll > 120) {
        setCurrentScrollY("up");
      } else {
        setCurrentScrollY("start");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${styles.header} ${
        currentScrollY === "down"
          ? styles.headerWentDown
          : currentScrollY === "up"
            ? styles.headerWentUp
            : null
      }`}
    >
      <div className={styles.container}>
        <div className={styles.headerBranding}>
          <a href="/">
            <img
              src="https://fxone1.com/wp-content/uploads/2024/09/FXONE.png"
              alt="Fx One"
            />
          </a>
        </div>
        <HeaderNav />
        <div className={styles.headerAuth}>
          <button className={styles.headerBtn}>دخول</button>
          <button className={styles.headerBtn}>سجل الأن</button>
        </div>
      </div>
    </header>
  );
}
