const DetailsPost = ({postDetails}) => {
    const {userId, id, title, body}=postDetails;
    return (
        <div>
            <div>userId:{postDetails.userId}</div>
            <div>id:{postDetails.id}</div>
            <div>title:{postDetails.title}</div>
            <div>body:{postDetails.body}</div>
        </div>
    );
};

export {DetailsPost};