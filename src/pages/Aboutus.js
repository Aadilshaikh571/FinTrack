import React from "react";
import { useNavigate } from "react-router-dom";
import "./Aboutus.css";

const AboutUs = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // Navigates back to the previous page
  };

  return (
    <div className="about-container">
      <button className="back-button" onClick={handleBackClick}>← Back</button>

      <section className="hero-section">
        <h1 className="hero-title">Welcome to Finetrack</h1>
        <p className="hero-subtitle">Empowering You to Master Your Financial Journey</p>
      </section>

      <section className="mission-section">
        <h2 className="section-title">Our Mission</h2>
        <p className="section-description">
          At Finetrack, we are dedicated to providing a simple, intuitive way to manage your personal finances. 
          We believe financial freedom is attainable for everyone, and we're here to make the process smoother and more insightful.
        </p>
      </section>

      <section className="features-section">
        <h2 className="section-title">What We Offer</h2>
        <div className="features-list">
          <div className="feature-card">
            <h3>Track Expenses</h3>
            <p>Record and categorize your spending to see where your money goes.</p>
          </div>
          <div className="feature-card">
            <h3>Set Budgets</h3>
            <p>Stay on top of your budget by setting monthly goals and tracking your progress.</p>
          </div>
          <div className="feature-card">
            <h3>Analyze Trends</h3>
            <p>Gain insights into your spending habits with charts and analytics.</p>
          </div>
        </div>
      </section>

      <section className="values-section">
        <h2 className="section-title">Our Core Values</h2>
        <div className="values-list">
          <div className="value-card">
            <h3>Simplicity</h3>
            <p>Easy-to-use interface with clear and straightforward functionalities.</p>
          </div>
          <div className="value-card">
            <h3>Transparency</h3>
            <p>Your data is secure, and your financial insights are easy to understand.</p>
          </div>
          <div className="value-card">
            <h3>Empowerment</h3>
            <p>Our tools are designed to empower you to make informed financial decisions.</p>
          </div>
        </div>
      </section>

      <section className="team-section">
        <h2 className="section-title">Meet the Team</h2>
        <p className="section-description">
          Finetrack is built by a team of passionate finance and technology enthusiasts committed to helping you achieve financial well-being.
        </p>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Fintrack. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutUs;
