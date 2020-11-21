import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchCountTeams = (reload) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/teams/count`
      );
      setData(data.data.team);
    }
    fetchData();
  }, [reload]);
  return data;
};
