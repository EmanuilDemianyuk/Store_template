import { BASE__URL__API } from "../../../../constants/urlAPI";
import { IProduct } from "@/typesOrInterface/interface";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getTopProducts = createAsyncThunk<
  IProduct[],
  number,
  { rejectValue: string }
>("products/getTopProducts", async function (minRating, { rejectWithValue }) {
  try {
    const url = `${BASE__URL__API}/?rating=${minRating}`;

    const response = await axios.get(url).then((response) => {
      return response;
    });

    return response.data;
  } catch (error) {
    rejectWithValue(error as string);
  }
});
