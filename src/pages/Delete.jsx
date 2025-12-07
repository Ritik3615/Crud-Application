import React, { useState } from "react";
import { deleteUserById } from "../services/api";
import Swal from "sweetalert2";

function Delete() {
  const [id, setId] = useState("");

  const handleChange = (e) => {
    setId(e.target.value);
  };

  const handleSubmit  = async (e) =>{
    e.preventDefault();

    if(!id){
      Swal.fire("Oops","Please enter an ID","warning");
      return;
    }
    // Add delete logic here
    const result = await Swal.fire({
      title: 'Are you sure?',
      theme: 'dark',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton:true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    })
    if (!result.isConfirmed) return;
    try{
      const res = await deleteUserById(id);
      Swal.fire("Deleted!",res.data.message,"success");
      setId("");
    }catch(err){
      const backend = err.response?.data || "Error deleting user";
      Swal.fire("Error!", backend, "error");
    }
  }
  return (
    <div className="absolute bg-gray-200 h-screen w-[85%]">
      <h1 className="text-3xl font-bold text-blue-300 text-center p-3 ">
        Delete User Page
      </h1>
      <div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-[50%] p-8 space-y-7 bg-gradient-to-r from-white to-gray-300 rounded shadow-lg justify-self-center"
        >
          <input
            type="text"
            placeholder="Enter Id"
            className="border rounded-lg py-2"
            value={id}
            onChange={handleChange}
          />

          <button className="bg-green-400 hover:bg-red-500 py-2 cursor-pointer rounded-lg">Delete</button>
        </form>
      </div>
    </div>
  );
}

export default Delete;
