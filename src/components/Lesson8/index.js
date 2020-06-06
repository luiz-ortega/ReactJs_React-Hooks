import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Lesson8() {
    const [post, setPost] = useState({});
    const [id, setId] = useState(1);
    const [idFromButton, setIdFromButton] = useState('');

    useEffect(() => {
        async function loadPosts() {
            const response = await axios.get(
                `https://jsonplaceholder.typicode.com/posts/${idFromButton}`
            );

            setPost(response.data);
        }
        loadPosts();
    }, [idFromButton]);

    function handleSearch() {
        console.log(id);
        setIdFromButton(id);
    }

    return (
        <>
            <input
                type="text"
                value={id}
                onChange={(e) => setId(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
            {id}
            <div>{post.title}</div>
            {/* <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title} </li>
                ))}
            </ul> */}
        </>
    );
}

export default Lesson8;
