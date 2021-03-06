import * as redux from 'redux';
import thunk from 'redux-thunk';

import {searchTextReducer, showCompletedReducer,todosReducer, authReducer} from 'reducers';

export var  configure = (initialState = {}) => {
  // Combine all reducers
  var reducer = redux.combineReducers({
    searchText: searchTextReducer,
    showCompleted: showCompletedReducer,
    todos: todosReducer,
    auth: authReducer
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
