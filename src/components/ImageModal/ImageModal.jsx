import Modal from 'react-modal';
import styles from './ImageModal.module.css';

export default function ImageModal({ image, onClose }) {
  if (!image) return null;

  return (
    <Modal
      isOpen={true}
      onRequestClose={onClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <button onClick={onClose} className={styles.closeBtn}>
        &times;
      </button>
      <img
        src={image.urls.regular}
        alt={image.alt_description}
        className={styles.image}
      />
      <div className={styles.info}>
        {image.description && (
          <p>
            <strong>Description:</strong> {image.description}
          </p>
        )}
        <p>
          <strong>Author:</strong> {image.user.name}
        </p>
        <p>
          <strong>Likes:</strong> {image.likes}
        </p>
      </div>
    </Modal>
  );
}
