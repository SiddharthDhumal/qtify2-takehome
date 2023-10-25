import React from "react";
import styles from "./Hero.module.css";
import heroImg from "../../assets/vibrating-headphone 1.png";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div>
        <h1>100 Thousand Songs,ad-free</h1>
        <h1>Over thousand poadcast episode</h1>
      </div>
      <div>
        <img src={heroImg} alt="headphones" width={212} />
      </div>
    </div>
  );
};

export default Hero;
