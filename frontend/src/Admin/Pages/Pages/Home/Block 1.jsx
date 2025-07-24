import React, { useState } from "react";

const Block1 = () => {
    const [formData, setFormData] = useState({
        tagline: "",
        firstPara: "",
        secondPara: "",
        image: null,
    });

    const [preview, setPreview] = useState(null);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "image" && files[0]) {
            setFormData({ ...formData, image: files[0] });
            setPreview(URL.createObjectURL(files[0]));
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("🚀 Form Submitted:");
        console.log("Tagline:", formData.tagline);
        console.log("First Paragraph:", formData.firstPara);
        console.log("Second Paragraph:", formData.secondPara);
        console.log("Image File:", formData.image);
    };

    return (
        <div className="max-w-2xl mx-auto p-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">First part of Aurinko One Health</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Tagline */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Tagline</label>
                    <input
                        type="text"
                        name="tagline"
                        value={formData.tagline}
                        onChange={handleChange}
                        placeholder="Welcome to Aurinko One Health"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        required
                    />
                </div>

                {/* First Paragraph */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">First Paragraph</label>
                    <textarea
                        name="firstPara"
                        value={formData.firstPara}
                        onChange={handleChange}
                        rows="4"
                        placeholder="Aurinko One Health is an innovation ..."
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        required
                    ></textarea>
                </div>

                {/* Second Paragraph */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Second Paragraph</label>
                    <textarea
                        name="secondPara"
                        value={formData.secondPara}
                        onChange={handleChange}
                        rows="4"
                        placeholder="Promoters of this..."
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        required
                    ></textarea>
                </div>

                {/* Image Upload */}
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Upload Image</label>
                    <input
                        type="file"
                        name="image"
                        accept="image/*"
                        onChange={handleChange}
                        className="w-full file:border-0 file:px-4 file:py-2 file:rounded-lg file:bg-blue-100 hover:file:bg-blue-200"
                        required
                    />
                    {preview && (
                        <img
                            src={preview}
                            alt="Preview"
                            className="mt-4 h-40 object-contain rounded-lg border"
                        />
                    )}
                </div>

                {/* Submit Button */}
                <div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition duration-300 shadow-md"
                    >
                        Submit ✅
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Block1;
    