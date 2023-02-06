import {useEffect, useState} from "react";
import {postService} from "../services";

const PostDetails = ({postId, onRemovePostDetails}) => {

    const [post, setPost] = useState(null);

    useEffect(() => {
        if (postId) {
            postService.getById(postId).then(value => value.data).then(value => setPost(value))
        }
    }, [postId])
    if (!post) return null;

    return (
        <div>

            <div>id:{post.id}</div>
            <div>user ID: {post.userId}</div>
            <div>title: {post.title}</div>
            <div>body: {post.body}</div>

        </div>
    );
};

export {PostDetails};