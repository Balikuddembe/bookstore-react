import { v4 as uuidv4 } from 'uuid';
// Actions
const ADD = 'bookstore-react/booksReducer/ADD';
const REMOVE = 'bookstore-react/booksReducer/REMOVE';
// Array with list of books
const listBooks = [
  {
    id: uuidv4(),
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
  },
  {
    id: uuidv4(),
    title: 'The House of Mirth',
    author: 'Edith Wharton',
  },
  {
    id: uuidv4(),
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
  },
];
// Reducer
export default function booksReducer(state = listBooks, action) {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.book,
      ];

    case REMOVE:
      return state.filter((book) => book.id !== action.id);
    default: return state;
  }
}

// Action Creators
export const addBook = (book) => ({
  type: ADD,
  book,
});

export const removeBook = (book) => ({
  type: REMOVE,
  book,
});
