import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchGlobalInfo = (reload) => {
  const [infos, setInfos] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const data = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/infos/`
      );
      setInfos(data.data.information);
    }
    fetchData();
  }, [reload]);
  return infos;
};
