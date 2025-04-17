import React, { useState, useEffect, useContext } from 'react';
import { ModeContext } from '../ModeContext';
function Comments() {
    const { mode, light, dark } = useContext(ModeContext);
    const [value, setValue] = useState("");
    const getValue = (e) => {
        setValue(e.target.value);
    };
    const comment = document.getElementById("comment");
    const email = localStorage.getItem("email");
    const handleComment = () => {
        if (comment.value === "") {
            alert("Comment cannot be empty")
            return
        }
        else if (email === null || email === undefined || email === "") {
            alert("Please log in to comment");
            window.location.href = "/auth";
        }
        else {
            poster();
            comment.value = ""
        };
    }
    const poster = () => {
        fetch(`http://localhost:5000/reviews`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                comment: comment.value,
            })
        }).then((response) => {
            return response.text();
        }).then((data) => {
            alert(data);
        }).catch((error) => {
            alert("Error occurred while sending data");
            console.log(error);
        });
    };
    useEffect(() => {
        fetch("http://localhost:5000/reviews", {
            method: "GET",
            headers: {
                "Content-type": "application/json"
            }
        }).then((res) => {
            return res.json();
        }).then((data) => {
            data.forEach((item) => {
                const div = document.createElement("div");
                const cmts = document.getElementById("cmts");
                div.innerHTML = `
                <div class="review-card">
                    <div class="review-header">
                        <span class="review-email">${item.email}</span>
                    </div>
                    <div class="review-body">
                        <p class="review-text">${item.comment}</p>
                    </div>
                </div>
            `;
                cmts.appendChild(div);
            })
        }).catch((error) => {
            console.log(error);
        });
    },[]);
    return (
        <div className="body">
            <h1>Reviews</h1>
            <p>What are your thoughts about my app?</p>
            <p>I value your feedback and would love to hear it from you. Please share your comments below:</p>
            <div className='login'>
                <textarea placeholder="Write your comment/s here..." style={mode ? dark : light} id="comment" value={value} onChange={getValue}></textarea>
                <br />
                <button onClick={handleComment}>Comment</button>
            </div>
            <h1>Comments</h1>
            <div id="cmts" align="left"></div>
        </div>
    )
}
export default Comments