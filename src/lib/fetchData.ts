import axios from "axios";

export const apiUrl =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://mp8405818e082e994cb3.free.beeceptor.com/trucks";

// export const fetchTrucks = async () => {
//   try {
//     const responses = await axios.get(apiUrl);

//     return responses.data;
//   } catch (error) {
//     console.error("Error fetching truck data:", error);
//     throw new Error("Error fetching truck data");
//   }
// };
