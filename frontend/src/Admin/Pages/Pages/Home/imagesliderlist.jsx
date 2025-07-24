import React, { useEffect, useState } from 'react';
import axios from '../../../../../api/axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ImageManager = () => {
  const [images, setImages] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState({});
  const [loading, setLoading] = useState({}); // To track per-button loading state

  const fetchImages = async () => {
    try {
      const res = await axios.get('/images/all');
      const imageArray = Array.isArray(res.data.images) ? res.data.images : [];
      setImages(imageArray);
    } catch (err) {
      console.error('Error fetching images:', err);
      setImages([]);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const handleFileChange = (e, imageNo) => {
    setSelectedFiles((prev) => ({
      ...prev,
      [imageNo]: e.target.files[0],
    }));
  };

  const handleDelete = async (no) => {
    setLoading((prev) => ({ ...prev, [no]: 'deleting' }));
    try {
      await axios.delete(`/images/${no}`);
      toast.success(`Image #${no} deleted successfully`);
      fetchImages();
    } catch (err) {
      toast.error(`Failed to delete image #${no}`);
      console.error('Delete error:', err);
    } finally {
      setLoading((prev) => ({ ...prev, [no]: null }));
    }
  };

  const handleUpdate = async (no) => {
    const file = selectedFiles[no];
    if (!file) {
      toast.warning('Please select an image to update.');
      return;
    }

    setLoading((prev) => ({ ...prev, [no]: 'updating' }));
    const formData = new FormData();
    formData.append('image', file);

    try {
      await axios.put(`/images/${no}`, formData);
      toast.success(`Image #${no} updated successfully`);
      fetchImages();
    } catch (err) {
      toast.error(`Failed to update image #${no}`);
      console.error('Update error:', err);
    } finally {
      setLoading((prev) => ({ ...prev, [no]: null }));
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <ToastContainer position="top-right" autoClose={2000} />
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">Image Manager</h2>

      {images.length === 0 ? (
        <p className="text-center text-gray-500">No images found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((img, index) => (
            <div
              key={img._id}
              className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center border hover:shadow-lg transition duration-200"
            >
              <p className="text-sm mb-2 font-semibold text-gray-600">
                Image #{img.no || index + 1}
              </p>

              <img
                src={img.url}
                alt={`Image ${index + 1}`}
                className="w-full h-40 object-contain mb-4 rounded border"
              />

              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleFileChange(e, img.no)}
                className="mb-2 w-full text-sm"
              />

              <div className="flex gap-2 w-full justify-center">
                <button
                  onClick={() => handleUpdate(img.no)}
                  disabled={loading[img.no]}
                  className={`px-3 py-1 rounded text-sm text-white ${
                    loading[img.no] === 'updating'
                      ? 'bg-yellow-400 cursor-not-allowed'
                      : 'bg-yellow-500 hover:bg-yellow-600'
                  }`}
                >
                  {loading[img.no] === 'updating' ? 'Updating...' : 'Update'}
                </button>
                <button
                  onClick={() => handleDelete(img.no)}
                  disabled={loading[img.no]}
                  className={`px-3 py-1 rounded text-sm text-white ${
                    loading[img.no] === 'deleting'
                      ? 'bg-red-400 cursor-not-allowed'
                      : 'bg-red-600 hover:bg-red-700'
                  }`}
                >
                  {loading[img.no] === 'deleting' ? 'Deleting...' : 'Delete'}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageManager;
