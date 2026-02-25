import ProductCard from "./ProductCard";

function ProductList({productArr,cartItems, onAdd, onRemove}) {
    return(
        <>
            {productArr.map((product)=>{
                const quantity=cartItems.filter(
                    (id)=> id===product.id
                ).length;

                return ( <ProductCard key={product.id}
                            product={product}
                            quantity={quantity}
                            onAdd={onAdd}
                            onRemove={onRemove}    /> );
            })} 
        </>
    )
}

export default ProductList;