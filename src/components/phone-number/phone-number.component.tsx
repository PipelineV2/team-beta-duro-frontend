import React from "react";
import "./phone-nember.css";

const PhoneNumber = () => {
    return(
        <div className="p-4 w-2/5">
            <label>Phone Number</label>
            <input type="number" placeholder="Enter your phone number here" />
        </div>
    )
}

export default PhoneNumber;