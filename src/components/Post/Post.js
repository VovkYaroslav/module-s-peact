const Post = ({post}) => {

    const {id, title} = post;

    return (
        <div>
            <div>id:{post.id}</div>
            <div>title:{post.title}</div>
            <button>Details about this post</button>

        </div>
    );
};

export {Post};