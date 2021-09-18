import {createStore} from 'redux'
import rootReducer from './reducers'
const initialstate={}
const store =createStore(rootReducer,initialstate,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store;