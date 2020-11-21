import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchCountComitesOpen = (reload) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/recrutements/count`
      );
      setData(data.data.comite);
    }
    fetchData();
  }, [reload]);
  return data;
};
