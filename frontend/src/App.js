import React, { useContext, useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Home, About, Contact, Comments, Auth } from "./Components/Site";
import { ModeContext } from "./ModeContext";
import "./index.css";

function App() {
    let pass;
    const { mode, btn, toggler, light, dark } = useContext(ModeContext);
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen)
    useEffect(() => {
      const el = document.getElementById("navLinks");
        if (el && el.classList.contains("hide")) {
          el.classList.remove("hide");
        }
    }, []);
    const verify = () => {
        // eslint-disable-next-line
        const loutp = confirm("Are you sure you want to logout ?");
        if (loutp) {
            fetch(`${process.env.REACT_APP_BACKEND_URL}/auth`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: localStorage.getItem("email")
                })
            }).then((response) => {
                return response.json();
            }).then((data) => {
                if (data?.error) {
                    alert(data.error);
                } else if (data?.deletedCount === 0) {
                    alert("You haven't logged in");
                } else if (data?.deletedCount === 1) {
                    alert("You have logged out successfully");
                } else {
                    alert("An error occured");
                }
            }).catch((error) => {
                alert("An error occured while logging you out. Please try again later");
                console.log(error);
            });
        }
    }
    return (
        <div style={mode ? dark : light}>
            <div className="navbar">
                <div className="navbar-top">
                    <h3 style={{ color: "lightgrey", fontFamily: "Comic Sans MS", textAlign: "center" }}>Text Utilities</h3>
                    <div className="nav-controls">
                        <button onClick={verify} className="logout-btn">Logout</button>
                        <button onClick={toggler} className="darkmode-btn">{btn} Mode</button>
                        <button onClick={toggleMenu} className="hamburger">&#9776;</button>
                    </div>
                </div>
<div id="navLinks" className={`nav-links ${menuOpen ? "show" : "hide"}`}>
                    <Link to="/">
                        <button>Home</button>
                    </Link>
                    <Link to="/about">
                        <button>About</button>
                    </Link>
                    <Link to="/contact">
                        <button>Contact</button>
                    </Link>
                    <Link to="/reviews">
                        <button>Reviews</button>
                    </Link>
                    <Link to="/auth">
                        <button>Login</button>
                    </Link>
                </div>
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/reviews" element={<Comments />} />
            </Routes>
        </div>
    );
}

export default App;
