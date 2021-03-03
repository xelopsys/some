import React from "react";
import next from "next";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Services() {
  return (
    <div className="container-fluid mb-3 border-top" id="services">
      <div className="row text-center w-100 mt-5 mb-3 mx-auto">
        <h1 className="display-4 text-center mx-auto border-bottom pb-1">Services</h1>
      </div>
      <div className="row w-100 mt-4 text-center mx-auto  mt-3 mb-auto">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-5 text-justify  mx-auto my-auto">
          <ol>
            <li className="text-justify px-auto d-flex">
              <span className={styles.span}>1</span>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, eligendi.</p>
            </li>
            <li className="text-justify px-auto d-flex">
              <span className={styles.span}>2</span>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, eligendi.</p>
            </li>
            <li className="text-justify px-auto d-flex">
              <span className={styles.span}>3</span>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, eligendi.</p>
            </li>
            <li className="text-justify px-auto d-flex">
              <span className={styles.span}>4</span>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, eligendi.</p>
            </li>
            <li className="text-justify px-auto d-flex">
              <span className={styles.span}>5</span>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, eligendi.</p>
            </li>

          </ol>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-5 text-justify mx-auto my-auto">
        <ol>
            <li className="text-justify px-auto d-flex">
              <span className={styles.span}>6</span>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, eligendi.</p>
            </li>
            <li className="text-justify px-auto d-flex">
              <span className={styles.span}>7</span>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, eligendi.</p>
            </li>
            <li className="text-justify px-auto d-flex">
              <span className={styles.span}>8</span>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, eligendi.</p>
            </li>
            <li className="text-justify px-auto d-flex">
              <span className={styles.span}>9</span>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, eligendi.</p>
            </li>
            <li className="text-justify px-auto d-flex">
              <span className={styles.span}>10</span>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, eligendi.</p>
            </li>

          </ol>
        </div>
      </div>
    </div>
  );
}
