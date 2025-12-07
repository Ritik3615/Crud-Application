import axios from "axios";

const API = axios.create({
    baseURL:"http://localhost:8080/api",
    headers:{
        "Content-Type":"application/json"
    }
})

//POST request to create a new user
export const createUser  = (data) => API.post("/save" , data);
//GET request to fetch all users
export const getAllUsers = () => API.get("/allUser");
//GET request to fetch a user by ID
export const getUserById = (id) => API.get(`/users/${id}`);
//PUT request to update a user by ID
export const updateUserbyId = (id,data) => API.put(`/update/${id}`,data);
//DELETE request to delete a user by ID
export const deleteUserById = (id) => API.delete(`/DeleteUser/${id}`);

export default API;