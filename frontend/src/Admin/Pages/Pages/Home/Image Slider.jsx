import React, { useState } from 'react';
import axios from '../../../../../api/axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ImageSlider = () => {
    const [images, setImages] = useState(Array(5).fill(null));
    const [previews, setPreviews] = useState(Array(5).fill(null));
    const [loading, setLoading] = useState(false); // loading state

    const handleImageChange = (e, index) => {
        const file = e.target.files[0];
        if (file) {
            const newImages = [...images];
            const newPreviews = [...previews];
            newImages[index] = file;
            newPreviews[index] = URL.createObjectURL(file);
            setImages(newImages);
            setPreviews(newPreviews);
        }
    };

    const handleSubmit = async () => {
        const formData = new FormData();
        images.forEach((image) => {
            if (image) formData.append('images', image);
        });

        setLoading(true); // Start loading

        try {
            const res = await axios.post('/images/upload', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });

            // Reset state
            setImages(Array(5).fill(null));
            setPreviews(Array(5).fill(null));

            toast.success('🎉 Images uploaded successfully!');
        } catch (err) {
            toast.error('❌ Error uploading images!');
        } finally {
            setLoading(false); // Stop loading
        }
    };

    return (
        <div className="flex items-center justify-center p-4">
            <div className="p-6 pt-0 w-full">
                <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
                    Upload Slider Images
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-14">
                    {images.map((_, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <label
                                htmlFor={`image-input-${index}`}
                                className="cursor-pointer w-full h-40 border border-dashed border-gray-300 rounded-lg flex items-center justify-center overflow-hidden mb-2 bg-gray-50"
                            >
                                {previews[index] ? (
                                    <img
                                        src={previews[index]}
                                        alt={`Preview ${index + 1}`}
                                        className="h-full object-contain"
                                    />
                                ) : (
                                    <span className="text-gray-400">Preview {index + 1}</span>
                                )}
                            </label>
                            <input
                                id={`image-input-${index}`}
                                type="file"
                                accept="image/*"
                                onChange={(e) => handleImageChange(e, index)}
                                className="hidden"
                            />
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-center">
                    <button
                        onClick={handleSubmit}
                        className={`${
                            loading ? 'bg-blue-400 cursor-not-allowed animate-pulse' : 'bg-blue-600 hover:bg-blue-700'
                        } text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300`}
                        disabled={loading}
                    >
                        {loading ? 'Uploading...' : 'Submit'}
                    </button>
                </div>
            </div>

            {/* Toast container */}
            <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
        </div>
    );
};

export default ImageSlider;
