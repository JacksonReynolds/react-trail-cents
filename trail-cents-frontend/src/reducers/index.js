import { combineReducers } from 'redux'
import {rewards} from './rewards'
import { events } from './events'
import { user } from './user'
import {errors} from './errors'

export const root = combineReducers({
    events, rewards, user, errors
})