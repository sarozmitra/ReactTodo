import moment from 'moment';
import firebase, {firebaseRef, githubProvider} from 'app/firebase/';

export var setSearchText = (searchText) => {
  return{
    type: 'SET_SEARCH_TEXT',
    searchText
  }
};

export var addTodo = (todo) => {
  return{
    type: 'ADD_TODO',
    todo
  }
};

export var startAddTodo = (text) => {
  return (dispatch, getState) =>{
    var todo = {
      text,
      completed: false,
      createdAt: moment().unix(),
      completedAt: null
    };
    var todoRef = firebaseRef.child('todos').push(todo);

    return todoRef.then(() => {
      dispatch(addTodo({
        ...todo,
        id: todoRef.key
      }));
    });

  };
};


export var addTodos = (todos) => {
  return{
    type: 'ADD_TODOS',
    todos
  }
};

export var startAddTodos = () => {
  return(dispatch, getState) => {
      var todoRef = firebaseRef.child('todos');

      todoRef.once('value').then((snapshot) => {
        var todos = snapshot.val() || {};
        var parseTodos = [];

        Object.keys(todos).forEach((todoId) => {
          parseTodos.push({
            id:todoId,
            ...todos[todoId]
          });
        });

        dispatch(addTodos(parseTodos));

      });
  };
};


export var toggleShowCompleted = () => {
  return{
    type: 'TOGGLE_SHOW_COMPLETED',
  }
};

export var updateTodo = (id, updates) => {
  return{
    type: 'UPDATE_TODO',
    id,
    updates
  }
};

export var startToggleTodo = (id, completed) => {
  return (dispatch, getState) => {
    var todoRef = firebaseRef.child(`todos/${id}`);
    var updates ={
      completed,
      completedAt: completed ? moment().unix() : null
    };
    return todoRef.update(updates).then(() => {
      dispatch(updateTodo(id, updates));
    });
  };
};

// Login
export var startLogin = () => {
  return (dispatch, getState) => {
    return firebase.auth().signInWithPopup(githubProvider).then((result) => {
      console.log('Auth worked', result);
    }, (error) =>{
      console.log('Unable to auth', error);
    });
  };
};

// Logout
export var startLogout = () => {
  return (dispatch, getState) => {
    return firebase.auth().signOut().then(() => {
      console.log('Logged out!')
    });
  };
};
