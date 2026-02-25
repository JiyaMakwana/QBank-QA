function DisplayPreview({username}) {
    return (
        <div>
            <h2>Preview: </h2>
            <p>{username || "Nothing typed yet..."}</p>
        </div>
    )
}

export default DisplayPreview;