import React, { useState } from "react";

const Block1 = () => {
  const [heading, setHeading] = useState("");
  const [items, setItems] = useState([
    { image: null, name: "", rating: "", category: "", preview: "" },
  ]);

  const handleImageChange = (e, index) => {
    const file = e.target.files[0];
    const newItems = [...items];
    newItems[index].image = file;
    newItems[index].preview = URL.createObjectURL(file);
    setItems(newItems);
  };

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const newItems = [...items];
    newItems[index][name] = value;
    setItems(newItems);
  };

  const handleAddMore = () => {
    if (items.length >= 5) {
      alert("❌ Maximum 5 items allowed");
      return;
    }
    setItems([
      ...items,
      { image: null, name: "", rating: "", category: "", preview: "" },
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("📋 Aurinko Healthcare Submission:");
    console.log("Heading:", heading);
    items.forEach((item, index) => {
      console.log(`Item ${index + 1}`);
      console.log("Name:", item.name);
      console.log("Rating:", item.rating);
      console.log("Category:", item.category);
      console.log("Image:", item.image);
    });
    alert("✅ Data saved successfully!");
  };

  return (
    <div className="p-6 max-w-4xl mx-auto pt-0">
      <h2 className="text-2xl font-bold mb-4 text-center text-green-800">
        GLOBAL PROVIDER OF HUMAN NUTRACEUTICALS
      </h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={heading}
          onChange={(e) => setHeading(e.target.value)}
          placeholder="Enter Heading"
          className="w-full border p-2 rounded mb-6"
          required
        />

        {items.map((item, index) => (
          <div key={index} className="border rounded p-4 mb-6 shadow-sm">
            <h3 className="font-semibold mb-2">Product {index + 1}</h3>

            {item.preview && (
              <img
                src={item.preview}
                alt="Preview"
                className="w-32 h-32 object-cover mb-2 rounded border"
              />
            )}

            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageChange(e, index)}
              className="mb-2"
              required
            />

            <input
              type="text"
              name="name"
              value={item.name}
              onChange={(e) => handleChange(e, index)}
              placeholder="Product Name"
              className="w-full border p-2 rounded mb-2"
              required
            />

            <input
              type="number"
              name="rating"
              value={item.rating}
              onChange={(e) => handleChange(e, index)}
              placeholder="Rating (1-5)"
              min="1"
              max="5"
              className="w-full border p-2 rounded mb-2"
              required
            />

            <input
              type="text"
              name="category"
              value={item.category}
              onChange={(e) => handleChange(e, index)}
              placeholder="Category"
              className="w-full border p-2 rounded"
              required
            />
          </div>
        ))}

        <div className="flex justify-between items-center">
          <button
            type="button"
            onClick={handleAddMore}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            ➕ Add More
          </button>

          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            ✅ Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default Block1;