import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    styleCard :'grid',
}

const styleSlice = createSlice({
    name :'style',
    initialState,
    reducers:{
        toggleStyle: (state) => {
            state.styleCard = state.styleCard === 'list' ? 'grid' : 'list';
        }
    }
})

export const { toggleStyle } = styleSlice.actions;
export default styleSlice.reducer;

