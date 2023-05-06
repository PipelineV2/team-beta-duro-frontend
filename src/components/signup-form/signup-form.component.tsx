import React from "react";
import "./signup-form.css";

const SignupForm = () => {
    return(
        <div className="signup-form">
            <form>
                <label>Full Name</label>
                <input type="text" placeholder="Enter your name here" />
                <label>Email Address</label>
                <input type="text" placeholder="Enter your email address" />
                <button>Join the queue</button>
            </form>
        </div>
    )
}

export default SignupForm;