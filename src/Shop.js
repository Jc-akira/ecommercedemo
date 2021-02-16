import React,{useState} from 'react';




const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';
 
function Shop(){
    const [cart, setCart] = useState([]); 
   
    const [page, setPage] = useState(PAGE_PRODUCTS);

   const addToCart = (product) => {
    setCart([...cart,product]);
  };

  const removeFromCart = (productToRemove) => {
  setCart(cart.filter(product => product !== productToRemove));
  }

  const navigateTO = (nextPage) => {
    setPage(nextPage);
    };

  const renderProducts = () =>(
    <>
     <h1>Products</h1>
    <div className="products">
    {products.map((product, idx) => (
     
    <div className="product" key={idx}>
      <h3>{product.name}</h3>
      <h4>{product.cost}</h4>
      <img src ={product.image}></img><br/>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  
  
    ) )}
    </div>
    </>
  );
  const renderCart = () =>(
    <>
    <h1>Cart</h1>
    <div className="products">
    {cart.map((product, idx) => (
     
    <div className="product" key={idx}>
      <h3>{product.name}</h3>
      <h4>{product.cost}</h4>
      <img src ={product.image}></img><br/>
      <button onClick={() => removeFromCart(product)}>Remove</button>
    </div>
  
  
    ) )}
    </div>
    </>
  );

 

   const [products] = useState ([
     {
      name: 'Happy ninja',
      cost: '$2.99',
      image: 'T_7_front.jpg',
     },
     {
      name: 'Men fashion',
      cost: '$3.99',
      image: 'hoodie_3_front.jpg',
    },
    {
      name: 'Clothes',
      cost: '$5.99',
      image: 'hoodie_5_front.jpg',
    },
    {
      name: 'Clothes trend',
      cost: '$8.99',
      image: 'T_2_front.jpg',
    },
   ])
    return(
  
    <div>
        <header>
    <button onClick={() => navigateTO(PAGE_CART)}>Go to Cart ({cart.length})</button>
    <button onClick={() => navigateTO(PAGE_PRODUCTS)}>View Products</button>
    </header>
    <div className="shop_pro">
      
      {page === PAGE_PRODUCTS && renderProducts()} 
      {page === 'cart' && renderCart()} 
    
     </div>
      
    
    </div>
    );
  };

  export default Shop;
