import React from "react";
import { useNavigate } from "react-router-dom";
import "./Services.css";

const Services = () => {
  const navigate = useNavigate();

  const handleLearnMore = (service) => {
    alert(`Explore the possibilities with ${service}!`);
  };

  return (
    <div className="services-container">
      <button className="back-button" onClick={() => navigate(-1)}>← Back</button>

      <section className="hero-section">
        <h1 className="hero-title">Finetrack Services</h1>
        <p className="hero-subtitle">
          Comprehensive tools and insights to help you build a secure financial future.
        </p>
      </section>

      <section className="services-section">
        <h2 className="section-title">Our Premium Services</h2>
        <div className="service-cards">
          <div className="service-card">
            <img src="https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Expense Tracking" className="service-image"/>
            <h3>Expense Tracking</h3>
            <p>Automatically categorize and track every expense, helping you gain visibility over where your money goes.</p>
            <button className="learn-more-button" onClick={() => handleLearnMore("Expense Tracking")}>Learn More</button>
          </div>

          <div className="service-card">
            <img src="https://images.unsplash.com/photo-1611944212129-29977ae1398c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Budget Planning" className="service-image"/>
            <h3>Budget Planning</h3>
            <p>Stay on track with personalized budgets that adjust based on your spending and saving goals.</p>
            <button className="learn-more-button" onClick={() => handleLearnMore("Budget Planning")}>Learn More</button>
          </div>

          <div className="service-card">
            <img src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Investment Insights" className="service-image"/>
            <h3>Investment Insights</h3>
            <p>Receive expert advice and insights on managing your investments and growing your wealth.</p>
            <button className="learn-more-button" onClick={() => handleLearnMore("Investment Insights")}>Learn More</button>
          </div>

          <div className="service-card">
            <img src="https://images.unsplash.com/photo-1596526131090-bcbe09e432d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZ3JhbW1lciUyMGljb258ZW58MHx8MHx8fDA%3D" alt="Debt Management" className="service-image"/>
            <h3>Debt Management</h3>
            <p>Analyze and strategize debt repayment options to reduce interest payments and pay off debt faster.</p>
            <button className="learn-more-button" onClick={() => handleLearnMore("Debt Management")}>Learn More</button>
          </div>

          <div className="service-card">
            <img src="https://images.unsplash.com/photo-1664382951070-70a6e4ef8ed0?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Financial Analytics" className="service-image"/>
            <h3>Financial Analytics</h3>
            <p>Access data-driven insights to understand spending trends and improve your financial decision-making.</p>
            <button className="learn-more-button" onClick={() => handleLearnMore("Financial Analytics")}>Learn More</button>
          </div>

          <div className="service-card">
            <img src="https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Reports and Summaries" className="service-image"/>
            <h3>Reports and Summaries</h3>
            <p>Generate in-depth reports and summaries of your finances to keep you informed of your progress.</p>
            <button className="learn-more-button" onClick={() => handleLearnMore("Reports and Summaries")}>Learn More</button>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2 className="cta-title">Ready to Take Control?</h2>
        <p className="cta-description">
          Join Finetrack today and unlock a world of financial clarity and empowerment.
        </p>
        <button className="cta-button" onClick={() => navigate("/signup")}>Sign Up Now</button>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Fintrack. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Services;
