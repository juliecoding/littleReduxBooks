import { combineReducers } from 'redux';
import BooksReducer from './reducer_books.js'
import ActiveBook from './reducer_active_book'

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;



//A reducer is a function that returns a piece of the application's state
//Many pieces of state means we can have many reducers.
//Key of state, value of state, where the value of state is produced by the reducer

