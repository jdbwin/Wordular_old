import { NEW_WORD } from '../constants/ActionTypes'
import { createStore, combineReducers } from 'redux'

export default function wordReducer(state = {}, action) {

  switch (action.type) {

    case NEW_WORD:
      return [
        {
          word: action.value
        },
        ...state
      ]

    default:
      return state
  }

}

var reducer = combineReducers({ words: wordReducer })
var store_0 = createStore(reducer)

store_0.subscribe(function() {
  console.log('store_0 updated. Latest store state:', store_0.getState());
})
