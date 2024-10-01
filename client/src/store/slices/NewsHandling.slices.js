import {createSlice} from '@reduxjs/toolkit'

const slice = createSlice({
    name : 'news',
    initialState : {
        news : {}
    },
    reducers : {
        setNewsList : (state , action) => {
            state.news = action.payload;
        },
        changeLanguage : (state , action) => {
            // const data = action.payload;
            console.log(state.news)
            Object.keys(state.news).map((category) => {
                state.news[category].map((newsItem) => {
                    newsItem.title = "Hello"
                })
            })
           
            
        }
        
    }
})

export const newsHandlerSlice = slice.reducer
export const {changeLanguage , setNewsList} = slice.actions
export const getAllNews = (state) => state.newsList.news