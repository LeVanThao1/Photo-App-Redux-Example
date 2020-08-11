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
            const photoId = action.payload;
            return state.filter(a => a.id !== photoId);
        },
        updatePhoto: (state, action) => {
            const newPhoto = action.payload;
            const indexPhoto = state.findIndex(a => a.id === newPhoto.id)
            
            if(indexPhoto >= 0) {
                state[indexPhoto] = newPhoto
            }
        }
    }
})


const { reducer, actions } = photo;
export default reducer;
export const { addPhoto, removePhoto, updatePhoto } = actions;



