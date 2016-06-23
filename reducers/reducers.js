

import { combineReducers } from 'redux'

import { ADD_ACTIVITY, TOGGLE_ACTIVITIES, SET_VISIBILITY_FILTER, VisibilityFilters,foovar }
  from '../actions/actions'

import {visibilityFilter} from './visibilityFilter'

import {createReducer} from '../utils'

import {activities,LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE, LOGOUT_USER} from '../constants'

const { SHOW_ALL } = VisibilityFilters

const {foo} = foovar

function foofun(state = foo,action)
{
  switch (action.type)
  {
    case ADD_ACTIVITY:
      return {
        foostate:state,
        action:"add"
      }
  }
  return state;
}

// function visibilityFilter(state = SHOW_ALL, action) {
//   switch (action.type) {
//     case SET_VISIBILITY_FILTER:
//       return action.filter
//     default:
//       return state
//   }
// }




function activitiesa(state = [], action) {
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
  foofun,
  //visibilityFilter,
  activitiesa
})


const initialState = {
    actlist:[],
    token: null,
    userName: null,
    isAuthenticated: false,
    isAuthenticating: false,
    statusText: null
    
};



const ReducerApp = createReducer(initialState,{
    
    [ADD_ACTIVITY]:(state , payload)=>{
      var list= [...state.actlist,{text:payload,complete:false}];
      state.actlist=list;
      return state;
      
      //return Object.assign({}, state);
    }
})


export default ReducerApp