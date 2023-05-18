import React from "react";

const LeaveModal = () => {
    return(
        <div className="">
            <form className="position: absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col w-2/5 bg-white p-8">
                <p className="text-center">Are you sure you want to leave the queue?</p>
                <div className="flex">
                <button className="mt-4 ml-8 border-2 border-black border-solid text-black rounded w-3/5 h-10"> No</button>
                <button className="mt-4 ml-8 bg-purple-800 text-white rounded w-3/5 h-10"> Yes</button>
                </div>
            </form>
        </div>
    )
}

export default LeaveModal;