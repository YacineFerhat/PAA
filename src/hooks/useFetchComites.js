import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchComites = (reload) => {
  const [comites, setComites] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/recrutements/`
      );
      setComites(data.data.recrutement);
    }
    fetchData();
  }, [reload]);
  return comites;
};
