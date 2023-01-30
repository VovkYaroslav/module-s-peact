import {useEffect, useState} from "react";
import {postService} from "../../services/postService";
import {Post} from "./Post";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [count, setCount] = useState(0);
    const [postDetails, setPostDetails]=useState(null)

    useEffect(()=>{
        postService.getAll().then(value => value.data).then(value => setPosts([...value]))
    },[count])

    return (
        <div>

            <div>Post Details:</div>
            {postDetails && <Post post={postDetails} /> }

            <hr/>

            <div>Post:</div>
            {posts.map(post=><Post key={post.id} post={post} setPostDetails={setPostDetails}/>)}

        </div>
    );
};

export {Posts};