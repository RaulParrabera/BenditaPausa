import React, { useState } from "react";
import { HeroSection } from "../../styles/HeroSectionStyles.jsx";
import { ShopCategoriesSection } from "../../pages/Home/ShopCategories.jsx";


const Home = () => {
  return (
    <div className="home">
      <HeroSection>
      <h1 className="mainline">
        Descubre <br /> el arte de <br />la pausa
      </h1>
        <h5 className="subheadline">del campo <br />a tus agujas</h5>
        <button onClick={() => window.location.href = "/tienda"}>Explorar tienda</button>
      </HeroSection>

      <ShopCategoriesSection />

  </div>


  );
};




export { Home };
