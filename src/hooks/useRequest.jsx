import { useState } from "react";

const apiKey = import.meta.env.VITE_CRUDAPI_API_KEY;

function useRequest() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = async (url, method, body) => {
    try {
      setLoading(true);
      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: !!body && method !== "GET" ? JSON.stringify(body) : undefined,
      });

      if (!res.ok) throw Error("Failed To Send Data");
      const data = await res.json();

      return data.items;
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, sendRequest };
}

export default useRequest;
