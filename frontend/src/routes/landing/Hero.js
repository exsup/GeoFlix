import { Link } from "react-router-dom";
import React from 'react'
import { motion } from "framer-motion";
import "react-alice-carousel/lib/alice-carousel.css";
import hero from '../../assets/images/products/1.jpg';

const Hero = () => {
  return (
    <section className="hero-section">
    <img src={hero} alt=""  />
      <section className="header-info flex-container flex-column txt-center pop-font txt-white">
        <motion.div
          initial={{ opacity: 0, translateX: 300 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
        >
          <span>Welcome</span>
          <h1 className="txt-white">GeoFlix Technologies </h1>
          <p className="txt-white">
      
         For Fast & Quick Fix & Purchase Computer & Accessories
          </p>
        </motion.div>

        <div className="header-btns flex-container flex-row">
          <Link className=" passive-button-style" to="/">
            Read Blog
          </Link>
          <Link className=" passive-button-style  " to="/">
            View Menu
          </Link>
        </div>
      </section>

    </section>

  );
}

export default Hero;