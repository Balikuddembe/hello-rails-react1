import { configureStore } from 'redux'
import greetingReducer from './greetings/greetingSlice'

const store = configureStore({
    reducer: {
        greetings: greetingReducer
    },
});

export default store