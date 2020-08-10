import { createSlice } from '@reduxjs/toolkit'
import { photos } from 'constants/photos';
const photo = createSlice({
    name: 'photos',
    initialState: photos,
    reducers: {
        addPhoto: (state, action) => {
            state.push(action.payload)
        },
        removePhoto: (state, action) => {
            const removePhoto = action.payload;
            state = state.filter(a => a.id !== removePhoto);
        }
    }
})


const { reducer, actions } = photo;
export default reducer;
export const { addPhoto, removePhoto } = actions;



