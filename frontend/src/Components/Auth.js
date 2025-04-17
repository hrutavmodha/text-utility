import React, { useState, useContext } from "react"
import { ModeContext } from "../ModeContext"
let email;
function Auth() {
    const { mode, light, dark } = useContext(ModeContext);
    const [value, setValue] = useState("")
    const set = (e) => {
        setValue(e.target.value);
    };
    const [EMail, setMail] = useState("");
    const mail = (e) => {
        setMail(e.target.value);
    };
    const name = document.getElementById("name");
    email = document.getElementById("email");
    const poster = () => {
        if (name.value === "" || email.value === "") {
            alert("Please fill all the details")
            return
        }
        if (!(email.value.includes("@") || email.value.includes(".com")) || email.value.includes(" ")) {
            alert("Please enter a valid email")
            return
        }
        else if (email.value && name.value) {
            localStorage.setItem("email", email.value);
            fetch("http://localhost:5000/auth", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    name: name.value,
                    email: email.value,
                })
            }).then((response) => {
                return response.text();
            }).then((data) => {
                alert(data);
            }).catch((error) => {
                alert("Error occurred while sending data")
                console.log(error);
            });
        };
    };
    return (
        <div className="login body">
            <br/><br />
            <br /><br />
            <h1>Log In</h1>
            <br />
            <input type="text" placeholder="Name" id="name" onChange={set} value={value} style={mode ? dark : light}/>
            <br /><br />
            <input type="email" placeholder="EMail" id="email" onChange={mail} value={EMail} style={mode ? dark : light}/>
            <br /><br />
            <button onClick={poster}>Log In</button>
        </div>
    )
}
export default Auth