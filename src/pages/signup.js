import React from "react";
import FormContainer from "../components/Form";

const Signup = ({ smallDevice }) => {
  console.log(smallDevice);
  return (
    <>
      <div className="content" style={{ width: smallDevice ? "90%" : "" }}>
        <span className="title">QuantumZyme Workbench</span>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <a href="https://quantumzyme.com/about">To know more about us </a>
      </div>
      <FormContainer type="signup" smallDevice={smallDevice} />
    </>
  );
};
export default Signup;
