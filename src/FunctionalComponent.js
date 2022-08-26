import React, { useState, useRef } from "react";

export default function FunctinalComponent() {
  const [empData, setEmpData] = useState([]);
  const nameRef = useRef();
  const phoneRef = useRef();
  const onSubmitHandler = () => {
    let transformData = {
      id: Math.random().toString(36).substring(7),
      name: nameRef.current.value,
      phone: phoneRef.current.value
    };
    setEmpData((prevEmpData) => [transformData, ...prevEmpData]);
    nameRef.current.value = "";
    phoneRef.current.value = "";
  };
  const onRemoveHandler = (id) => {
    setEmpData((prevEmpData) => prevEmpData.filter((item) => item.id !== id));
  };
  return (
    <p>
      <h1>Using functional Component</h1>
      Name : <input ref={nameRef} type="text" />
      Phone : <input ref={phoneRef} type="text" />
      <button onClick={onSubmitHandler}>Submit</button>
      <br />
      <br />
      <div>
        <table border="1">
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Phone</td>
            <td>Action</td>
          </tr>
          {empData.map((item, index) => (
            <tr>
              <td>{`${index + 1}`}</td>
              <td>{item.name}</td>
              <td>{item.phone}</td>
              <td>
                <button onClick={() => onRemoveHandler(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </table>
      </div>
      <br />
      <hr />
    </p>
  );
}
