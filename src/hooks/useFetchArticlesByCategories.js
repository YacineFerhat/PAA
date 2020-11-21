import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchArticlesByCategories = (reload) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/articles/categories`
      );

      setData(data.data.categories);
    }
    fetchData();
  }, [reload]);
  return data;
};
