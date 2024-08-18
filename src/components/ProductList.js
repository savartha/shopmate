import React, { useState,useEffect,useCallback } from 'react'

import { useCustomFetch } from '../hooks/useCustomFetch';

export const ProductList = () => {
    // const [products,setProducts] = useState([]);
    const [url,setUrl] = useState("http://localhost:7000/products");


    /*
        fetch(url)
        .then(response =>response.json() )
        .then((data) => setProducts(data));
    */
      /*  const fetchProducts = async () =>{
            const response = await fetch(url);
            const data = await response.json();
            setProducts(data);
        }  */

       /* const fetchProducts = useCallback( async () => {
            const response = await fetch(url);
            const data = await response.json();
            setProducts(data);
        }, [url]);
    useEffect(()=>{
     
        fetchProducts();

        
    },[fetchProducts]); */
    const {data: products,loading,error} =useCustomFetch(url);
  return (
    <section>
        <div className="filter">
        <button onClick={()=>setUrl("http://localhost:7000/products")}>All</button>
        <button onClick={()=>setUrl("http://localhost:7000/products?inStock=true")}>In Stock</button>
        {loading && <p>Loading products</p>}
        {error && <p>{error}</p>}
        </div>
        
        {
           products && products.map((product) => (
                <div className="card" key={product.id}>
                    <p className="id">{product.id}</p>
                    <p className="name">{product.name}</p>
                    <p className="info">
                        <span>${product.price}</span>
                        <span className={product.inStock?"instock":"unavailable"}>{product.inStock?"inStock":"Unavailable"}</span>
                    </p>

                </div>

            ))
        }
        
    </section>
  )
}
