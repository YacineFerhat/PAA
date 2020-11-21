import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchRedac = (reload) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/inscriptions/redac`
      );
      setData(data.data.inscription);
    }
    fetchData();
  }, [reload]);
  return data;
};
