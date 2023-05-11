import React from "react";
import "./queue.css";

const Queue = () => {
    return(
        <div className="p-4 position: absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <p><span className="text-blue-500">Name: </span>Zlatan Ibrahimovic</p>
            <p><span className="text-blue-500">Email: </span>zlatanibrahimovic@gmail.com</p>
            <p><span className="text-blue-500">Number: </span>07004500523</p>
            <p><span className="text-blue-500">Queue No: </span> 48</p>
            <button className="mt-4 bg-purple-800 text-white rounded w-4/5 h-10">Leave Queue</button>
        </div>
    )
}

export default Queue;