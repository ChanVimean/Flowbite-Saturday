import { useEffect, useState } from "react";
import fetchApi from "../utils/fetchApi";

const useApi = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const result = await fetchApi();
      setData(result);
    }

    getData();
  }, [data]);

  return { data };
}

export default useApi;