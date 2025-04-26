import axios from "axios";
export const BASE_URL = "https://api.themoviedb.org/3/";

export const API_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNjQ0YTVmNGRjMWRjNDk4MGY0MDlkN2MwZWUxNmUwOSIsIm5iZiI6MTY4ODIwOTg4OS44OTUsInN1YiI6IjY0YTAwOWUxZDUxOTFmMDBhYzkyMDkzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.t9B4vURuEclTc92s7sauiO9qPp2M04BmfzJ5k7YLmcE";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export const authJsonToken = () => {
  return {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${API_TOKEN} `,
  };
};
