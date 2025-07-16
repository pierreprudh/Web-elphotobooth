import React, { useEffect, useRef } from "react";

const logos = [
  "blr.svg",
  "fcblr.png",
  "sceaux.svg",
];

export const PartnerSection = () => {
  const slideTrackRef = useRef(null);

  useEffect(() => {
    const slideTrack = slideTrackRef.current;
    if (!slideTrack) return;

    const logos = Array.from(slideTrack.children);
    logos.forEach((logo) => {
      const clone = logo.cloneNode(true);
      slideTrack.appendChild(clone);
    });
  }, []);

  return (



    <>
      <style>
        {`
          @keyframes scroll {
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
          }}
        >
          <div
            className="slide-track"
            ref={slideTrackRef}
            style={{
              display: "flex",
              minWidth: "200%",
              animation: "scroll 60s linear infinite",
            }}
          >
            {logos.map((logo, index) => (
              <div
                className="slide"
                key={index}
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
                  alt={`Partner ${index}`}
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