import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchCountColab = (reload) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/logos/count`
      );

      setData(data.data.logo);
    }
    fetchData();
  }, [reload]);
  return data;
};
