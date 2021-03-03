import React from "react";
import next from "next";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function About() {
  return (
    <div className="container-fluid mb-3" id="about">
      <div className="row text-center w-100 mt-5 mb-3">
        <h1 className="display-4  w-100 text-center mx-auto border-bottom pb-1">About us</h1>
      </div>
      <div className="row w-100 mt-4 text-center mx-auto  mt-3 mb-auto">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-5 text-justify  mx-auto my-auto">
          <p className="text-justify mx-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem commodi quaerat quisquam soluta enim animi omnis
            recusandae quia itaque voluptate?
          </p>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-5 text-justify mx-auto my-auto">
          <p className="text-justify mx-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem commodi quaerat quisquam soluta enim animi omnis
            recusandae quia itaque voluptate?
          </p>
        </div>
      </div>
    </div>
  );
}
