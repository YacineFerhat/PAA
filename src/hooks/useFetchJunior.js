import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchJunior = (reload) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/inscriptions/junior`
      );
      setData(data.data.inscription);
    }
    fetchData();
  }, [reload]);
  return data;
};
