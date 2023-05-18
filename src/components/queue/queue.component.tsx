import React, { useState } from "react";
import Modal from "react-modal";
import "./queue.css";
import LeaveModal from "../leave-modal/leave-modal.component";

const Queue = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    return(
        <div className="p-4 position: absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <p><span className="text-blue-500">Name: </span>Zlatan Ibrahimovic</p>
            <p><span className="text-blue-500">Email: </span>zlatanibrahimovic@gmail.com</p>
            <p><span className="text-blue-500">Number: </span>07004500523</p>
            <p><span className="text-blue-500">Queue No: </span> 48</p>
            <button className="mt-4 bg-purple-800 text-white rounded w-4/5 h-10"
            onClick={() => setModalIsOpen(true)}
            >Leave Queue</button>
            <Modal className="position: absolute w-full h-full top-auto bg-black bg-opacity-20"
            isOpen={modalIsOpen}>
                <p className="position: absolute top-64 left-2/3 z-10 cursor-pointer rotate-45 text-3xl" 
                onClick={() => setModalIsOpen(false)}> + </p>
                <LeaveModal />
            </Modal>
        </div>
    )
}

export default Queue;