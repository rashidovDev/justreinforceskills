import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from 'date-fns'

const initialState = [
     { id : 1, title : "Tashkent", 
     content : "Tashkent is one of the best city in Central Asia",
     date : sub(new Date(), { minutes : 10}).toISOString(),
     image : 'https://t4.ftcdn.net/jpg/03/04/98/91/360_F_304989198_GD6pRZYGHtE0c7wOql0i0m0iSggnZbog.jpg'
    },
     { id : 2, title : "Ocean", 
     content : "Pacific ocean is the largest ocean in the world",
     date : sub(new Date(), { minutes : 5}).toISOString(),
     image : 'https://s.hdnux.com/photos/01/27/77/02/23064740/6/rawImage.jpg'
    },
]

const postsSlice = createSlice({
    name : 'posts',
    initialState,
    reducers : {
        postAdd : {
            reducer(state, action){
                 state.push(action.payload)
            },
            prepare(title, content, userId, image){
                return {
                    payload : {
                        id : nanoid(),
                        title, 
                        content,
                        image,
                        date : new Date().toISOString(), 
                        userId
                    }
                }
            }
        }
    }
})

export const {postAdd} = postsSlice.actions;

export default postsSlice.reducer