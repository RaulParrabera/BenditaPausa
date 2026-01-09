import React from "react";
import { AboutUs } from "../Home/Aboutus.jsx";
import { NewsletterForm } from "../Home/NewsletterForm.jsx";

const Aboutus = () => {
  return (
    <div>
      <section id="aboutus">
        <AboutUs />
      </section>
      <section className="newsletter-block">
        <NewsletterForm />
      </section>
    </div>
  );
};

export { Aboutus };