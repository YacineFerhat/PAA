import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchLogosAssociations = (reload) => {
  const [logos, setLogos] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/logos/associations`
      );
      setLogos(data.data.logo);
    }
    fetchData();
  }, [reload]);
  return logos;
};
