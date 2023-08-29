import { useState, useEffect } from 'react';
import { fetch } from '../utils/fetch';

export const useFetch = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch().get(`${url}`);
      const { data } = res;
      setData(data);
    }
    fetchData();
  }, [url]);

  return data;
};
