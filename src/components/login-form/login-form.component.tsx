import React from "react";
import "./login.css";

const LoginForm = () => {
    return(
        <div className="mt-40">
            <h1 className="mb-4 text-center">Put in your credentials to login</h1>
            <form className="flex flex-col ml-96">
                <label className="mb-1">Email Address</label>
                <input className="border-2 border-gray border-solid pl-4 rounded w-3/5 h-10 mb-2" type="email" placeholder="Enter your email address" />
                <label className="mb-1">Password</label>
                <input className="border-2 border-gray border-solid pl-4 rounded w-3/5 h-10 mb-2" type="email" placeholder="Enter your password" />
                <button className="mt-4 ml-20 bg-purple-800 text-white rounded w-2/5 h-10">Login</button>
            </form>
        </div>
    )
}

export default LoginForm;