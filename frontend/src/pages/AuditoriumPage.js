import React from "react";
import { Link } from "react-router-dom";
import "../styles/ServiceShowcase.css";

import audImg1 from "../assets/pics/IMG-20260227-WA0021.jpg.jpeg";
import audImg2 from "../assets/pics/IMG-20260227-WA0022.jpg.jpeg";
import audImg3 from "../assets/pics/IMG-20260227-WA0023.jpg.jpeg";
import audImg4 from "../assets/pics/IMG-20260227-WA0024.jpg.jpeg";
import audImg5 from "../assets/pics/IMG-20260227-WA0025.jpg.jpeg";
import audImg6 from "../assets/pics/IMG-20260227-WA0026.jpg.jpeg";
import audImg7 from "../assets/pics/IMG-20260227-WA0027.jpg.jpeg";
import audImg8 from "../assets/pics/IMG-20260227-WA0028.jpg.jpeg";
import audImg9 from "../assets/pics/IMG-20260227-WA0029.jpg.jpeg";

const auditoriumGallery = [
  {
    image: audImg1,
    title: "Grand Entrance",
    caption: "A welcoming entrance design that creates a strong first impression.",
  },
  {
    image: audImg2,
    title: "Stage And Spotlight",
    caption: "Well-lit stage setup ideal for ceremonies, performances, and speeches.",
  },
  {
    image: audImg3,
    title: "Spacious Seating",
    caption: "Comfortable seating layout planned for smooth guest movement.",
  },
  {
    image: audImg4,
    title: "Premium Interiors",
    caption: "Elegant hall interiors with decor flexibility for any event style.",
  },
  {
    image: audImg5,
    title: "Ceremony Ready",
    caption: "Complete ambience setup suitable for weddings and engagement events.",
  },
  {
    image: audImg6,
    title: "Reception Flow",
    caption: "Wide event area designed for dining zones, stage access, and photography.",
  },
  {
    image: audImg7,
    title: "Decor Detailing",
    caption: "Creative decor touchpoints that bring your theme to life.",
  },
  {
    image: audImg8,
    title: "Event-Scale Capacity",
    caption: "High-capacity layout options for intimate to large guest lists.",
  },
  {
    image: audImg9,
    title: "Evening Ambience",
    caption: "Warm evening lighting that elevates the celebration atmosphere.",
  },
];

const AuditoriumPage = () => {
  return (
    <main className="service-page auditorium-theme">
      <section className="service-hero">
        <div className="hero-copy">
          <p className="eyebrow">Auditorium Spaces</p>
          <h1>Beautiful Venues For Every Celebration</h1>
          <p className="hero-summary">
            Discover thoughtfully designed auditoriums with flexible layouts, premium
            ambience, and event-ready infrastructure for weddings, receptions, and
            cultural functions.
          </p>
          <div className="hero-actions">
            <Link to="/booking" className="hero-btn primary-btn">
              Book Auditorium
            </Link>
            <Link to="/" className="hero-btn ghost-btn">
              Back To Home
            </Link>
          </div>
        </div>
      </section>

      <section className="service-highlights">
        <article>
          <h3>Flexible Hall Capacity</h3>
          <p>
            Choose layouts for intimate gatherings or grand events with stage and
            seating configurations that fit your plan.
          </p>
        </article>
        <article>
          <h3>Modern Event Facilities</h3>
          <p>
            Access lighting support, sound compatibility, dressing spaces, and
            service access points for smooth event operations.
          </p>
        </article>
        <article>
          <h3>Premium Event Ambience</h3>
          <p>
            Create memorable experiences with polished interiors, decor-friendly
            structure, and guest-first circulation.
          </p>
        </article>
      </section>

      <section className="service-gallery-section">
        <h2>Auditorium Gallery</h2>
        <p className="section-intro">
          Explore real venue spaces and setup options from your uploaded collection.
        </p>
        <div className="service-gallery">
          {auditoriumGallery.map((item) => (
            <figure key={item.title} className="gallery-card">
              <img src={item.image} alt={item.title} />
              <figcaption>
                <h4>{item.title}</h4>
                <p>{item.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
};

export default AuditoriumPage;
