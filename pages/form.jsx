import React from "react";
import next from "next";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Form() {
  return (
    <div className="container mb-5 mt-3">
      <div className="row text-center w-100 mt-5 mb-3">
        <h1 className="display-4 text-center mx-auto border-bottom pb-1">
          Contact us
        </h1>
      </div>
      <div className="row w-100 text-cenetr mx-auto my-auto">
        <form
          className={styles.form}
          action="https://formspree.io/f/mnqokwpv"
          method="POST"
        >
          <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 mt-3">
            <label for="exampleInputEmail1">Full name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputText1"
              aria-describedby="textHelp"
              placeholder="Full name"
              name="name"
            />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 mt-3">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              name="email"
            />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 mt-3">
            <label for="exampleInputNumber1">Phone number</label>
            <input
              type="number"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Phone number"
              name="phone number"
            />
          </div>

          <button
            type="submit"
            value="send"
            className="btn btn-outline-primary col-xs-12 col-sm-12 col-md-4 col-lg-4 mt-4"
            onClick={() => window.open("/thank")}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
