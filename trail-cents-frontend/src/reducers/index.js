import { combineReducers } from 'redux'
import {rewards} from './rewards'
import { events } from './events'

export const root = combineReducers({
    events, rewards
})