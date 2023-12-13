import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {id:'1',name:"Mohammed Rafi T S"},
  {id:'2',name:"Rare Read"},
  {id:'3',name:"Kyle"},
]

const userSlice = createSlice({
  name:'users',
  initialState,
  reducers:{}
})

export const stateOfUser = state => state.users
export default userSlice.reducer