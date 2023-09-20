import React from 'react'
import { motion } from "framer-motion";
import Sita from '../../assets/images/products/6.jpg'
import Asd from '../../assets/images/products/10.jpg'
import Laps from '../../assets/images/products/5.jpg'
import Tatu from '../../assets/images/products/3.jpg'



const ContactUsLanding = () => {
  return (
    <section className="contact-us-landing flex-container flex-row txt-white" >
      <motion.div
        initial={{ opacity: 0, translateX: 1000 }}
        whileInView={{ opacity: 0.8, translateX: 500, }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
      >
        <img src={Sita} alt="" className="parallax company-details-image" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, translateX: 1000 }}
        whileInView={{ opacity: 0.8, translateX: 800, }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
      >
        <img src={Asd} alt="" className="parallax company-details-image" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, translateX: 1000 }}
        whileInView={{ opacity: 0.8, translateX: 1100, }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
      >
        <img src={Laps} alt="" className="parallax company-details-image-three" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, translateX: 1000 }}
        whileInView={{ opacity: 0.8, translateX: 1400, }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
      >
        <img src={Tatu} alt="" className="parallax company-details-image-three" />
      </motion.div>
  
      <section className='company-details'>
        <div>
          <h2>+(254)731-410-713</h2>
          <p>Contact us if you have any questions</p>
        </div>
        <div>
          <h2>10100, Kimathi ,
Prestige Plaza, second floor, Room 207. </h2>
          <p>
Nyeri, Kenya</p>
        </div>
        <div>
          <h2>Open Monday-Friday</h2>
          <p>8:00am - 9:00pm</p>
        </div>
      </section>
    </section>
  );

}


export default ContactUsLanding;