// GlareCard.jsx
import React, { useEffect, useRef } from "react";
import "./GlareCard.css";
import gsap from "gsap";

export const GlareCard = ({ children, className }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const state = {
      glare: { x: 50, y: 50 },
      rotate: { x: 0, y: 0 },
    };

    const updateStyle = () => {
      if (!card) return;
      card.style.setProperty("--glare-x", `${state.glare.x}%`);
      card.style.setProperty("--glare-y", `${state.glare.y}%`);

      gsap.to(card, {
        rotateY: state.rotate.x,
        rotateX: state.rotate.y,
        transformPerspective: 600,
        transformOrigin: "center",
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const posX = e.clientX - rect.left;
      const posY = e.clientY - rect.top;
      const percentX = (100 / rect.width) * posX;
      const percentY = (100 / rect.height) * posY;

      state.glare.x = percentX;
      state.glare.y = percentY;

      const deltaX = percentX - 50;
      const deltaY = percentY - 50;

      state.rotate.x = -(deltaX / 5);
      state.rotate.y = deltaY / 5;

      updateStyle();
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        rotateY: 0,
        rotateX: 0,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className={`glare-card-container ${className}`} ref={cardRef}>
      <div className="glare-overlay" />
      <div className="glare-content">{children}</div>
    </div>
  );
};
