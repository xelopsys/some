import React from "react";
import next from "next";
import Link from "next/link";
import styles from "../styles/Home.module.css";


export default function Error(){
    return(
        <div className={styles.container}>
            <h1 className="display-3 ">404</h1>
            <h3 className="display-4">Error</h3>
            <Link href="/">
                <a href="">Go to the home page :)</a>
            </Link>
        </div>
    )
}