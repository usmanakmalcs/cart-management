import axios from "axios";
import { useEffect, useRef, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const hasDataFetched = useRef(false);

  useEffect(() => {
    if (!hasDataFetched.current) {
      setLoading("loading...");

      axios
        .get(url)
        .then((res) => {
          setLoading(false);
          res.data.content && setData(res.data.content);
          res.content && setData(res.content);
          res.data && setData(res.data);
        })
        .catch((err) => {
          setLoading(false);
          setError("An error occurred");
        });
    }

    return () => {
      hasDataFetched.current = true;
    };
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
