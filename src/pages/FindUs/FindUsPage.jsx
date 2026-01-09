import React from "react";
import { FindUs } from "../Home/FindUs.jsx";
import { Instagram } from "../Home/Instagram.jsx";

const FindUsPage = () => {
  return (
    <div>
      <section className="findus-block">
        <FindUs />
      </section>
      <section className="instagram-block">
        <Instagram />
      </section>
    </div>
  );
};

export { FindUsPage };