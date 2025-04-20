import React, { useContext, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Home, About, Contact, Comments, Auth } from "./Components/Site";
import { ModeContext } from "./ModeContext";
import "./index.css";

function App() {
    const { mode, btn, toggler, light, dark } = useContext(ModeContext);
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <div style={mode ? dark : light}>
            <div className="navbar">
                <div className="navbar-top">
                    <h3 style={{color: "lightgrey", fontFamily: "Comic Sans MS"}}>Text Utilities</h3>
                    <button className="logout" onClick={verify} style={{ transform: "translateX(-40vw)" }}>Logout</button>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <button onClick={toggler}>{btn} Mode</button>
                        <button onClick={toggleMenu} className="hamburger">&#9776;</button>
                    </div>
                </div>

                <div className={`nav-links ${menuOpen ? "show" : ""}`}>
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