
function ProductItem({ product }) {
    if (!product) return null; // Checks if the product exists
  
    const { name, price, description } = product;
  
return (
<div>
        <h3>{name}</h3>
        <p>Price: ${price}</p>
        <p>Description: {description}</p>
      </div>
    );
  }
  
  export default ProductItem;
  