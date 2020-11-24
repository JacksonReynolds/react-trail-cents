import { combineReducers } from 'redux'
import {rewards} from './rewards'
import { events } from './events'
import { user } from './user'

export const root = combineReducers({
    events, rewards, user
})