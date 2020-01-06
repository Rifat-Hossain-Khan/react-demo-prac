import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DataFetching = () => {
    const [post, setPost] = useState({});
    const [id, setId] = useState(1);
    const [idFromButtonClick, setIdFromButtonClick] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`);
                setPost(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [idFromButtonClick]);

    return (
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)} />
            <button type='button' onClick={() => setIdFromButtonClick(id)}>Fetch Post</button>
            <div>{post.title}</div>
            {/* <ul>
                {posts.map(post => <li key={post.id}>{post.title}</li>)}
            </ul> */}
        </div>
    );
}

export default DataFetching;