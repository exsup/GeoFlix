import React from "react";
import { motion } from "framer-motion";
//Leaflet


const ContactLanding = () => {
  return (
    <article className="section-10  flex-container flex-column">
  
       
     
      <motion.div
        className="contact-emails"
        initial={{ opacity: 0, translateX: 300 }}
        whileInView={{ opacity: 1, translateX: 0 }}
        exit={{ opacity: 0, translateX: 300 }}
        transition={{ duration: 2 }}
      >
        <h3>Contact Us</h3>
        <p>Have a question, suggestion, or just want to say hello? We'd love to hear from you!</p>
        <br></br>
        <section>
          <h4>Customer Support:</h4>
          <p>Our dedicated customer support team is ready to assist you with any inquiries you may have.</p>
          <ul>
            <li>- Email: info@geoflixtechnologies.com</li>
            <li>- Phone: +(254)731-410-713
</li>
            <li>- Hours: Monday - Friday, 8:00am - 9:00pm (EST)</li>
          </ul>
        </section>
        <section>
          <h4>General Inquiries:</h4>
          <p>If you have general questions about our company, partnerships, or anything else, feel free to get in touch.</p>
          <ul>
            <li>- Email: info@geoflixtechnologies.com</li>
          </ul>
        </section>
        <section>
          <h4>Feedback and Suggestions:</h4>
          <p>We value your feedback and are always striving to improve. If you have any suggestions, comments, or ideas on how we can enhance our offerings, please let us know.</p>
          <ul>
            <li>- Email: feedback@geoflixtechnologies.com</li>
          </ul>
        </section>
      </motion.div>
    </article>
  );
}


export default ContactLanding;
