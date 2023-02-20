import { configureStore } from '@reduxjs/toolkit'
import auth from './auth'
import posts from './postData'

export const store = configureStore({

    reducer: {
        auth,
        posts
    },
})