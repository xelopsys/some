import React from "react";
import next from "next";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Thank(){
    return(
        <div className={styles.container}>
            <h1 className="display-4 ">Thank you for your submitting!</h1>
            <h3 className="text-center">Please wait some time, we will call you back !</h3>
            <Link href="/">
                <a href="">Go to the home page :)</a>
            </Link>
        </div>
    )
}