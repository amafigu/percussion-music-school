import axios from "axios";

export const getConcerts = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/concerts`,
    );
    if (response && response.status === 200) {
      return response;
    }
  } catch (error) {
    throw error;
  }
};
