import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button";
import TextField from "../../components/TextField";
import { editUser } from "./userSlice";

const EditUser = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const users = useSelector(store => store.users);
  // console.log(params.id);
  const existinUser = users.filter((user) => user.id === params.id );
  const {name, email} = existinUser[0];

  const [values, setValues] = useState({
    name: name,
    email: email,
  });

  const handleEditUser = () => {
    setValues({
      name: "",
      email: "",
    });
    dispatch(editUser({
      id: params.id,
      name: values.name,
      email: values.email
    }))
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
      <Button onClick={handleEditUser}>Edit</Button>
    </div>
  );
};

export default EditUser;