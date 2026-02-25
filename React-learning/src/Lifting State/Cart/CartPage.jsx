import {useState} from "react";
import {products} from "./data.js";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";

export default function CartPage() {
    // const [cartCount, setCartCount]=useState(0);
    const [cartItems, setCartItems] = useState([]);

    const handleAdd=(id)=>{
        // setCartCount((prev) => prev + 1);
        setCartItems((prev) => [...prev,id]);   //... called spread operator -> Open this array and take everything inside it
    }

    const handleRemove=(id)=>{
        // setCartCount((prev) => (prev > 0 ? prev-1:0));
        //find index
        const index=cartItems.indexOf(id);
        if(index===-1) return;

        //copy array
        const updated=[...cartItems];
        updated.splice(index,1);    //remove 1 item at index 0
        setCartItems(updated);  //update state
    }

    return(
        <div>
            <Navbar cartCount={cartItems.length}/>

            <ProductList 
                productArr={products}
                cartItems={cartItems}
                onAdd={handleAdd}
                onRemove={handleRemove}
            />
        </div>
    )
}