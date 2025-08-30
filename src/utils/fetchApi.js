import axios from "axios";

const fetchApi = async () => {
  const res = await axios("https://clothes-json.onrender.com/products");
  return res.data;
};


export default fetchApi;
