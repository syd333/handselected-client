import React, {useState} from 'react'
import Link from 'next/link'
import {navLinks } from '../utils/data'
import styles from '../styles/Navbar.module.css'

const NavBar = () => {
    const [isOpen,setIsOpen] = useState(false);
    const openMenu= ()=> setIsOpen(!isOpen);
    return (
      // <header className={styles2.header}>
      <nav className={styles.navbar}>
        <Link href="/">
          <a className={styles.navlogo}>[BrandLogo]</a>
        </Link>
        <ul
          className={
            isOpen === false
              ? styles.navmenu
              : styles.navmenu + " " + styles.active
          }
        >
          <li className={styles.navitem}>
            <Link href="/about">
              <a
                className={
                  isOpen === false
                    ? styles.navlink
                    : styles.navlink + " " + styles.active
                }
                onClick={openMenu}
              >
                About
              </a>
            </Link>
          </li>
          <li className={styles.navitem}>
            <Link href="/shop">
              <a
                className={
                  isOpen === false
                    ? styles.navlink
                    : styles.navlink + " " + styles.active
                }
                onClick={openMenu}
              >
                Shop
              </a>
            </Link>
          </li>
          <li className={styles.navitem}>
            <Link href="/evoke">
              <a
                className={
                  isOpen === false
                    ? styles.navlink
                    : styles.navlink + " " + styles.active
                }
                onClick={openMenu}
              >
                Evoke
              </a>
            </Link>
          </li>
          <li className={styles.navitem}>
            <Link href="/contact">
              <a
                className={
                  isOpen === false
                    ? styles.navlink
                    : styles.navlink + " " + styles.active
                }
                onClick={openMenu}
              >
                Contact
              </a>
            </Link>
          </li>
        </ul>
        <button
          className={
            isOpen === false
              ? styles.hamburger
              : styles.hamburger + " " + styles.active
          }
          onClick={openMenu}
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>
      </nav>
      // </header>
    );
}

export default NavBar;