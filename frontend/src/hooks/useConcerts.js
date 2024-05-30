import { getConcerts } from "#api/getConcerts";
import { useEffect, useState } from "react";
export const useConcerts = () => {
  const [concerts, setConcerts] = useState([]);

  useEffect(() => {
    const fetchConcerts = async () => {
      try {
        const response = await getConcerts();
        if (response && response.status === 200) {
          setConcerts(response.data);
        }
      } catch (error) {
        console.error("Error fetching concerts", error);
      }
    };
    fetchConcerts();
  }, []);
  return { concerts };
};
