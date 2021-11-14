import React, { useState } from "react";
import { debounce } from "lodash";
import {useNavigate} from "react-router-dom"
const FormContainer = ({ smallDevice, type }) => {
  const navigate=useNavigate()
  const [values, setValues] = useState({});

  const onChange = debounce((e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }, 500);

  const Submit = () => {
    console.log(values);
  };

  return (
    <div
      className="FormContainer shadow"
      style={{ width: smallDevice ? "90%" : "" }}
    >
      <h3>
        {type == "login" ? "Enter Your Credentials" : "Enter Details To Signup"}
      </h3>
      {type === "login" ? (
        ""
      ) : (
        <>
          <input
            onChange={onChange}
            type="text"
            placeholder="Enter First Name"
            className="shadowinset"
            name="fname"
          />
          <input
            onChange={onChange}
            type="text"
            placeholder="Enter Last Name"
            className="shadowinset"
            name="lname"
          />
        </>
      )}
      <input
        onChange={onChange}
        type="email"
        placeholder="Enter Email"
        className="shadowinset"
        name="email"
      />
      <input
        onChange={onChange}
        type="password"
        placeholder="Enter Password"
        className="shadowinset"
        name="pass"
      />

      <button onClick={Submit} className="shadow shadowbtn">
        {type === "login" ? "Login" : "Signup"}
      </button>
      {type === "login" ? (
        <>
          <h4>Or</h4>
          <button onClick={()=>navigate("/signup" className="shadow shadowbtn">Signup</button>
        </>
      ) : (
        ""
      )}
    </div>
  );
};
export default FormContainer;
