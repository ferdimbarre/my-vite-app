import { useState } from "react";


function idGenerator (){
    let time = Date.now();
    const mathRand= Math.floor(Math.random()* 1000)
    return `${time}${mathRand}`
} //generates unique id using combination of two methods 

function AddProductForm({addProduct}) {

  const formSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const newProduct = {
      id: idGenerator(), //generating an unique id that isnt based on math random or an array index
      name: formData.get("name"),
      price: parseFloat(formData.get("price")),
      description: formData.get("description"),
    };

    addProduct(newProduct);
  };//creates a new product 

  return (
    <form onSubmit={formSubmit}>
      <h2>Add Product Form</h2>
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
} //creates the form for the product 

export default AddProductForm;
