import { createStore } from 'redux'
import EFormApp from '../reducers/reducers'
import { ADD_ACTIVITY, TOGGLE_ACTIVITIES, SET_VISIBILITY_FILTER, VisibilityFilters,addActivity } from '../actions/actions'


let store = createStore(EFormApp)

console.log(store.getState())

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

store.dispatch(addActivity('Learn about actions'))
store.dispatch(addActivity('Learn about reducers'))
store.dispatch(addActivity('Learn about store'))
//store.dispatch(toggleTodo(0))
//store.dispatch(toggleTodo(1))
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))

unsubscribe()
