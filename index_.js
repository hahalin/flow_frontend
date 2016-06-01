import { createStore } from 'redux'

function counter(statea = 0, action) {
  switch (action.type) {
  case 'INCREMENT':
    return statea+1;
  case 'DECREMENT':
  	//action="minus"
  	
    return statea-1
  default:
    return 0
  }
} 


let store = createStore(counter)

store.subscribe(() =>
  {
    console.log(store.getState());
    //console.log(store.getAction());
  }
)

store.dispatch({ type: 'INCREMENT' }) 
store.dispatch({ type: 'DECREMENT' })
store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'DECREMENT' })
store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'INCREMENT' })
