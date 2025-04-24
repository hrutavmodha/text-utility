import React, { useContext, useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Home, About, Contact, Comments, Auth } from "./Components/Site";
import { ModeContext } from "./ModeContext";
import "./index.css";

function App() {
    let pass;
    const { mode, btn, toggler, light, dark } = useContext(ModeContext);
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);
    useEffect(() => {
        const navLinks = document.querySelector(".nav-links");
        if (navLinks) {
            navLinks.style.animation = "none";
            setTimeout(() => {
                navLinks.style.animation = ""; // Reset so future animations work
            }, 100); // slight delay to skip animation only on first render
        }
    }, []);
    const verify = () => {
        // eslint-disable-next-line
        const loutp = confirm("Are you sure you want to logout ?");
        if (loutp) {
            fetch(`${process.env.REACT_APP_BACKEND_URL}/auth`, {
                method: "DELETE",
            }).then((response) => {
                return response.text();
            }).then((data) => {
                alert(data);
            }).catch((error) => {
                alert("Error occurred while logging out");
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

                <div className={`nav-links ${menuOpen ? "show" : "hide"}`}>
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
