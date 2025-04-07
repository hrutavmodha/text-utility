import React, { useState } from "react";
let email;
function Auth() {
    const [value, setValue] = useState("")
    const set = (e) => {
        setValue(e.target.value);
    };
    const [EMail, setMail] = useState("");
    const mail = (e) => {
        setMail(e.target.value);
    };
    const [date, setDob] = useState("");
    const Nd = (e) => {
        setDob(e.target.value);
    }
    const name = document.getElementById("name");
    email = document.getElementById("email");
    const dob = document.getElementById("dob");
    const poster = () => {
        localStorage.setItem("email", email.value);
        fetch("http://localhost:5000/auth", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                name: name.value,
                email: email.value,
                dob: dob.value
            })
        }).then((response) => {
            return response.text()
        }).then((data) => {
            alert(data);
        }).catch((error) => {
            alert("Error occurred while sending data")
            console.log(error);
        })
    };
    return (
        <>
            <div className="login" style={{ border: "none", background: "none"}}>
            <h1>Log In</h1>
                <br />
                <input type="text" placeholder="Name" id="name" onChange={set} value={value} />
                <br /><br />
                <input type="email" placeholder="EMail" id="email" onChange={mail} value={EMail} />
                <br /><br />
                <p style={{ transform: "translateX(-60px)", }}>Date of Birth:</p>
                <input type="date" id="dob" onChange={Nd} value={date} />
                <br /><br />
                <button onClick={poster}>Log In</button>
            </div>
        </>
    )
}
export default Auth 
