import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { createBook } from '../redux/books/books';

const Inputs = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const [error, setError] = useState('');

  const postBook = () => {
    if (!title || !author || !category) {
      setError('All fields are required.');
      return;
    }
    setError('');
    dispatch(
      createBook(
        {
          item_id: uuidv4(),
          title,
          author,
          category,
        },
      ),
    );
  };
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
          required
        />
        <input
          className="input author-input"
          placeholder="Author"
          value={author}
          type="text"
          onInput={(e) => setAuthor(e.target.value)}
          required
        />
        <input
          className="input category-input"
          placeholder="Category"
          value={category}
          type="text"
          onInput={(e) => setCategory(e.target.value)}
          required
        />
        {error && <p className="error">{error}</p>}
        <button
          className="primary-button-big"
          type="submit"
          onClick={() => {
            postBook();
            setAuthor('');
            setTitle('');
            setCategory('');
          }}
        >
          ADD BOOK
        </button>
      </form>
    </section>
  );
};

export default Inputs;
