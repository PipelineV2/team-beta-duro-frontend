import React from "react";
import "./signup-modal.css";

const SignupModal = () => {
    return(
        <div className="">
            <form className="position: absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col w-2/5 bg-white p-8">
                <label className="mb-1">First Name</label>
                <input className="border-2 border-gray border-solid pl-4 rounded w-full h-10 mb-2" type="text" placeholder="Enter your first name here" />
                <label className="mb-1">Last Name</label>
                <input className="border-2 border-gray border-solid pl-4 rounded w-full h-10 mb-2" type="text" placeholder="Enter your last name here" />
                <label className="mb-1">Email Address</label>
                <input className="border-2 border-gray border-solid pl-4 rounded w-full h-10 mb-2" type="email" placeholder="Enter your email address" />
                <label className="mb-1">Phone Number</label>
                <input className="border-2 border-gray border-solid pl-4 rounded w-full h-10 mb-2" type="email" placeholder="Enter your phone number" />
                <button className="mt-4 ml-20 bg-purple-800 text-white rounded w-3/5 h-10">Add to queue</button>
            </form>
        </div>
    )
}

export default SignupModal;