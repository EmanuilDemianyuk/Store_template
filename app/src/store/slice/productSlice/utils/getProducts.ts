import { BASE__URL__API } from "../../../../constants/urlAPI";
import { IProduct } from "@/typesOrInterface/interface";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface GetProductsProps {
  type: "desserts" | "pizza" | "drinks" | "side_dishes";
  data: IProduct[];
}

export const getProducts = createAsyncThunk<
  any,
  string,
  { rejectValue: string }
>("products/getProducts", async function (type, { rejectWithValue }) {
  try {
    const url = `${BASE__URL__API}/category?value=${type}`;

    const response = await axios.get(url).then((response) => {
      return response;
    });

    const data = {
      type,
      data: response.data,
    };

    return data;
  } catch (error) {
    rejectWithValue(error as string);
  }
});
