function ProductCard({product,quantity, onAdd, onRemove}) {
    return(
        <div>
            <h3>{product.name}</h3>
            <p>Quantity: {quantity}</p>

            <button onClick={() => onAdd(product.id)}>Add</button>
            <button onClick={() => onRemove(product.id)} disabled={quantity===0}>Remove</button>
        </div>
    )
}

export default ProductCard;