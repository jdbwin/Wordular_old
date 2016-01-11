import Reqwest from 'reqwest';

export function callAPI(method, callback) {

  Reqwest({
    url: 'http://localhost:3000/words',
    type: 'json',
    method: method,
    contentType: 'application/json',
  }).then(function(words) {
    return words
  })
}
