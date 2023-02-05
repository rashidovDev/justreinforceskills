import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from 'date-fns'

const initialState = {
    items : [
        { id : 1, title : "Tashkent", 
        content : "Tashkent is one of the best city in Central Asia",
        date : sub(new Date(), { minutes : 10}).toISOString(),
        image : 'https://t4.ftcdn.net/jpg/03/04/98/91/360_F_304989198_GD6pRZYGHtE0c7wOql0i0m0iSggnZbog.jpg',
        userId : '2',
        reactions : {
            thumsUp : 0,
            wow : 0,
            heart : 0,
            smile : 0,
        },
       },
        { id : 2, title : "Ocean", 
        content : "Pacific ocean is the largest ocean in the world",
        date : sub(new Date(), { minutes : 5}).toISOString(),
        image : 'https://s.hdnux.com/photos/01/27/77/02/23064740/6/rawImage.jpg',
        userId : '3',
        reactions : {
            thumsUp : 0,
            wow : 0,
            heart : 0,
            smile : 0,
        },
       },
       { id : 3, title : "Camp Nou", 
        content : "Camp Nou is one of the largest stadium in the world",
        date : sub(new Date(), { minutes : 5}).toISOString(),
        image : 'https://www.fcbarcelona.com/photo-resources/2021/08/09/276ad270-e5c6-453d-8d9f-212417ad7cb3/Camp-Nou-3.jpg?width=1200&height=750',
        userId : '1',
        reactions : {
            thumsUp : 0,
            wow : 0,
            heart : 0,
            smile : 0,
        },
       },
       { id : 4, title : "Lionel Messi", 
        content : "Lionel Messi is one of the best player of the Football History",
        date : sub(new Date(), { minutes : 2}).toISOString(),
        image : 'https://football24.ua/resources/photos/news/202301/754294.jpg?202301204651&w=1200&h=675&q=10',
        userId : '1',
        reactions : {
            thumsUp : 0,
            wow : 0,
            heart : 0,
            smile : 0,
        },
       },
       { id : 5, title : "Cristiano Ronaldo", 
        content : "Cristiano Ronaldo is one of the best player of the Football History",
        date : sub(new Date(), { minutes : 3}).toISOString(),
        image : 'https://talksport.com/wp-content/uploads/sites/5/2022/11/crop-1262054.jpg?strip=all&quality=100&w=1620&h=1080&crop=1',
        userId : '2',
        reactions : {
            thumsUp : 0,
            wow : 0,
            heart : 0,
            smile : 0
        },
       },
    ]
}

const postsSlice = createSlice({
    name : 'posts',
    initialState,
    reducers : {
        postAdd : {
            reducer(state, action){
                 state.items.push(action.payload)
            },
            prepare(title,content,image,userId){
                return {
                    payload : {
                        id : nanoid(),
                        title, 
                        content,
                        image,
                        date : new Date().toISOString(), 
                        userId,
                        reactions : {
                            thumsUp : 0,
                            wow : 0,
                            heart : 0,
                            smile : 0,
                        }
                    }
                }
            }
        },
        reactionAdded(state, action) {
        const {postId, reaction} = action.payload
        const existingProject = state.items.find(post => post.id === postId)
        if(existingProject){
            existingProject.reactions[reaction]++
        }
        },
        postDelete : (state,action) => {
        state.items = state.items.filter(item => item.id !== action.payload)
        },
        postUpdate : (state, action) => {
            state.items = state.items(item => 
               item.id === action.payload ? action.payload : item
            )
        }
    }
})

export const {postAdd, postDelete, postUpdate, reactionAdded} = postsSlice.actions;
export default postsSlice.reducer