import { fakeProductApi } from "../api/fakeProductsApi.js";
import { useState, useEffect } from "react";

export default function ProductList() {
    const [products, setProducts ]=useState([]);
    const [loading, setLoading] =useState(false);
    const [error, setError] =useState(null);
    const [reloadTrigger, setReloadTrigger]=useState(0);

    useEffect(()=>{
        async function fetchProducts() {
            setLoading(true);
            setProducts([]); //reset old data
            
            fakeProductApi()
                .then(data => {
                    setProducts(data)
                })
                .catch(err => {
                    setError(err)
                })
                .finally(()=>{
                    setLoading(false)
                });
        }

        fetchProducts();
    },[reloadTrigger]) //👈 runs when reloadTrigger changes

    return(
        <div>
            <h2>SaReGaMaPa Instruments</h2>

            <button onClick={() => setReloadTrigger(prev=>prev+1)}>
                Reload Products
            </button>

            {loading && <p>Loading Products...</p>}
            {error && <p>Error fetching the Products!!</p>}

            {!loading && !error && (
                <ul>
                    {products.map(product => (
                        <li key={product.id}>{product.name} - {product.price}</li>
                    ))}
                </ul>
            )}
        </div>
    )

}