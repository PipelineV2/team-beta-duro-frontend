import React from "react";

const SignupModal = () => {
    return(
        <div className="">
            <form className="flex flex-col ml-96">
                <label className="mb-1">Full Name</label>
                <input className="border-2 border-gray border-solid pl-4 rounded w-3/5 h-10 mb-2" type="text" placeholder="Enter your name here" />
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