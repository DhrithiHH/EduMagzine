"use client";
import React, { useEffect, useRef } from "react";

function Carousel({ content }) {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const slideCount = content.length;
    let currentIndex = 0;

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % slideCount;
      slider.scrollTo({
        left: slider.offsetWidth * currentIndex,
        behavior: "smooth",
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [content]);

  return (
    <>
      <style>{`
        .hide-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;  /* Chrome, Safari, Opera */
        }
      `}</style>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          ref={sliderRef}
          className="hide-scrollbar"
          style={{
            display: "flex",
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            scrollBehavior: "smooth",
            width: "100%",
            height: "20em",
            borderRadius: "12px",
            boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
          }}
        >
          {content.map((point, i) => (
            <div
              key={i}
              style={{
                width: "100%",
                flexShrink: 0,
                scrollSnapAlign: "center",
                backgroundColor: "#fff",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "2rem",
                boxSizing: "border-box",
                margin: "0 1rem",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  color: "#333",
                  fontSize: "1.3rem",
                  lineHeight: "1.6",
                  fontFamily: "Anton, sans-serif",
                  width: "90%",
                  whiteSpace: "normal",
                  wordBreak: "break-word",
                }}
              >
                {point}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Carousel;
