import {useEffect, useState} from "react";
import {postService} from "./services";
import {Posts} from "./components/Posts";
import {PostDetails} from "./components/PostDetails";

const App = () => {
    const [posts, setPosts] = useState([])
    const [postId, setPostId] = useState(null)

    useEffect(() => {
        postService.getAll().then(value => value.data).then(value => setPosts([...value]));
    }, []);
    
    return (
        <div>
<h1>Post details</h1>

            <div>
                {!!postId && <PostDetails postId={postId} onRemovePostDetails={setPostId}/>}
            </div>

            <hr/>
            <h1>All posts</h1>

            <div>
                {!!posts.length && <Posts posts={posts} selPosts={setPostId}/>}
            </div>


            
        </div>
    );
};

export {App};