import React from "react";
import "./signup-form.css";

const SignupForm = () => {
    return(
        <div className="mt-40">
            <h1 className="mb-4 text-center">Sign up to join the queue</h1>
            <form className="flex flex-col ml-96">
                <label className="mb-1">First Name</label>
                <input className="border-2 border-gray border-solid pl-4 rounded w-3/5 h-10 mb-2" type="text" placeholder="Enter your first name here" />
                <label className="mb-1">Last Name</label>
                <input className="border-2 border-gray border-solid pl-4 rounded w-3/5 h-10 mb-2" type="text" placeholder="Enter your last name here" />
                <label className="mb-1">Email Address</label>
                <input className="border-2 border-gray border-solid pl-4 rounded w-3/5 h-10 mb-2" type="email" placeholder="Enter your email address" />
                <label className="mb-1">Phone Number</label>
                <input className="border-2 border-gray border-solid pl-4 rounded w-3/5 h-10 mb-2" type="email" placeholder="Enter your phone number" />
                <button className="mt-4 ml-20 bg-purple-800 text-white rounded w-2/5 h-10">Join the queue</button>
                <p className="mt-12 ml-32">Can't sign up? Ask the admin to help you.</p>
            </form>
        </div>
    )
}

export default SignupForm;