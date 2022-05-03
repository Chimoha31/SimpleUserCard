import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import TextField from "../../components/TextField";

const AddUser = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
  });

  const handleAddUser = () => {
    setValues({
      name: "",
      email: "",
    })
    navigate("/");
    // console.log(values);
  }

  return (
    <div className="mt-10 max-w-xl mx-auto">
      <TextField
        label="Name"
        onChange={(e) => setValues({...values, name: e.target.value})}
        value={values.name}
        inputProps={{ type: "text", placeholder: "Teddy Maekawa" }}
      />
      <br />
      <TextField
        label="Email"
        onChange={(e) => setValues({...values, email:e.target.value})}
        value={values.email}
        inputProps={{ type: "email", placeholder: "teddy@email.com" }}
      />
      <Button onClick={handleAddUser}>Submit</Button>
    </div>
  );
};

export default AddUser;
