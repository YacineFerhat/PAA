import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchArticlesByTags = (reload) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await axios.get("/api/articles/tags");
      setData(data.data.tags);
    }
    fetchData();
  }, [reload]);
  return data;
};
