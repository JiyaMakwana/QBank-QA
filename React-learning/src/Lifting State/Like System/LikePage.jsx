import {useState} from "react";
import {posts} from "./data.js";
import TotalLikes from "./components/TotalLikes";
import PostList from "./components/PostList";

export default function LikePage() {
    const [likes, setLikes]=useState([0,0,0]);

    const updateLike=(index) => {
        setLikes((prev) => {
            const updated=[...prev];
            updated[index] += 1;
            return updated;
    });
    };

    const totalLikes=likes.reduce((sum,value)=> sum+value,0);

    return(
        <div>
            <TotalLikes totalLikes={totalLikes}/>

            <PostList
                posts={posts}
                likes={likes}
                onLike={updateLike}
                />
        </div>
    )

}