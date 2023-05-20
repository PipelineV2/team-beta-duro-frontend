import React from "react";
import "./admin.css";

const Admin = () => {
    return(
        <div className="p-4">
            <table className="position: absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-gray border-solid border-2">
                <thead>
                    <tr className="">
                        <th className="p-4 border-gray border-solid border-2">Number</th>
                        <th className="p-4 border-gray border-solid border-2">Name</th>
                        <th className="p-4 border-gray border-solid border-2">Phone Number</th>
                        <th className="p-4 border-gray border-solid border-2">Email Address</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="">
                        <td className="p-4 border-gray border-solid border-2">48</td>
                        <td className="p-4 border-gray border-solid border-2">Eden Hazard</td>
                        <td className="p-4 border-gray border-solid border-2">07036358412</td>
                        <td className="p-4 border-gray border-solid border-2">Edenhazard@gmail.com</td>
                    </tr>
                    <tr className="">
                        <td className="p-4 border-gray border-solid border-2">48</td>
                        <td className="p-4 border-gray border-solid border-2">Eden Hazard</td>
                        <td className="p-4 border-gray border-solid border-2">07036358412</td>
                        <td className="p-4 border-gray border-solid border-2">Edenhazard@gmail.com</td>
                    </tr>
                </tbody>
            </table>
            <button className="position: absolute bottom-1/4 left-1/3 ml-20 bg-purple-800 text-white rounded w-1/5 h-10"> Next Customer</button>
        </div>
    )
}

export default Admin;