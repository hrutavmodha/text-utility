import React, { useState, useContext } from "react";
import { ModeContext } from "../ModeContext";

function Auth() {
    const { mode, light, dark } = useContext(ModeContext);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = () => {
        if (!name || !email || !password) {
            alert("Please fill all the details");
            return;
        }
        if (!(email.includes("@") && email.includes(".com")) || email.includes(" ")) {
            alert("Please enter a valid email");
            return;
        }
        if (password.length < 8 || password.length > 20) {
            alert("Password must be 8-20 characters long");
            return;
        }

        // Good to go
        fetch(`${process.env.REACT_APP_BACKEND_URL}/auth`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, password })
        })
            .then((response) => response.text())
            .then((data) => {
                alert(data);
                localStorage.setItem("name", name);
            })
            .catch((error) => {
                alert("Error occurred");
                console.error(error);
            });
    };

    return (
        <div className="login body">
            <br/><br/><br/><br/>
            <h1>Log In</h1>
            <br/><br/>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} style={mode ? dark : light} />
            <br/><br/>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} style={mode ? dark : light} />
            <br/><br/>
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={mode ? dark : light} maxLength={20} minLength={8} />
            <br/><br/>
            <button onClick={handleSubmit}>Log In</button>
        </div>
    );
}

export default Auth;
