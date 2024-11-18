import { useState } from 'react'
import './App.css'
import ProductList from './assets/components/ProductList'
import AddProductForm from './assets/components/AddProductForm';

function App() {
  const [products, setProducts] = useState ([
    {id: 1, name: "Laptop", price: 1200, description: "MacBook 2020"},
    {id: 2, name: "Burguer", price: 9, description: "with fries included"}, 
    {id: 3, name: "Coke", price: 3, description: "Diet Coke" },
    ]); 

// to create the prop i used i addprofuctform
const addProduct = (newProduct) => {
 setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

//components will be returned inside the return
  return (
    <> 
  <ProductList products = {products}/>
  <AddProductForm addProduct={addProduct}/>
  
   </>
  )
}

export default App
// create the app function here 

