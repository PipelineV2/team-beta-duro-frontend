import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {  Navigate } from "react-router-dom";

type Inputs = {
	firstName: string;
	lastName: string;
	emailAddress: string;
	phoneNumber: string;
};

const SignupForm = () => {
    const { register, handleSubmit } = useForm<Inputs>();
    const addToQueue: SubmitHandler<Inputs> = (data: any) => {
        console.log("test done")
        fetch('https://duro.herokuapp.com/api/requester/Bournvita/Micheal/queue', {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },

            //make sure to serialize your JSON body
            body: JSON.stringify({
                "given_name": data.firstName,
                "family_name": data.lastName,
                "email": data.emailAddress,
                "telephone": data.phoneNumber,
                })
            })
            .then(response => response.json())
            .then(data =>{
                if (data.success === true) {
                    return <Navigate to="/dashboard" />
                }
            });
        }

    return(
        <div className="mt-40">
            <h1 className="mb-4 text-center">Sign up to join the queue</h1>
            <form className="flex flex-col ml-96" onSubmit={handleSubmit(addToQueue)}>
                <label className="mb-1">First Name</label>
                <input className="border-2 border-gray border-solid pl-4 rounded w-3/5 h-10 mb-2" 
                type="text" placeholder="Enter your first name here" {...register("firstName",{ required: true})} />
                <label className="mb-1">Last Name</label>
                <input className="border-2 border-gray border-solid pl-4 rounded w-3/5 h-10 mb-2" 
                type="text" placeholder="Enter your last name here" {...register("lastName",{ required: true})}/>
                <label className="mb-1">Email Address</label>
                <input className="border-2 border-gray border-solid pl-4 rounded w-3/5 h-10 mb-2" 
                type="email" placeholder="Enter your email address" {...register("emailAddress",{ required: true})}/>
                <label className="mb-1">Phone Number</label>
                <input className="border-2 border-gray border-solid pl-4 rounded w-3/5 h-10 mb-2" 
                type="tel" placeholder="Enter your phone number" {...register("phoneNumber",{ required: true})}/>
                <button className="mt-4 ml-20 bg-purple-800 text-white rounded w-2/5 h-10">Join the queue</button>
            </form>
        </div>
    )
}

export default SignupForm;
