import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchLogosSponsors = (reload) => {
  const [logos, setLogos] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/logos/sponsors`
      );
      setLogos(data.data.logo);
    }
    fetchData();
  }, [reload]);
  return logos;
};
