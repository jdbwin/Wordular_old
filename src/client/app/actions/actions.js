import * as types from '../constants/ActionTypes.js';


export function newWord(word) {
  return {
    type: types.NEW_WORD, word 
  }
}

//store_0.dispatch(newWord({id: 1234, description: 'anythin'}))
//}
////export function newWord(wordId) {
////  return (dispatch, getState) => {
////    if (getState().words.byId[wordId].occurance < 1) {
////      dispatch(addToWordBank(wordId))
////    }
////  }
////}
//
//export function getWordBank() {
//  return dispatch => {
//    wordBank.getAllWords(words => {dispatch(receiveWords(words))})
//  }
//}
//
//export function getWord(wordId) {
//  return dispatch => {
//    wordBank.getWord(word => {dispatch(receiveWord(word))})
//  }
//}
