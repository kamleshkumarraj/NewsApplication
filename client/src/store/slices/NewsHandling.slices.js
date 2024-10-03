import {createSlice} from '@reduxjs/toolkit'

const slice = createSlice({
    name : 'news',
    initialState : {
        news : {
        },
        newsCategories : [],
        recentNews : [],
        popularNews : []
    },
    reducers : {
        setNewsList : (state , action) => {
            const {category , data } = action.payload;
               state.news = {...state.news , [category] : data}
            //alternate way for changing.
            // state.news[category] = data
            
        },
        setPopularNews : (state , action) => {
            state.popularNews = action.payload
        },
        setRecentNews : (state , action ) =>{
            state.recentNews = action.payload
        },
        changeLanguage : (state , action) => {
            // const data = action.payload;
            
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
export const {changeLanguage , setNewsList , setNewsCategories , setPopularNews , setRecentNews} = slice.actions
export const getAllNews = (state) => state.newsList.news
export const getAllNewsCategories = (state) => state.newsList.newsCategories
export const getRecentNews = (state) => state.newsList.recentNews
export const getPopularNews = (state) => state.newsList.popularNews