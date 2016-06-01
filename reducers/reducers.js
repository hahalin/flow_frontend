

import { combineReducers } from 'redux'

import { ADD_ACTIVITY, TOGGLE_ACTIVITIES, SET_VISIBILITY_FILTER, VisibilityFilters } from '../actions/actions'

const { SHOW_ALL } = VisibilityFilters


function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}


function activities(state = [], action) {
  switch (action.type) {
    case ADD_ACTIVITY:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    // case TOGGLE_TODO:
    //   return state.map((activity, index) => {
    //     if (index === action.index) {
    //       return Object.assign({}, activity, {
    //         completed: !activity.completed
    //       })
    //     }
    //     return activity
    //   })
    default:
      return state
  }
}

const EFormApp = combineReducers({
  visibilityFilter,
  activities
})

export default EFormApp