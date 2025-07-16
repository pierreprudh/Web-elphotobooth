import React, { useEffect, useRef } from "react";

const logos = [
  "blr.svg",
  "fcblr.png",
  "sceaux.svg",
  "generali.svg",
  "howden.svg",
  "ms amlin.png",
  "orpea.png",
];

export const PartnerSection = () => {
  const slideTrackRef = useRef(null);

  // The slideTrackRef is kept in case you want to use it for other purposes.

  return (
    <>
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        Ils nous font confiance
      </h2>
      <style>
        {`
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
      <div
        className="partner-section"
        style={{
          overflow: "hidden",
          background: "transparent",
          padding: "20px 0",
        }}
      >
        <div
          className="slider"
          style={{
            height: "100px",
            position: "relative",
            width: "100%",
            overflow: "hidden",
            marginBottom: "20px",
          }}
        >
          <div
            className="slide-track"
            style={{
              display: "flex",
              minWidth: "200%",
              animation: "scroll-left 60s linear infinite",
            }}
          >
            {logos.concat(logos).map((logo, index) => (
              <div
                className="slide"
                key={`top-${index}`}
                style={{
                  height: "100px",
                  width: "250px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "transform 0.3s ease",
                }}
              >
                <img
                  src={`/partners logo/${logo}`}
                  alt={`Top Partner ${index}`}
                  style={{
                    maxHeight: "80px",
                    maxWidth: "100%",
                    objectFit: "contain",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};