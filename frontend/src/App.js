import React, { useContext } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Home, About, Contact, Comments, Auth } from "./Components/Site";
import { ModeContext } from "./ModeContext";
import "./index.css";
function App() {
    const { mode, btn, toggler, light, dark } = useContext(ModeContext); 
    return (
        <div style={mode ? dark : light}>
            <div className="navbar">
            <h3 style={{fontFamily: "Comic Sans MS", color: "grey"}}>Text Utility App</h3>
                <Link to="/">
                    <button className="navbtn">Home</button>
                </Link>
                <Link to="/about">
                    <button className="navbtn">About</button>
                </Link>
                <Link to="/contact">
                    <button className="navbtn">Contact</button>
                </Link>
                <Link to="/reviews">
                    <button className="navbtn">Reviews</button>
                </Link>
                <Link to="/auth">
                    <button className="navbtn">Log In</button>
                </Link>
                <button onClick={toggler} style={{ cursor: "pointer", color: "#fff" }} className="navbtn">{btn} Mode</button>

            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/reviews" element={<Comments />} />
            </Routes>
        </div>
    )
}
export default App