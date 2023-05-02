import React, { useEffect, useState } from "react";
import './Homepage.css'
import { Link } from "react-router-dom";
function Homepage({data}){

    /* when the page number(at the bottom) is clicked, this function triggers and updates the displayPost state
     new array consists of element from index*10 to index*10+10 that is if say user clicks at button 1, then
     index here is 0, and loop starts from 0 to 10, if index=1, then update displayPost to 10->20
    */
     function handlePageChange(index){
        changeDsiplayPost(()=>{
            let newPostArray=[];
            
            for(let i=index*10;i<index*10+10;++i){
                newPostArray.push(posts[i]);
            }

            return newPostArray;
        })
    }

    // holds all the posts from api
    const [posts,updatePosts]=useState(data);

    // array of length 10 which contains buttons , used to render page number at footer
    const buttonList = Array.from({ length: 10 }, (_, index) => (
        <button key={index} onClick={()=>handlePageChange(index)}>{index + 1}</button>
      ));

    // state which stores post that is to be displayed
    const [displayPost,changeDsiplayPost]=useState(null);

    // initially sets displayPost state to post from 0 to 9 
    useEffect(()=>{
        changeDsiplayPost(()=>{
            let newPostArray=[];
            
            for(let i=0;i<0+10;++i){
                newPostArray.push(posts[i]);
            }

            return newPostArray;
        })
    },[])

    if(!posts || !displayPost){
        return <h1>Loading</h1>;
    }

    return <div className="homepage">
        {
            displayPost.map((post)=><div className="homepagePost" key={post.id}>
                <Link to={`/posts/${post.id}`}>
                    <h2>{post.title.length > 30 ?post.title.substring(0,30)+'...':post.title}</h2>
                    <p>{post.body.substring(0,60)}</p>
                </Link>
            </div>)
        }

       
        {<div className="btnList">{buttonList}</div>}
    </div>
}

export default Homepage;