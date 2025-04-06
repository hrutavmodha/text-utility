import React from 'react';
function Comments() {
    return (
        <>
            <h1>Reviews</h1>
            <p>What are your thoughts about our app?</p>
            <p>We value your feedback and would love to hear from you. Please share your comments below:</p>
            <div className='login'>
                <textarea placeholder="Write your comment/s here..." style={{ width: "70%", height: "150px", borderRadius: "10px" }} id="comment"></textarea>
                <br />
                <button>Comment</button>
            </div>
            <div className="comments">
                <h2>Comments</h2>

            </div>
        </>
    )
}
export default Comments