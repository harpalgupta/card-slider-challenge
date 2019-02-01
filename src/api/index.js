import axios from "axios";
const BASEURL = "http://localhost:3001/cards";

export const fetchCards = async (start, end) => {
  let url = "";
  if (start>=0 && end>=0) {
    url = `${BASEURL}/?_start=${start}&_end=${end}`;
  } else {
    url = `${BASEURL}/`;
  }
  const { data } = await axios.get(url);
  return data;
};




export const likeCard = async (id, is_liked) => {
  const url = `${BASEURL}/${id}`;
  const { data } = await axios.patch(url, { is_liked: is_liked });
  return data;
};
