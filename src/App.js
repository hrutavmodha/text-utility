import React, {useState} from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Home, About, Contact, Comments, Auth } from "./Components/Site";
import "./index.css";
function App() {
    const [btn, setBtn] = useState("Dark")
    const [mode, setMode] = useState(false)
    const light = {
        backgroundColor: "white",
        color: "black",
        transition: "all 0.75s",
        border: "2px solid black"
    }
    const dark = {
        backgroundColor: "black",
        color: "white",
        transition: "all 0.75s",
        border: "2px solid white"
    }
    const toggler = () => {
        setMode(!mode)
        if (btn === "Dark")
            setBtn("Light")
        if (btn === "Light")
            setBtn("Dark")
    }
    return (
        <div style={mode ? dark : light}>
            <div className="navbar">
                <ul>
                    <Link to="/">
                        <button className="navbtn">Home</button>
                    </Link>
                    <Link to="/about">
                        <button className="navbtn">About</button>
                    </Link>
                    <Link to="/contact">
                        <button className="navbtn">Contact</button>
                    </Link>
                    <Link to="/auth">
                        <button className="navbtn">Log In</button>
                    </Link>
                    <Link to="/reviews">
                        <button className="navbtn">Reviews</button>
                    </Link>
                    <p onClick={toggler} style={{cursor: "pointer", transform: "translate(190px,12px)", color:"#fff" }}>{btn} Mode</p>
                </ul>
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