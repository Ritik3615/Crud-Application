import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import video from "../assets/backgroundvideo.mp4";
import { getUserById, updateUserbyId } from "../services/api";
import { useParams, useNavigate } from "react-router-dom";

function Update() {
  const { id } = useParams(); 
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    status: "ACTIVE",
  });

  // Load user data when component mounts
  useEffect(() => {
    if (!id || id === ":id") {
      Swal.fire(
        "No User Selected",
        "Please select a user from the Read page",
        "warning"
      );
      navigate("/read");
    }
    loadUser();
  }, []);

  const loadUser = async () => {
    try {
      const res = await getUserById(id);
      setForm(res.data);
    } catch (err) {
      const msg = err.response?.data || "Error loading user";
      // Swal.fire("Error", msg, "error");
      navigate("/read");
    }
  };

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.phone || !form.email) {
      Swal.fire("Missing Fields", "Please fill all the fields", "warning");
      return;
    }

    // Confirmation popup
    const result = await Swal.fire({
      title: "Update User?",
      text: "Are you sure you want to update this user's information?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update!",
    });

    if (!result.isConfirmed) return;

    try {
      const res = await updateUserbyId(id, form);
      Swal.fire("Updated!", res.data.message, "success");
      navigate("/read"); // redirect back
    } catch (err) {
      const backendMsg = err.response?.data || "Error updating user";
      Swal.fire("Error", backendMsg, "error");
    }
  };

  return (
    <div className="absolute bg-gray-300 h-screen w-[85%] p-3">
      <h1 className="text-2xl font-bold text-blue-500 text-center mb-10">
        Update User Page
      </h1>

      {/* Video Background */}
      {/* <video
        className="top-0 left-0 w-full h-full object-cover -z-10"
        autoPlay
        loop
        muted
      >
        <source src={video} type="video/mp4" />
      </video> */}

      {/* Update Form */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-[50%] mx-auto p-8 space-y-7 bg-white/60 backdrop-blur-xl rounded shadow-lg"
      >
        <input
          type="text"
          name="name"
          placeholder={form.name ? form.name : "Full Name"}
          className="border rounded-2xl py-2 px-3 w-full"
          value={form.name}
          onChange={handleChange}
        />

        <input
          type="text"
          name="phone"
          placeholder={form.phone ? form.phone : "Phone Number"}
          className="border rounded-2xl py-2 px-3 w-full"
          value={form.phone}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder={form.email ? form.email : "Email Address"}
          className="border rounded-2xl py-2 px-3 w-full"
          value={form.email}
          onChange={handleChange}
        />

        <select
          name="status"
          value={form.status}
          onChange={handleChange}
          className="border rounded-2xl py-2 px-3 w-full cursor-pointer"
        >
          <option value="ACTIVE">Active</option>
          <option value="INACTIVE">Inactive</option>
        </select>

        <button className="bg-green-500 hover:bg-green-700 text-white font-semibold py-2 rounded-2xl">
          Update
        </button>
      </form>
    </div>
  );
}

export default Update;
