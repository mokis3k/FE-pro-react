import React, { useState, useEffect } from "react";

function User(props) {
  const [user, setUser] = useState({
    name: "Taras",
    email: "taras@gmail.com",
  });

  const sendEmail = () => console.log(`Save email ${user.email} to database`);

  const deleteEmail = () => console.log(`Delete email ${user.email} from database`)

  useEffect(() => {
    setTimeout(() => {
      setUser((prevState) => {
        return { ...prevState, email: "sheva@gmail.com" };
      });
    }, 2000);
  }, []);

  useEffect(() => {
    console.log("in useEffect for User");
    sendEmail();

    return () => deleteEmail();
  }, [user]);

  return Object.keys(user).length ? (
    <ul>
      {Object.keys(user).map((key, index) => (
        <li key={index}>{user[key]}</li>
      ))}
    </ul>
  ) : null;
}

export default User;
