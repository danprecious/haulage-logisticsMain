import axios from "axios";

export const fetchTrucks = async () => {
  try {
    const responses = await axios.get(
      "https://haulage-logistics.free.beeceptor.com/trucks"
    );

    return responses.data;
  } catch (error) {
    console.error("Error fetching truck data:", error);
    throw new Error("Error fetching truck data");
  }
};
