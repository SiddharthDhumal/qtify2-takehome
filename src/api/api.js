import axios from "axios";

export const BACKEND_ENDPOINT = `https://qtify-backend-labs.crio.do/`;

export const fetchTopAlbums = async () => {
  try {
    const res = await axios.get(`${BACKEND_ENDPOINT}/albums/top`);
    return res.data;
  } catch (e) {
    console.error(e);
  }
};

export const fetchNewAlbums = async () => {
  try {
    const res = await axios.get(`${BACKEND_ENDPOINT}/albums/new`);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

// export const fetchSlugAlbums = async () => {
//   try {
//     const res = await axios.get(`${BACKEND_ENDPOINT}/album/:slug`);
//     return res.data;
//   } catch (e) {
//     console.log(e);
//   }
// };

export const fetchSongs = async () => {
  try {
    const res = await axios.get(`${BACKEND_ENDPOINT}/songs`);
    // console.log(res.data);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const fetchGenere = async () => {
  try {
    const res = await axios.get(`${BACKEND_ENDPOINT}/genres`);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};
