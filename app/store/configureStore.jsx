import * as redux from 'redux';
import thunk from 'redux-thunk';

import {searchTextReducer, showCompletedReducer,todosReducer} from 'reducers';

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
      redux.applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

  return store;
};
