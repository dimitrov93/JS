import { useEffect, useState } from "react";

const useFetch = (url, defaultValue) => {
  const [data, setData] = useState(defaultValue);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true)
    fetch("http://localhost:3030/jsonstore/todos")
      .then(res => res.json())
      .then(result => {
        setIsLoading(false)
        setData(Object.values(result));
      });
  }, [url]);

  return [data, setData, isLoading];
};

export default useFetch;
