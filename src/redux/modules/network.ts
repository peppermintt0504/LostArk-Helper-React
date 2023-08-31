import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IItemData } from "../../Interface/IItemData";
import instance from "../../shared/Request";
import { itemIngredients, itemMakingGold } from "../../data/itemData";


export const checkItem : any = createAsyncThunk(
  "network/checkItem",
  async (payload, thunkAPI) => {
    try {
        const targetItem = payload;
        let ItemData : Partial<IItemData> = {}

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
          
          ItemData = {...res.data.Items[0],itemMakingGold:itemMakingGold[res.data.Items[0].Id],ingredients : []};
          
          const ingreList = itemIngredients[ItemData.Id!];

          for(let i = 0; i < ingreList.length - 1; i++){
            const data = await instance({
              method: "post",
              url: "markets/items",
              data: {
                Sort: "GRADE",
                CategoryCode: 90000,
                ItemName: ingreList[i].name,
                PageNo: 0,
                SortCondition: "ASC",
              },
            });
            ItemData.ingredients?.push({...data.data.Items[0],needCount: ingreList[i].needCount});
          }

          ItemData.ingredients?.push({
            BundleCount : 1,
            CurrentMinPrice : 1,
            Grade : "일반",
            Icon : "	https://loatool.taeu.kr/img/item/gold.png",
            Id : 6882701,
            Name : "골드",
            YDayAvgPrice : 1,
            needCount :ingreList[ingreList.length-1].needCount,
          });

      return thunkAPI.fulfillWithValue(ItemData);
    } catch (error) {
      console.log(error)
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const changeIngPrice : any = createAsyncThunk(
  "network/changeIngPrice",
  async (payload : {name : string, changePrice : number}, thunkAPI) => {
    try {
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      console.log(error)
      return thunkAPI.rejectWithValue(error);
    }
  }
);

interface ISettingInitialState {
    data : Partial<IItemData>| null;
}

const initialState: ISettingInitialState = {
    data : {
      Id : null,
      
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
        state.data= action.payload;
    })
    .addCase(changeIngPrice.fulfilled, (state, action) => {
      const temp = state.data?.ingredients?.reduce((x,v,i)=>v.Name==action.payload.name ? i : x,-1);
      console.log(temp);

      state.data!.ingredients![temp!].CurrentMinPrice = action.payload.changePrice;


      
  })
  },
});

export default __userSlice.reducer;