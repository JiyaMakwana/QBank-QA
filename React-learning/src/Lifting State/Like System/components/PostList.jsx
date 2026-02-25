import PostCard from "./PostCard";

function PostList({posts, likes, onLike}) {
    return(
        <div>
            {posts.map((post,index)=>{
                return (
                    <PostCard
                        key={post.id}
                        posts={post}
                        likes={likes[index]}
                        onLike={() => onLike(index)}
                    />
                )
            })}
        </div>
    )
}

export default PostList;