import { useState } from 'react';
import toast from 'react-hot-toast';
import styles from './SearchBar.module.css';

export default function SearchBar({ onSubmit }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (searchTerm.trim() === '') {
      toast.error('Please enter a search term');
      return;
    }

    onSubmit(searchTerm);
    setSearchTerm('');
  };

  return (
    <header className={styles.header}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchTerm}
          onChange={handleChange}
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Search
        </button>
      </form>
    </header>
  );
}
