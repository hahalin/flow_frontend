

export const ADD_ACTIVITY = 'ADD_ACTIVITY'

export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'


export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
  SHOW_REVERSE: 'SHOW_Reverse'
}


export function addActivity(text) {
  return { type: ADD_ACTIVITY, text }
}


export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}
