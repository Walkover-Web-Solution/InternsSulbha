import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
console.log(todos);

export default combineReducers({
    todos,
    visibilityFilter
})