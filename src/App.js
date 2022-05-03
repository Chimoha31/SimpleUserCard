import React from "react";
import UserList from "./features/users/UserList";
import { Routes, Route } from "react-router-dom";
import AddUser from "./features/users/AddUser";

function App() {
  return (
    <div className="container mx-auto px-2 max-x-5xl pt-10 md:pt-32">
      <h1 className="text-center font-bold text-2xl text-gray-700">
        User Card
      </h1>
      <Routes>
        <Route exact path="/" element={<UserList />} />
        <Route path="/add-user" element={<AddUser />} />
      </Routes>
    </div>
  );
}

export default App;
