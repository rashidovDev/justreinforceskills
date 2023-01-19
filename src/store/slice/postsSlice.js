import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    people : [
        {id : 1, name : "Anvar", age : "22"},
        {id : 2, name : "Ruslan", age : "24"},
    ],
}

const postsSlice = createSlice({
    name : 'posts',
    initialState,
    reducers : {
        postAdd : {
            reducer(state, action){
                 state.people.push(action.payload)
            },
            prepare(name, age){
                return {
                    payload : {
                        id : nanoid(),
                        name, 
                        age
                    }
                }
            }
        }
    }
})

export const {postAdd} = postsSlice.actions;

export default postsSlice.reducer