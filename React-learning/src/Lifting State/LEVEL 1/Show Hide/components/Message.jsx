function Message({isVisible}) {
    return (
        <>
            {isVisible && <h2>Toggled Message</h2>}
        </>
    )
}

export default Message;