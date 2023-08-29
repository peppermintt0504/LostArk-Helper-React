import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IItemData } from "../../Interface/IItemData";
import instance from "../../shared/Request";


export const checkItem : any = createAsyncThunk(
  "network/checkItem",
  async (payload, thunkAPI) => {
    try {
        const targetItem = payload;
        const res = await instance({
            method: "post",
            url: "markets/items",
            data: {
              Sort: "GRADE",
              CategoryCode: 50010,
              ItemName: targetItem,
              PageNo: 0,
              SortCondition: "ASC",
            },
          });


      return thunkAPI.fulfillWithValue(res.data.Items[0]);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);


interface ISettingInitialState {
    data : Partial<IItemData>| null;
}

const initialState: ISettingInitialState = {
    data : {
        ItemId : null
    },
};


export const __userSlice = createSlice({
  name: "network",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
    .addCase(checkItem.fulfilled, (state, action) => {
        state.data!.ItemId= action.payload.Id;
        state.data!.BundleCount= action.payload.BundleCount;
        state.data!.Icon= action.payload.Icon;
        state.data!.Name= action.payload.Name;
        state.data!.YDayAvgPrice= action.payload.YDayAvgPrice;
        state.data!.CurrentMinPrice= action.payload.CurrentMinPrice;
    })
  },
});

export default __userSlice.reducer;