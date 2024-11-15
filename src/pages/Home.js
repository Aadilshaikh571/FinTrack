import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import Header from "../components/header/Header";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Home = () => {
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);

  return (
    <>
      <Header></Header>
      <div className="home-container">
        <header className="header"></header>

        <section className="welcome-section">
          <h1>Welcome to Finetrack</h1>
          <p>
            Your personal finance companion to help you track, analyze, and
            achieve your financial goals with ease.
          </p>
        </section>

        <section className="features-section">
          <h2>What Finetrack Offers</h2>
         
            {user ? (
              <button
                className="dashboard-button"
                onClick={() => navigate("/dashboard")}
              >
                Go to Dashboard
              </button>
            ) : (
              <button
                className="dashboard-button"
                onClick={() => navigate("/signup")}
              >
               Let's Sign Up Now
              </button>
            )}
         
          <div className="feature-card">
            <h3>Comprehensive Income Tracking</h3>
            <p>
              Monitor your income streams effortlessly. Whether it's salary,
              freelancing, or side gigs, track every penny with precision.
            </p>
          </div>

          <div className="feature-card">
            <h3>Expense Management</h3>
            <p>
              Categorize and log expenses for a clearer picture of your spending
              patterns. See where your money goes, making budgeting a breeze.
            </p>
          </div>

          <div className="feature-card">
            <h3>Spending History Overview</h3>
            <p>
              Review your past transactions to understand spending trends and
              make data-driven decisions to manage your finances better.
            </p>
          </div>

          <div className="feature-card">
            <h3>Real-Time Spending Insights</h3>
            <p>
              Access up-to-date insights on your total spending. See how your
              expenditures align with your budget and make adjustments as
              needed.
            </p>
          </div>

          <div className="feature-card">
            <h3>Visual Analytics with Graphs</h3>
            <p>
              Analyze your income and spending trends with interactive graphs,
              giving you the bigger picture of your financial journey.
            </p>
          </div>

          <div className="feature-card">
            <h3>Pie Charts for Spending Categories</h3>
            <p>
              Instantly understand your spending allocation with visual pie
              charts, highlighting the major areas where your money is going.
            </p>
          </div>

          <div className="feature-card">
            <h3>Financial Goal Setting</h3>
            <p>
              Set, track, and achieve financial goals for the month or year. See
              how close you are to reaching your savings or expense goals.
            </p>
          </div>

          <div className="feature-card">
            <h3>Customizable Budgets</h3>
            <p>
              Create and monitor budgets for different categories, helping you
              stay within limits while enjoying the things you love.
            </p>
          </div>
        </section>

        <footer className="footer">
          <p>© {new Date().getFullYear()} Finetrack. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
};

export default Home;
