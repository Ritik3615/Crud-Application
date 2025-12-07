import React, { useState } from "react";
import { createUser } from "../services/api";
import Swal from "sweetalert2";

function Create() {
  const backgroundImage =
    "https://images.pexels.com/photos/158063/bellingrath-gardens-alabama-landscape-scenic-158063.jpeg?_gl=1*xpo7ic*_ga*ODMzMDkwMy4xNzY0NDkzNTE4*_ga_8JE65Q40S6*czE3NjQ0OTM1MTgkbzEkZzEkdDE3NjQ0OTM3MDMkajU0JGwwJGgw";

  const [form,  setForm] = useState({
    name:"",
    phone:"",
    email:""
  })

  const handleChange = (e) =>{
    setForm({...form, [e.target.name]: e.target.value})
  }
  const handleSubmit = async (e) =>{
    e.preventDefault();
    if(!form.name || !form.phone || !form.email){
       Swal.fire({
        title:"Missing fields",
        text:"Please fill all the fields",
        icon:"warning",
        confirmButtonColor:"#3085d6",
        theme: 'dark',
        timer: 2000,
        position:'top'
       })
       return;
    }

    try{
      const res = await createUser(form);
      Swal.fire({
        title:"Success",
        text: res.data.message,
        icon:"success",
        confirmButtonColor:"#3085d6"
      });
      setForm({name:"", phone:"", email:""});
    }catch(err){
      const backendmessage = err.response?.data?.message || "Error creating user";
      Swal.fire("Error", backendmessage, "error");
    }
    
  }
  return (
    <>
      <div className="absolute w-[85%] bg-gray-200 h-screen bg-cover bg-center overflow-x-hidden space-y-7">
        <h1 className="text-3xl font-bold text-blue-300 text-center p-3">
          Create A New User
        </h1>
        <form onSubmit={handleSubmit} className=" w-[50%] justify-self-center  space-y-7 p-8 flex flex-col bg-gradient-to-r from-white to-gray-300 rounded shadow-lg">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="border rounded py-2 w-full"
            value={form.name}
            onChange={handleChange}
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            className="border rounded py-2 w-full"
            value={form.phone}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="border rounded py-2 w-full"
            value={form.email}
            onChange={handleChange}
          />

          <button className="bg-blue-500 text-white py-2 cursor-pointer rounded hover:bg-blue-700">Save user</button>
        </form>
      </div>
    </>
  );
}

export default Create;
