import React from "react";
function Contact() {
    return (
        <div className="body">
            <h1>Contact Us</h1>
            <p>Get in touch with us through the following channels:</p>
            <div style={{ textAlign: "left" }}>
                <b>Address:</b>
                <p>ABC colony, <br />Street Number: -1,<br />React.js</p>
                <br />
                <b>EMail:</b>
                <p>consult@webtextapp.com</p>
                <br />
                <b>Phone:</b>
                <p>+91 12345 67890</p>
                <br />
            </div>
            <p>Feel free to reach out for any assistance, feed-back, or inqueries. Our team will be happy to assist you</p>
            <h2>Connect with us on Social Media</h2>
            <div style={{ textAlign: "left" }}>
                <b>FaceBook:</b>
                <p>webtextapp</p>
                <br />
                <b>X:</b>
                <p>webtextapp</p>
                <br />
                <b>LinkedIn:</b>
                <p>webtextapp</p>
            </div>
        </div>
    )
}
export default Contact;