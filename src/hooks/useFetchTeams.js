import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchTeams = (reload) => {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/teams/`
      );
      setTeams(data.data.team);
    }
    fetchData();
  }, [reload]);
  return teams;
};
