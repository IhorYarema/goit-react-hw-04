import styles from './LoadMoreBtn.module.css';

export default function LoadMoreBtn({ onClick }) {
  return (
    <div className={styles.container}>
      <button onClick={onClick} className={styles.button}>
        Load more
      </button>
    </div>
  );
}
