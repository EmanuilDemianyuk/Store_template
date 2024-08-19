import axios from "axios";
import { BASE__URL__API } from "../../constants/urlAPI";

export const getProduct = async (type: string) => {
  const url = `${BASE__URL__API}/category?value=${type}`;

  return await axios.get(url).then((response) => {
    return response;
  });
};
