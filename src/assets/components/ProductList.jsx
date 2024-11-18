// every component needs to be saved as a separate jsx file here, 
// then i create the functions as export default and import
// into the main file (i think app.jsx) 

//import React from "react"// leave this here in case you wanna grab things in the future 
import ProductItem from "./ProductItem";

function ProductList({ products }) {
  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <ProductItem product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList; // Ensure this line is present

//use  empty set of brackets to wrap things and debug 
//used map to create a list 

 
//rest of the porductList function in notes 
//key (task 5) is critical: it makes stuff unique ike when amazon indicates products 

