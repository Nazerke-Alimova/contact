import React from "react";
import Button from "../Button/Button";

export default function User({ name, email, showAge, clickAge, age }) {

  return (
    <div className="user-details">
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <Button onClick={clickAge} text="Show Age" />
      {showAge && <p>Age: {age}</p>}
    </div>
  );
}
