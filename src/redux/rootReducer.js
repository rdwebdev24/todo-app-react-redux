import {combineReducers} from 'redux'
import { operationReducer } from './todoapp/reducers/operation'

export const rootReducer = combineReducers({
     operationReducer
     // more reducer can be added
})