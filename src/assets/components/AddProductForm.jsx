import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function AddProductForm({addProduct}) {

  const formSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const newProduct = {
      id: uuidv4(), //generating an unique id that isnt based on math random or an array index
      name: formData.get("name"),
      price: parseFloat(formData.get("price")),
      description: formData.get("description"),
    };

    addProduct(newProduct);
  };

  return (
    <form onSubmit={formSubmit}>
      <h1>Add Product Form</h1>
      <div>
        <label htmlFor="name">Product Name: </label>
        <input type="text" id="name" name="name" required />
      </div>
      <div>
        <label htmlFor="price">Product Price: </label>
        <input type="number" id="price" name="price" required />
      </div>{" "}
      <div>
        <label htmlFor="description">Product Description: </label>
        <input type="text" id="description" name="description" required />
      </div>
      <button type="submit">Submit New Product</button>
    </form>
  );
}

export default AddProductForm;
