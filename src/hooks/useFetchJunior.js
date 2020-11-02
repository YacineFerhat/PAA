import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchJunior = (reload) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await axios.get("/api/inscriptions/junior");
      setData(data.data.inscription);
    }
    fetchData();
  }, [reload]);
  return data;
};
