import {createSlice} from '@reduxjs/toolkit'

const slice = createSlice({
    name : 'news',
    initialState : {
        news : {},
        newsCategories : [],
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
           
            
        },
        setNewsCategories : (state , action) => {
            state.newsCategories = action.payload;
        }
        
    }
})

export const newsHandlerSlice = slice.reducer
export const {changeLanguage , setNewsList , setNewsCategories} = slice.actions
export const getAllNews = (state) => state.newsList.news