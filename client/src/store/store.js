import {configureStore} from '@reduxjs/toolkit'
import { selfHandler } from './slices/selfHandler.slice.js'
import { apiHandlingReducers } from './slices/apiResonseHandler.slice.js'
import { newsHandlerSlice } from './slices/NewsHandling.slices.js'

export const store = configureStore({
    reducer : {
        self : selfHandler,
        apiResponse : apiHandlingReducers,
        newsList : newsHandlerSlice
    }
})