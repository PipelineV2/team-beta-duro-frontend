import React from "react";
import "./phone-number.css";

const PhoneNumber = () => {
    return(
        <div className="flex flex-col p-4 mt-48 content-center flex-wrap">
            <label className="mb-2">Phone Number</label>
            <input className="border-2 border-gray border-solid pl-4 rounded w-2/5 h-10" type="phone" placeholder="Enter your phone number here" />
            <button className="mt-4 ml-20 bg-purple-800 text-white rounded w-1/4 h-10">Check phone number</button>
        </div>
    )
}

export default PhoneNumber;