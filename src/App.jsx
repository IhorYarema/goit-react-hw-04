import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Modal from 'react-modal';

import { searchImages } from './api/unsplash';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';

Modal.setAppElement('#root');

export default function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    if (!query) return;

    const fetchImages = async () => {
      try {
        setLoading(true);
        const data = await searchImages(query, page);
        setImages(prev => [...prev, ...data.results]);
        setError(null);
      } catch (error) {
        setError('Error loading images');
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [query, page]);

  const handleSearch = newQuery => {
    if (!newQuery.trim()) {
      toast.error('Please enter a search term');
      return;
    }
    if (newQuery === query) return;

    setQuery(newQuery);
    setImages([]);
    setPage(1);
  };

  const openModal = image => setModalData(image);
  const closeModal = () => setModalData(null);

  return (
    <>
      <Toaster />
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={openModal} />
      {loading && <Loader />}
      {images.length > 0 && !loading && (
        <LoadMoreBtn onClick={() => setPage(p => p + 1)} />
      )}
      {modalData && <ImageModal image={modalData} onClose={closeModal} />}
    </>
  );
}
