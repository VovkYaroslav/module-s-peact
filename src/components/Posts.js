import React from "react";

const Posts = ({posts, selPosts}) => {
    return (
        <div>

            {posts.map((item)=>{
                const {id: postId, title}=item;

                return(
                    <div key={`${postId} item`}>

                        {postId}----{title}
                        <button onClick={()=>selPosts(postId)}>Details</button>

                    </div>
                )
            })}

        </div>
    );
};

export {Posts};