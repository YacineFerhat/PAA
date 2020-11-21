import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchArticleByTitle = (title) => {
  const [article, setArticle] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/articles/articleByName/${title}`
      );
      setArticle(data.data.article);
    }
    fetchData();
  }, []);
  return article;
};
