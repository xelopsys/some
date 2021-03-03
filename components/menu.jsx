import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Head from "next/head";

export default function MenuListHead() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top">
      <a className="navbar-brand" href="#">
        Secure Investment
      </a>


        <ul className="navbar-nav ml-auto">
          <li className="nav-item active mx-3">
            <a className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item mx-3">
            <a className="nav-link" href="#">
              Features
            </a>
          </li>
          <li className="nav-item mx-3">
            <a className="nav-link" href="#">
              Pricing
            </a>
          </li>
          <li className="nav-item mx-3">
            <a
              className="nav-link disabled"
              href="#"
              tabindex="-1"
              aria-disabled="true"
            >
              Disabled
            </a>
          </li>
          <li className="nav-item mx-3">
          <a className="text-center nav-link" href="tel:+998911649612">Tell:+998 (91) 164-96-12</a>

          </li>
        </ul>

    </nav>
  );
}
