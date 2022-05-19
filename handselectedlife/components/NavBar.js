import React from 'react'
import Link from 'next/link'
import {navLinks } from '../utils/data'

const NavBar = () => {
    return (
        <div>
      <nav>
        {navLinks.map((link, index) => {
          return (
            <ul>
              <Link href={link.path}>
                <li key={index}>{link.name}</li>
              </Link>
            </ul>
          );
        })}
      </nav>
      </div>
    );
}

export default NavBar;