import React, { useState } from "react";
import { useParams } from 'react-router-dom'
import './AboutPost.css'

function AboutPost(data){
    const [post,changePost]=useState(data);
    const {id}=useParams();

    if(!post){
        return <h1>Loading</h1>
    }
    return <div key={post.data[parseInt(id)-1].id} className="post">
        <h1>{post.data[id-1].title}</h1>
        <p>{post.data[id-1].body}</p>
    </div> 
}

export default AboutPost;