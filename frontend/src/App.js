import React, { useContext, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Home, About, Contact, Comments, Auth } from "./Components/Site";
import { ModeContext } from "./ModeContext";
import "./index.css";

function App() {
    const { mode, btn, toggler, light, dark } = useContext(ModeContext);
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    const navbarStyles = {
        container: {
            display: "flex",
            flexDirection: "column",
            padding: "5px",
            backgroundColor: "darkBlue",
            zIndex: 100,
            position: "sticky",
            top: 0
        },
        topRow: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
        },
        title: {
            fontFamily: "Comic Sans MS",
            color: "grey",
            margin: 0,
        },
        navBtn: {
            padding: "5px",
            backgroundColor: "none",
            color: "#fff",
            border: "none",
            cursor: "pointer",
        },
        hamburger: {
            position: "absolute",
            right: "10px",
            top: "10px",
            background: "none",
            border: "none",
            fontSize: "24px",
            color: mode ? "#fff" : "#000",
            cursor: "pointer",
            zIndex: 110,
            transition: "all 0.75s"
        }
    }
    return (
        <div style={mode ? dark : light}>
            <div className="navbar">
                <div className="top-row">
                    <h3 style={navbarStyles.title}>Text Utilities</h3>
                    <div className="right-controls">
                        <button onClick={toggler} style={navbarStyles.darkBtn}>{btn} Mode</button>
                        <button onClick={toggleMenu} className="hamburger">&#9776;</button>
                    </div>
                </div>

                <div className={`nav-links ${menuOpen ? "show" : ""}`}>
                <Link to="/"><button style={navbarStyles.navBtn}>Home</button></Link>
                <Link to="/about"><button style={navbarStyles.navBtn}>About</button></Link>
                <Link to="/contact"><button style={navbarStyles.navBtn}>Contact</button></Link>
                <Link to="/reviews"><button style={navbarStyles.navBtn}>Reviews</button></Link>
                <Link to="/auth"><button style={navbarStyles.navBtn}>Log In</button></Link>
            </div>
        </div>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/reviews" element={<Comments />} />
    </Routes>
		</div >
	);
}

export default App;
