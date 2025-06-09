"use client";
import React, { use } from "react";
import { useSearchParams } from "next/navigation"; 
import profileData from "/data/profile.json";
import Carousel from "./Carousel";
import useInView from "./useInView.jsx"; // adjust path as needed

function RevealSection({ children }) {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <div ref={ref} className={`reveal ${inView ? "in-view" : ""}`}>
      {children}
    </div>
  );
}

export default function InfosysLayout({params}) {
    //   const searchParams = useSearchParams();
    // eslint-disable-next-line @next/next/no-sync-scripts
    console.log("Params:", React.use(params).slug);
    let slug = React.use(params).slug
    
    // const { slug } = params;
    
    const profile = profileData.find((p) => p.slug === slug);
    console.log("Profile:", profile);
    if (!profile) return <div style={{ padding: "2rem", textAlign: "center" }}>Loading or profile not found...</div>;
    
    const middleSections = profile.sections.slice(2, profile.sections.length - 2);

  const sectionStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "2rem",
    margin: "3rem auto",
    width: "80vw",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const imgStyle = {
    width: "40%",
    objectFit: "cover",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
  };

  const textStyle = {
    flex: "1 1 500px",
    color: "#001f4d",
  };

  const headingStyle = {
    color: "#001f4d",
    fontWeight: "700",
  };

  return (
    <div
      style={{
        fontFamily: "'Poppins', sans-serif",
        backgroundColor: "#f9fbfd",
        padding: "2rem",
      }}
    >
      {/* Header */}
      <RevealSection>
      <section style={{ ...sectionStyle, justifyContent: "center" }}>
        <h1
          style={{
            fontSize: "4rem",
            fontWeight: "800",
            color: "#001f4d",
            marginBottom: "1rem",
          }}
        >
          {profile.name}
        </h1>
      </section></RevealSection>

      {/* Hero Section */}
      <RevealSection> 
      <section style={sectionStyle}>
        <div style={{ width: "50%" }}>
          <p
            style={{
              fontSize: "1.4rem",
              color: "#001f4d",
              marginBottom: "1.5rem",
              lineHeight: "1.6",
              width: "90%",
              fontWeight:"bold"
            }}
          >
            {profile.title}
          </p>
          <p
            style={{
              fontSize: "0.9rem",
              color: "#001f4d",
              marginBottom: "1.5rem",
              lineHeight: "1.6",
              width: "70%",
              textAlign: "justify",
            }}
          >
            {profile.summary}
          </p>
        </div>
        <img
          src={profile.sections[0].image}
          alt={profile.name}
          style={{
            flex: "1 1 400px",
            width: "100%",
            maxWidth: "450px",
            objectFit: "cover",
            boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
          }}
        />
      </section>
        </RevealSection>
      {/* Section 1 */}
      <RevealSection>
      <section
        style={{
          ...sectionStyle,
          backgroundColor: "#3b82f6",
          padding: "2rem",
          borderRadius: "8px",
        }}
      >
        <img
          src={profile.sections[1].image}
          alt={profile.sections[0].heading}
          style={{ ...imgStyle, width: "30%", height: "25em" }}
        />
        <div
          style={{
            ...textStyle,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "50%",
            height: "20em",
          }}
        >
          <div>
            <h2 style={{ fontSize: "1.4rem", ...headingStyle, color: "#fff" }}>
              {profile.sections[0].heading}
            </h2>
            <p style={{ color: "#fff" }}>{profile.sections[0].content}</p>
          </div>
          <div>
            <h2 style={{ fontSize: "1.4rem", ...headingStyle, color: "#fff" }}>
              {profile.sections[1].heading}
            </h2>
            <p style={{ color: "#fff" }}>{profile.sections[1].content}</p>
          </div>
        </div>
      </section>

        </RevealSection>
      {middleSections.map((section, index) => (
        <RevealSection key={index}>
          <section style={sectionStyle}>
            {index % 2 === 0 ? (
              <>
                <img
                  src={section.image}
                  alt={section.heading}
                  style={imgStyle}
                />
                <div style={textStyle}>
                  <h2 style={{ fontSize: "1.5rem", ...headingStyle }}>
                    {section.heading}
                  </h2>
                  <p>{section.content}</p>
                </div>
              </>
            ) : (
              <>
                <div style={textStyle}>
                  <h2 style={{ fontSize: "1.5rem", ...headingStyle }}>
                    {section.heading}
                  </h2>
                  <p>{section.content}</p>
                </div>
                <img
                  src={section.image}
                  alt={section.heading}
                  style={imgStyle}
                />
              </>
            )}
          </section>
        </RevealSection>
      ))}
      {/* Section 6 - Carousel */}
      <RevealSection>
      <section style={{ padding: "2rem 0" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "2rem",
            paddingLeft: "10rem",
            flexWrap: "wrap",
          }}
        >
          <h2
            style={{
              fontSize: "1.8rem",
              marginBottom: "1rem",
              paddingLeft: "1rem",
              color: "#001f4d",
              fontWeight: "700",
            }}
          >
            {profile.sections[profile.sections.length-2].heading}
          </h2>
        </div>

        <div
          style={{
            ...sectionStyle,
            display: "flex",
            flexDirection: "row",
            gap: "2rem",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem",
            flexWrap: "nowrap",
          }}
        >
          {/* Carousel */}
          <div style={{ flex: 1, minWidth: "50%" }}>
            {console.log("Carousel Content:", profile.sections[profile.sections.length-2].content)}
            <Carousel content={profile.sections[profile.sections.length-2].content} />
          </div>

          {/* Image */}
          <img
            src={profile.sections[profile.sections.length-2].image}
            alt={profile.sections[5].heading}
            style={{ ...imgStyle, width: "40%" }}
          />
        </div>
      </section>
      </RevealSection>
    </div>
  );
}
