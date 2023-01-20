import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
     { id : 1, title : "Tashkent", content : "Tashkent is one of the best city in Central Asia"},
     { id : 2, title : "Ocean", content : "Pacific ocean is the largest ocean in the world"},
]

const postsSlice = createSlice({
    name : 'posts',
    initialState,
    reducers : {
        postAdd : {
            reducer(state, action){
                 state.push(action.payload)
            },
            prepare(title, content){
                return {
                    payload : {
                        id : nanoid(),
                        title, 
                        content
                    }
                }
            }
        }
    }
})

export const {postAdd} = postsSlice.actions;

export default postsSlice.reducer