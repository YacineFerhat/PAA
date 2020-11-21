import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchUsers = (reload) => {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/users/`
      );
      setTeams(data.data.users);
    }
    fetchData();
  }, [reload]);
  return teams;
};
