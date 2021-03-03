import React from "react";
import next from "next";
import Link from "next/link";
import styles from "../styles/Home.module.css"


export default function ImgDiv(){
    return(
        <div className={styles.div1}>
            <div className="row mt-5 pt-5 mb-5 pb-5 w-100 text-center">
                <div className="col-xs-12 col-sm-12 col-md-5 col-lg-6 my-auto mx-auto text-center">
                    <h1 className="display-4 mx-auto">Welcome, to our company</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, aut!</p>
                    <button className="btn btn-primary rounded-pill ">Subscribe</button>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-5 col-lg-6 my-auto mx-auto text-center d-flex align-items-center justify-content-center">
                    <img src="/heroimg.png" className="w-75 text-center" alt=""/>
                </div>
            </div>
        </div>
    )
}
