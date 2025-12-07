import React from "react";

function Dashboard() {
  return (
    <div className="p-8 max-w-6xl mx-auto">

      {/* Title */}
      <h1 className="text-4xl font-extrabold mb-10 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
        Project Dashboard
      </h1>

      {/* Overview */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 shadow-lg rounded-2xl p-6 mb-8 border border-blue-200/50">
        <h2 className="text-xl font-bold mb-2 text-blue-700">Overview</h2>
        <p className="text-gray-700 leading-relaxed">
          This project is a full-stack CRUD application using 
          <span className="font-semibold text-blue-600"> React (Vite)</span> on the frontend 
          and <span className="font-semibold text-purple-600"> Spring Boot</span> on the backend.
          The application enables users to Create, Read, Update, and Delete records 
          with a clean REST API and optimized UI workflow.
        </p>
      </div>

      {/* Frontend */}
      <div className="bg-gradient-to-r from-indigo-50 to-blue-50 shadow-lg rounded-2xl p-6 mb-8 border border-indigo-200/50">
        <h2 className="text-xl font-bold mb-2 text-indigo-700">Frontend (Vite + React)</h2>
        <ul className="list-disc space-y-1 ml-6 text-gray-700">
          <li>Lightning-fast dev environment powered by Vite</li>
          <li>Modular & reusable UI components (React)</li>
          <li>React Router for smooth navigation</li>
          <li>Axios for REST API communication</li>
          <li>State management using Context API / useState</li>
        </ul>
      </div>

      {/* Backend */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 shadow-lg rounded-2xl p-6 mb-8 border border-purple-200/50">
        <h2 className="text-xl font-bold mb-2 text-purple-700">Backend (Spring Boot)</h2>
        <ul className="list-disc space-y-1 ml-6 text-gray-700">
          <li>REST APIs structured with Spring Web</li>
          <li>Service, Controller & Repository architecture</li>
          <li>NeonDB (PostgreSQL) cloud database</li>
          <li>JPA & Hibernate ORM for table mapping</li>
          <li>DTO pattern for cleaner API responses</li>
        </ul>
      </div>

      {/* Planned Features */}
      <div className="bg-gradient-to-r from-green-50 to-teal-50 shadow-lg rounded-2xl p-6 border border-green-200/50">
        <h2 className="text-xl font-bold mb-2 text-green-700">Planned Features</h2>
        <ul className="list-disc space-y-1 ml-6 text-gray-700">
          <li>User creation form with validation</li>
          <li>Dynamic data table for displaying records</li>
          <li>Edit & update UI panel</li>
          <li>Delete confirmation popup</li>
          <li>Search, Filter, Pagination (optional advanced features)</li>
        </ul>
      </div>

    </div>
  );
}

export default Dashboard;
