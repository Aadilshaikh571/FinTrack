import React, { useEffect } from "react";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import userImage from "../../assets/user.svg";
import "./style.css"; // Importing the CSS file

const Header = () => {
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);

  // useEffect(() => {
  //   if (user) {
  //     navigate("/dashboard");
  //   }
  // }, [user, loading, navigate]);

  const logoutFnc = async (e) => {
    e.preventDefault();
    try {
      await signOut(auth);
      toast.success("Successfully logged out!",{
        position: "top-center"
      });
      navigate("/");
    } catch (error) {
      toast.error("Error logging out: " + error.message,{
        position:"top-center"
      });
    }
  };

  return (
    <div className="navbar">
      <p className="logo" onClick={() => navigate("/")}>FinTrack</p>
      <div className="nav-links">
        <p className="nav-link" onClick={() => navigate("/")}>Home</p>
        <p className="nav-link" onClick={() => navigate("/services")}>Services</p>
        <p className="nav-link" onClick={() => navigate("/aboutus")}>About Us</p>
        {user && (
          <div className="user-section">
            <img
              src={user.photoURL ? user.photoURL : userImage}
              alt="User Avatar"
              className="user-image"
            />
            <p className="nav-link" onClick={logoutFnc}>Logout</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
