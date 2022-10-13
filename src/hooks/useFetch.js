import { useState } from "react";
import { getUsers, getRooms } from "../helpers";

const useFetch = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [rooms, setRooms] = useState([]);

  const handleUsers = async () => {
    const newUsers = await getUsers();
    setUsers(newUsers);
    setIsLoading(false);
  };

  const handleRooms = async () => {
    const newRooms = await getRooms();
    setRooms(newRooms);
    setIsLoading(false);
  };

  return {
    isLoading,
    handleUsers,
    handleRooms,
    users,
    rooms,
  };
};

export default useFetch;
