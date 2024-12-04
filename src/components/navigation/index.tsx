"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/data/navLinks";
import styles from "./styles.module.scss";

const Navigation = () => {
  const pathName = usePathname();

  const isActive = (link: string) => (pathName === link ? styles.active : "");

  return (
    <div className={styles.navigation}>
      <div className={styles.logo}>B</div>
      <div className={styles.menu}>
        {navItems.map(({ href, icon }) => (
          <Link key={href} href={href} className={isActive(href)}>
            {icon}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
