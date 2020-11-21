import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchCountEvent = (reload) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/events/count`
      );
      setData(data.data.events);
    }
    fetchData();
  }, [reload]);
  return data;
};
