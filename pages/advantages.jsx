import React from "react";
import next from "next";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Advantage() {
  return (
    <div className={styles.div3} id="advantage">
      <div className="container-fluid py-4 h-auto px-auto">
        <div className="row text-center w-100 mx-auto mt-4 mb-4 px-auto ">
          <h1 className="display-4  text-center mx-auto border-bottom pb-1">
            Advantages working with us
          </h1>
        </div>
        <div className="row text-center w-100 mx-auto px-auto  my-auto">
          <div className="col-xs-12 col-sm-12 col-md-5 col-lg-2 mx-auto text-center ">
            <img src="/handshake.svg" className={styles.img} alt="" />
            <p className="my-2">Lorem, ipsum dolor.</p>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-5 col-lg-2 mx-auto text-center">
            <img src="/handshake.svg" className={styles.img} alt="" />
            <p className="my-2">Lorem, ipsum dolor.</p>

          </div>
          <div className="col-xs-12 col-sm-12 col-md-5 col-lg-2 mx-auto text-center">
            <img src="/handshake.svg" className={styles.img} alt="" />
            <p className="my-2">Lorem, ipsum dolor.</p>

          </div>
          <div className="col-xs-12 col-sm-12 col-md-5 col-lg-2 mx-auto text-center">
            <img src="/handshake.svg" className={styles.img} alt="" />
            <p className="my-2">Lorem, ipsum dolor.</p>

          </div>
          <div className="col-xs-12 col-sm-12 col-md-5 col-lg-2 mx-auto text-center">
            <img src="/handshake.svg" className={styles.img} alt="" />
            <p className="my-2">Lorem, ipsum dolor.</p>

          </div>
        </div>
      </div>
    </div>
  );
}
