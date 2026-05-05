import React from 'react';

//Option 02:
/**
 * const getPosts = async() => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    return res.json();
   }
* /

//Option 03:
/**
 * const getPosts = async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        return res.json();
    }
    catch (error){
        throw new Error("Something went wrong! Please try again later.")
    }
 }
*/


//Option 03:
const getPosts = async () => {
   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    
    if (!res.ok) {
        throw new Error("Something went wrong! Please try again laterrrrr.")
    }
     
    return res.json();
}

const PostPage = async () => {
    // option 01: 
    // const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    // const posts = await res.json();

    const posts = await getPosts()

    return (
        <div className='text-center mt-20'>
            All post will be here...
            <p>Total Posts : {posts.length}</p>
        </div>
    );
};

export default PostPage;