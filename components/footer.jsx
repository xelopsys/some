import React from "react";
import next from "next";
import Link from "next/link";
import styles from "../styles/Home.module.css";


export default function Footer(){
    return(
        <div className={styles.footer}>
            <div className="row w-100 text-center mx-auto mt-auto">
                <p className="text-center w-100 mt-3">All rights reserved by Secure Investment LLC company &copy;</p>
            </div>
            <div className="row w-100 text-center mx-auto mb-auto mt-0">
               
                <p className="ml-auto mt-1 mr-1">Made by <a href="https://xelopsys.me">XelopSys</a></p>
            </div>
        </div>
    )
}