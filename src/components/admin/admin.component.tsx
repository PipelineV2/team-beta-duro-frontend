import React from "react";
import "./admin.css";

const Admin = () => {
    return(
        <div className="p-4">
            <button className="position: absolute right-4 bg-purple-800 text-white rounded w-1/6 h-10">Register client</button>
            <table className="position: absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-gray border-solid border-2">
                <thead>
                    <tr className="">
                        <th className="p-4 border-gray border-solid border-2">Number</th>
                        <th className="p-4 border-gray border-solid border-2">Name</th>
                        <th className="p-4 border-gray border-solid border-2">Phone Number</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="">
                        <td className="p-4 border-gray border-solid border-2">48</td>
                        <td className="p-4 border-gray border-solid border-2">Eden Hazard</td>
                        <td className="p-4 border-gray border-solid border-2">07036358412</td>
                    </tr>
                    <tr className="">
                        <td className="p-4 border-gray border-solid border-2">48</td>
                        <td className="p-4 border-gray border-solid border-2">Eden Hazard</td>
                        <td className="p-4 border-gray border-solid border-2">07036358412</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Admin;