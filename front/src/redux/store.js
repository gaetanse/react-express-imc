import {configureStore} from '@reduxjs/toolkit'
import ImcReducer from './imc/imcReducer'

const store = configureStore({reducer: ImcReducer})

export default store