import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DataFetchingOne = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [post, setPost] = useState({});

    useEffect(() => {
        (async function () {
            try {
                const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${1}`);
                setLoading(false);
                setPost(data);
                setError('');

            } catch (error) {
                setLoading(false);
                setPost({});
                setError('Somthing went wrong!');
            }
        }());
    }, []);

    return (
        <div>
            {loading ? 'Loading' : post.title}
            {error ? error : null}
        </div>
    );
}

export default DataFetchingOne;