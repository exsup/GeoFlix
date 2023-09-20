import React, { useEffect } from "react";
import Header from "./Hero";
import ScrollButton from "../../components/ScrollBtn";
import ContactUsLanding from "./ContactUsLanding";
import OurServices from "./OurServices";
import PizzaMenuPreview from "./PizzaMenuPreview";
import BlogPreview from "./BlogPreview";
import Newsletter from "./Newsletter";
import ResetLocation from "../../helpers/ResetLocation";

const RootSection = () => {
  useEffect(() => {
    document.title = "GeoFlix Technologies";
    ResetLocation();
  }, []);
  return (
    <React.Fragment>
      <Header />
     
      <OurServices />
      <Newsletter />
      <PizzaMenuPreview />
    
    
    
      <BlogPreview />
      <ContactUsLanding />
      <ScrollButton />
    </React.Fragment>
  );
}

export default RootSection;
