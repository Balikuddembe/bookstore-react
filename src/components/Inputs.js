import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const Inputs = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const id = uuidv4();
  return (
    <section>
      <h2 className="form-title">ADD NEW BOOK</h2>
      <form className="add-form">
        <input
          className="input title-input"
          placeholder="Book"
          value={title}
          type="text"
          onInput={(e) => setTitle(e.target.value)}
        />
        <input
          className="input title-input"
          placeholder="Author"
          value={author}
          type="text"
          onInput={(e) => setAuthor(e.target.value)}
        />
        <button
          className="primary-button-big"
          type="button"
          onClick={() => {
            dispatch(addBook({
              id, title, author,
            }));
            setAuthor('');
            setTitle('');
          }}
        >
          ADD BOOK
        </button>
      </form>
    </section>
  );
};

export default Inputs;
