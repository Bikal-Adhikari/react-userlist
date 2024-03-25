import React from "react";

export const List = ({ userList = [] }) => {
  //   const userList = ["Bikal", "John", "Jane"];
  return (
    <div>
      <ul>
        {userList.map((name, i) => {
          return <li>{name}</li>;
        })}
      </ul>
    </div>
  );
};
