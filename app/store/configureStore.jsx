var redux = require('redux');
//var thunk = require('redux-thunk').default;
var {searchTextReducer, showCompletedReducer,todosReducer} = require('reducers');

export var  configure = (initialState = {}) => {
  // Combine all reducers
  var reducer = redux.combineReducers({
    searchText: searchTextReducer,
    showCompleted: showCompletedReducer,
    todos: todosReducer
  });

  // Create store, add redux devtools
  var store = redux.createStore(reducer, initialState,
    redux.compose(
      //redux.applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

  return store;
};
