import React, { useRef, useState, useEffect } from "react";
import { Wrapper, ScrollContainer, CategoryCard, Arrow } from "../../styles/ShopCategoriesStyles.jsx";
import { ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
  { title: "HILATURAS", image: "/Lana.jpg", link: "/tienda/hilaturas" },
  { title: "ACCESORIOS", image: "/Accesorios.jpg", link: "/tienda/accesorios" },
  { title: "TEXTIL", image: "/Textil.jpg", link: "/tienda/textil" },
  { title: "BENDITA FAMILIA", image: "/vivir-la-lana.jpg", link: "/tienda/vivir-la-lana" },
];

const messages = [
  "Proximamente...🐑",
  "Se está tejiendo algo nuevo.",
  "Suscríbete a nuestra Newsletter...",
  "y te avisaremos cuando esté la tienda disponible.",
];

const ShopCategoriesSection = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScrollPosition = () => {
    if (!scrollRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const maxScrollLeft = scrollWidth - clientWidth;
    const tolerance = 2;

    // Logs para depuración
    console.log({ scrollLeft, scrollWidth, clientWidth, maxScrollLeft });

    setCanScrollLeft(scrollLeft > tolerance);
    setCanScrollRight(scrollLeft < maxScrollLeft - tolerance);
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "right" ? 300 : -300,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    setTimeout(checkScrollPosition, 50);

    container.addEventListener("scroll", checkScrollPosition, { passive: true });
    window.addEventListener("resize", checkScrollPosition);

    return () => {
      container.removeEventListener("scroll", checkScrollPosition);
      window.removeEventListener("resize", checkScrollPosition);
    };
  }, []);

  return (
    <Wrapper>
      <h2>Nuestros productos</h2>

      {canScrollLeft && (
        <Arrow className="left" onClick={() => scroll("left")}>
          <ChevronLeft size={28} />
        </Arrow>
      )}

      <ScrollContainer ref={scrollRef}>
        {categories.map((cat, index) => (
          <CategoryCard key={cat.title} href={cat.link} disabled>
  <div className="card-inner">
    <img src={cat.image} alt={cat.title} />
    <div className="overlay-message">
      {messages[index % messages.length]}
    </div>
    <h3>{cat.title}</h3>
  </div>
</CategoryCard>

        ))}
      </ScrollContainer>

      {canScrollRight && (
        <Arrow className="right" onClick={() => scroll("right")}>
          <ChevronRight size={28} />
        </Arrow>
      )}
    </Wrapper>
  );
};

export { ShopCategoriesSection };
