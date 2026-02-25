function PostCard({
    posts,
    likes,
    onLike
}){
    return(
        <div>
            <h1>{posts.title}</h1>
            <h3>Likes:{likes}</h3>

            <button onClick={onLike}>🩷</button>
        </div>
    )
}

export default PostCard;