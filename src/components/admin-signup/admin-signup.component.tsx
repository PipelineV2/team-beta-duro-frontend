import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    name: String,
    firstName: string,
    lastName: string,
    emailAddress: string,
    phoneNumber: string,
    description: string,
    legalName: string,
    url: string,
    taxID: string,
    vatID: string,
    displayName: string,
    jobTitle: string
  };

const AdminSignupForm = () => {
    const { register, handleSubmit } = useForm<Inputs>();
    const addToQueue: SubmitHandler<Inputs> = (data: any) => {
        console.log(data, "test done")
        fetch('https://duro.herokuapp.com/api/platform/requesters', {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },

            //make sure to serialize your JSON body
            body: JSON.stringify({
                "corporation": {
                    "email": data.emailAddress,
                    "name": data.name,
                    "description": data.description,
                    "legal_name": data.legalName,
                    "telephone": data.phoneNumber,
                    "url": data.url,
                    "tax_id": data.taxID,
                    "vat_id": data.vatID,
                },
                "administrator": {
                    "given_name": data.firstName,
                    "family_name": data.lastName,
                    "email": data.emailAddress,
                    "display_name": data.displayName,
                    "telephone": data.phoneNumber,
                    "job_title": data.jobTitle
                }
                })
            })
            .then(response => response.json())
            .then(data =>{
                if (data.success === true) {
                    console.log(data)
                    alert("profile created!");
                }
            });
        }
    return(
        <div>
            <h1 className="mb-4 text-center">Sign up to user the platform</h1>
            <form className="flex flex-col ml-96" onSubmit={handleSubmit(addToQueue)}>
                <label className="mb-1">Name</label>
                <input className="border-2 border-gray border-solid pl-4 rounded w-3/5 h-10 mb-2" 
                type="text" placeholder="Enter your name here" {...register("name",{ required: true})} />
                <label className="mb-1">Email Address</label>
                <input className="border-2 border-gray border-solid pl-4 rounded w-3/5 h-10 mb-2" 
                type="email" placeholder="Enter your email address" {...register("emailAddress",{ required: true})}/>
                <label className="mb-1">Phone Number</label>
                <input className="border-2 border-gray border-solid pl-4 rounded w-3/5 h-10 mb-2" 
                type="tel" placeholder="Enter your phone number" {...register("phoneNumber",{ required: true})}/>
                <label className="mb-1">Description</label>
                <input className="border-2 border-gray border-solid pl-4 rounded w-3/5 h-10 mb-2" 
                type="text" placeholder="Enter your phone number" {...register("description",{ required: true})}/>
                <label className="mb-1">Legal Name</label>
                <input className="border-2 border-gray border-solid pl-4 rounded w-3/5 h-10 mb-2" 
                type="text" placeholder="Enter your phone number" {...register("legalName",{ required: true})}/>
                <label className="mb-1">Url</label>
                <input className="border-2 border-gray border-solid pl-4 rounded w-3/5 h-10 mb-2" 
                type="text" placeholder="Enter your phone number" {...register("url",{ required: true})}/>
                <label className="mb-1">Tax Id</label>
                <input className="border-2 border-gray border-solid pl-4 rounded w-3/5 h-10 mb-2" 
                type="text" placeholder="Enter your phone number" {...register("taxID",{ required: true})}/>
                <label className="mb-1">Vat ID</label>
                <input className="border-2 border-gray border-solid pl-4 rounded w-3/5 h-10 mb-2" 
                type="text" placeholder="Enter your phone number" {...register("vatID",{ required: true})}/>
                <p>Administrator Details</p>
                <label className="mb-1">First Name</label>
                <input className="border-2 border-gray border-solid pl-4 rounded w-3/5 h-10 mb-2" 
                type="text" placeholder="Enter your first name here" {...register("firstName",{ required: true})} />
                <label className="mb-1">Last Name</label>
                <input className="border-2 border-gray border-solid pl-4 rounded w-3/5 h-10 mb-2" 
                type="text" placeholder="Enter your last name here" {...register("lastName",{ required: true})}/>
                <label className="mb-1">Display Name</label>
                <input className="border-2 border-gray border-solid pl-4 rounded w-3/5 h-10 mb-2" 
                type="text" placeholder="Enter your last name here" {...register("displayName",{ required: true})}/>
                <label className="mb-1">Email Address</label>
                <input className="border-2 border-gray border-solid pl-4 rounded w-3/5 h-10 mb-2" 
                type="email" placeholder="Enter your email address" {...register("emailAddress",{ required: true})}/>
                <label className="mb-1">Phone Number</label>
                <input className="border-2 border-gray border-solid pl-4 rounded w-3/5 h-10 mb-2" 
                type="tel" placeholder="Enter your phone number" {...register("phoneNumber",{ required: true})}/>
                <label className="mb-1">Job Title</label>
                <input className="border-2 border-gray border-solid pl-4 rounded w-3/5 h-10 mb-2" 
                type="text" placeholder="Enter your phone number" {...register("jobTitle",{ required: true})}/>
                <button className="mt-4 ml-20 bg-purple-800 text-white rounded w-2/5 h-10">Join the queue</button>
            </form>
        </div>
    )
}

export default AdminSignupForm