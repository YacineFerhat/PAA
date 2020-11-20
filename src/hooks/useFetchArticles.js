import { useState, useEffect } from "react";
import axios from "axios";
export const useFetchArticles = (reload, category, tag) => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await axios.get("/api/articles/");
      setArticles(data.data.article);
    }
    fetchData();
  }, [reload]);
  if (category !== "") {
    setArticles(articles.filter((article) => article.categories === category));
  }
  console.log(reload, category, tag);
  return articles;
};
