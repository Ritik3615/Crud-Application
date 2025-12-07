import React, { useEffect, useState } from "react";
import { deleteUserById, getAllUsers, updateUserbyId } from "../services/api";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function Read() {
  const backgroundImage =
    "https://images.pexels.com/photos/1048033/pexels-photo-1048033.jpeg?_gl=1*qxpyct*_ga*ODMzMDkwMy4xNzY0NDkzNTE4*_ga_8JE65Q40S6*czE3NjQ0OTU1NzgkbzIkZzEkdDE3NjQ0OTU2NDIkajU5JGwwJGgw";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // data has been set in set data
  const loadData = async () => {
    try {
      setLoading(true);
      const res = await getAllUsers();
      setData(res.data);
    } finally {
      setLoading(false);
    }
  };

  // make that as an array
  useEffect(() => {
    loadData();
  }, []);

  //Delete user data
  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      theme: "dark",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });
    if (!result.isConfirmed) return;
    try {
      const res = await deleteUserById(id);
      Swal.fire("Deleted!", res.data.message, "success");
      loadData();
    } catch (err) {
      Swal.fire("Error!", "Error deleting user", "error");
    }
  };

  return (
    <div className="absolute bg-gray-100 h-screen w-[85%] bg-cover bg-center">
      <h1 className="text-3xl font-bold text-blue-300 text-center p-3 ">
        All Users
      </h1>
      <table className="w-[80%] m-5">
        <thead>
          <tr className="border">
            <th className="p-3 text-left border-r">Id</th>
            <th className="p-3 text-left border-r">Name</th>
            <th className="p-3 text-left border-r">Phone</th>
            <th className="p-3 text-left border-r">Email</th>
            <th className="p-3 text-left border-r">Actions</th>
          </tr>
        </thead>

        <tbody>
          {loading ?(
            <tr>
              <td colSpan="5" className="p-3 text-center">
                Loading...
              </td>
            </tr>
          ):
          (data.map((u) => (
            <tr key={u.id} className="border">
              <td className="p-3 border-r">{u.id}</td>
              <td className="p-3 border-r">{u.name}</td>
              <td className="p-3 border-r">{u.phone}</td>
              <td className="p-3 border-r">{u.email}</td>
              <td className="p-3 flex gap-5">
                <Link
                  to={`/update/${u.id}`}
                  className="px-3 py-1 bg-yellow-500 text-white rounded"
                >
                  Edit
                </Link>

                <button
                  onClick={() => handleDelete(u.id)}
                  className="px-3 py-1 bg-red-600 text-white rounded cursor-pointer hover:bg-red-900"
                >
                  Delete
                </button>
              </td>
            </tr>
          )))}
        </tbody>
      </table>
    </div>
  );
}

export default Read;
