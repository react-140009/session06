import axios from "axios";
import { useEffect, useState } from "react";

export const useFetchData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>(); // generic
  const [page, setPage] = useState(1);
  const [loading, setloading] = useState(false);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    (async () => {
      setloading(true);
      setData(undefined);
      const resp = await axios.get(
        `https://jsonplaceholder.typicode.com/${endpoint}?_page=${page}&_limit=10`
      );
      setTotal(+resp.headers["x-total-count"]);
      setData(resp.data);
      setloading(false);
    })();
  }, [page, endpoint]);

  return {data, page, setPage, loading, total};
}