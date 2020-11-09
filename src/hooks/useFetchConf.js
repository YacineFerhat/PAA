import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchConf = (reload) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await axios.get("/api/inscriptions/conf");
      setData(data.data.inscription);
    }
    fetchData();
  }, [reload]);
  return data;
};
