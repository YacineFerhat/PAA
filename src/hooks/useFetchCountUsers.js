import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchCountUsers = (reload) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/users/count`
      );
      setData(data.data.user);
    }
    fetchData();
  }, [reload]);
  return data;
};
