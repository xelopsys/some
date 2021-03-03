import React from "react";
import next from "next";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Map() {
  return (
    <div className={styles.map} id="map">
      <iframe className="w-100 h-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1498.209890110768!2d69.2635970718468!3d41.321484390224285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b235b5d54af%3A0x38ae0e9123fc6dd0!2sSecureInvestment!5e0!3m2!1sen!2s!4v1614770801899!5m2!1sen!2s"></iframe>
    </div>
  );
}
