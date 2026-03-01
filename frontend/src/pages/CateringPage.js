import React from "react";
import { Link } from "react-router-dom";
import "../styles/ServiceShowcase.css";

import caterImg1 from "../assets/pics/catering-food-wedding-event-table.jpg.jpeg";
import caterImg2 from "../assets/pics/Wedding_catering.jpg.jpeg";
import caterImg3 from "../assets/pics/wedding-catering-services-in-kolkata-with-gharoa-catering-.jpg.jpeg";
import caterImg4 from "../assets/pics/best-dessert-catering-in-canton.png";
import caterImg5 from "../assets/pics/dessert-buffet-ideas-thumb (1).jpg.jpeg";
import caterImg6 from "../assets/pics/36089d4a1c808586b5907ae7477f87be.jpg.jpeg";

const cateringGallery = [
  {
    image: caterImg1,
    title: "Grand Buffet Setup",
    caption: "Elegant multi-counter buffet arrangement for weddings and receptions.",
  },
  {
    image: caterImg2,
    title: "Signature Main Course",
    caption: "Balanced veg and non-veg menus designed for every guest preference.",
  },
  {
    image: caterImg3,
    title: "Live Service Experience",
    caption: "Professional serving teams that keep your event smooth and welcoming.",
  },
  {
    image: caterImg4,
    title: "Dessert Studio",
    caption: "Premium dessert table with plated sweets, mini pastries, and custom treats.",
  },
  {
    image: caterImg5,
    title: "Celebration Sweets Corner",
    caption: "Colorful dessert counters styled to match your event theme.",
  },
  {
    image: caterImg6,
    title: "Fine Dining Finish",
    caption: "Refined presentation that makes each plate camera-ready and memorable.",
  },
];

const CateringPage = () => {
  return (
    <main className="service-page catering-theme">
      <section className="service-hero">
        <div className="hero-copy">
          <p className="eyebrow">Catering Service</p>
          <h1>Curated Menus For Memorable Celebrations</h1>
          <p className="hero-summary">
            From traditional feasts to modern fusion spreads, our catering service
            delivers taste, presentation, and punctual execution for every event size.
          </p>
          <div className="hero-actions">
            <Link to="/booking" className="hero-btn primary-btn">
              Book Catering
            </Link>
            <Link to="/" className="hero-btn ghost-btn">
              Back To Home
            </Link>
          </div>
        </div>
      </section>

      <section className="service-highlights">
        <article>
          <h3>Custom Menu Planning</h3>
          <p>
            Work with our team to craft regional, continental, and themed menus
            based on your guest count and preferences.
          </p>
        </article>
        <article>
          <h3>Live Counters</h3>
          <p>
            Add excitement with live chaat, grill, dessert, and beverage stations
            that keep guests engaged throughout the event.
          </p>
        </article>
        <article>
          <h3>End-To-End Service</h3>
          <p>
            We handle food preparation, setup, serving, and cleanup so you can focus
            on your celebration.
          </p>
        </article>
      </section>

      <section className="service-gallery-section">
        <h2>Catering Gallery</h2>
        <p className="section-intro">
          A quick look at menu styling, service quality, and dessert presentation.
        </p>
        <div className="service-gallery">
          {cateringGallery.map((item) => (
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

export default CateringPage;
