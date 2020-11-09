import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchRecrutementOpen = (reload) => {
  const [comites, setComites] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await axios.get("/api/recrutements/open");
      setComites(data.data.recrutement);
    }
    fetchData();
  }, [reload]);
  return comites;
};