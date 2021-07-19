import React from "react";

const LIST_ALL_POSTS = {
    state = {
        posts: getAllPosts
    }
};

function getAllPosts(){
    React.useEffect(() => {
        fetch("http://localhost:33000/posts")
            .then(data => data.json())
            .then(res => {
            this.setState(() => { const returned_posts = res.results;
                return {returned_posts}
            })
        })
    })
}