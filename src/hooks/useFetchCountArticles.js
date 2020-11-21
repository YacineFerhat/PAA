import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchCountArticles = (reload) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/articles/count`
      );
      setData(data.data.article);
    }
    fetchData();
  }, [reload]);
  return data;
};
