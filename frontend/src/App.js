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
            padding: "10px",
            backgroundColor: mode ? "#222" : "#f5f5f5",
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
        navLinks: {
            display: menuOpen ? "flex" : "none",
            flexDirection: "column",
            marginTop: "10px",
        },
        navBtn: {
            margin: "4px 0",
            padding: "8px 12px",
            backgroundColor: "#555",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
        },
        darkBtn: {
            padding: "8px 12px",
            marginLeft: "10px",
            backgroundColor: "#444",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
        },
        hamburger: {
            background: "none",
            border: "none",
            fontSize: "24px",
            color: mode ? "#fff" : "#000",
            cursor: "pointer",
        },
    };

    return (
        <div style={mode ? dark : light}>
            <div style={navbarStyles.container}>
                <div style={navbarStyles.topRow}>
                    <h3 style={navbarStyles.title}>Text Utilities</h3>
                    <div>
                        <button onClick={toggler} style={navbarStyles.darkBtn}>{btn} Mode</button>
                        <button onClick={toggleMenu} style={navbarStyles.hamburger}>
                            &#9776;
                        </button>
                    </div>
                </div>
                <div style={navbarStyles.navLinks}>
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
        </div>
    );
}

export default App;