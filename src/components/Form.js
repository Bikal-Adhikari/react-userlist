import React, { useState } from "react";
import { Display } from "./Display";

export const Form = () => {
  const [name, setName] = useState("");
  const handleOnChnage = (e) => {
    const { value } = e.target;
    setName(value);
  };
  return (
    <div>
      <Display name={name} />
      <form action="">
        <input type="text" onChange={handleOnChnage} />
        <button>Add User</button>
      </form>
    </div>
  );
};
