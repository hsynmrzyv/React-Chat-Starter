// Components
import SingleUser from "./SingleUser";

// Hooks
import { useState, useEffect } from "react";

const Users = (props) => {
  const [users, setUsers] = useState([]);
  const userId = JSON.parse(localStorage.getItem("userId"));

  const fetchUser = async () => {
    const response = await fetch(`http://localhost:3000/users?id_ne=${userId}`);
    const data = await response.json();
    setUsers(data);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
   
  );
};

export default Users;
