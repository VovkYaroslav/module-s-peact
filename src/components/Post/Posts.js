import {useEffect, useState} from "react";

import {postService} from "../../services";
import {Post} from "./Post";
import {DetailsPost} from "../DetailsPost/DetailsPost";

const Posts = () => {
    const [posts, setPosts]=useState([]);
    const [count, setCount]=useState(0)
    const [postDetailes, setPostDetailes]=useState(null)


    useEffect(()=>{postService.getAll().then(value => value.data).then(value =>setPosts ([...value]))},[count])

    return (
        <div>
            <h1>Post details</h1>
            {posts.map(detail=><DetailsPost key={detail.id} postDetails={detail.title}  />)}

            <hr/>

            <h1>Posts</h1>
            {posts.map(post=><Post key={post.id} post={post} postDetails={setPostDetailes} />)}
        </div>
    );
};

export {Posts};