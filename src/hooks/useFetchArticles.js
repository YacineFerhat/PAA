import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchArticles = (reload) => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await axios.get("/api/articles/");
      setArticles(data.data.article);
    }
    fetchData();
  }, [reload]);
  return articles;
};
