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
    const [PValue, setPValue] = useState("");
    const setP = (e) => {
        setPValue(e.target.value);
    }
    const name = document.getElementById("name");
    email = document.getElementById("email");
    const poster = () => {
        if (name.value === "" || email.value === "") {
            alert("Please fill all the details")
            return
        }
        else if (!(email.value.includes("@") || email.value.includes(".com")) || email.value.includes(" ")) {
            alert("Please enter a valid email")
            return
        }
        else if (PValue === "") {
            alert("Please enter a password")
            return
        }
        else if (PValue.length < 8) {
            alert("Password must be at least 8 characters long")
            return
        }
        else if (PValue.length > 20) {
            alert("Password must be less than 20 characters long")
            return
        }
        else if (email.value && name.value && PValue) {
            localStorage.setItem("email", email.value);
            fetch(`${process.env.REACT_APP_BACKEND_URL}/auth`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    name: name.value,
                    email: email.value,
                    password: PValue,
                })
            }).then((response) => {
                return response.text();
            }).then((data) => {
                alert(data);
            }).catch((error) => {
                alert("Error occurred while sending data")
                console.log(error);
            });
        }
        else if (value && EMail && PValue) {
            localStorage.setItem("email", EMail);
            fetch(`${process.env.REACT_APP_BACKEND_URL}/auth`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    name: value,
                    email: EMail,
                    password: PValue
                })
            }).then((response) => {
                return response.text();
            }).then((data) => {
                alert(data);
            }).catch((error) => {
                alert(error);
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
            <input type="password" placeholder="Password" id="password" onChange={setP} value={PValue} style={mode ? dark : light} maxLength={20} minLength={8}/>
            <br /><br />
            <button onClick={poster}>Log In</button>
        </div>
    )
}
export default Auth