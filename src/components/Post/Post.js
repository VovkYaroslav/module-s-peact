const Post = ({post, setPostDetails}) => {
    const {id, title, body} = post;
    return (
        <div>

            <div>id:{post.id}</div>
            <div>title:{post.title}</div>
            <div>body:{post.body}</div>
            <button onClick={()=>setPostDetails(post)}>Details about this post</button>

        </div>
    );
};

export {Post};