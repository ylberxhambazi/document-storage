import { AnyAction, combineReducers, configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './api/apiSlice'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

const combinedReducer = combineReducers({
    [apiSlice.reducerPath]: apiSlice.reducer
})

const rootReducer = (state: RootState | undefined, action: AnyAction) => combinedReducer(state, action)

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
})

type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export type RootState = ReturnType<typeof combinedReducer>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector