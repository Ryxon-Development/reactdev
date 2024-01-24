import React, {useState, useEffect} from "react";

export default function Reddit() {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://www.reddit.com/r/reactjs.json")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoading(false);
                    setPosts(result.data.children);
                    console.log(result.data.children);
                }
            )
            .catch(error => {
                console.log(error);
                setIsLoading(false);
                setError(error);
            });

    }, []);

    return (
        <div>
            <p>Reddit API call</p>
            {isLoading && <p>Loading...</p>}
            {!isLoading && (
            <ul>
                {posts.map(post => (
                    <li className="my-2.5" key={post.data.id}>
                        <a className="text-blue-500 underline" href={post.data.url} target="_blank" rel="noreferrer">{post.data.title}</a>
                    </li>
                ))}
            </ul>
            )}
            {error && <p>{error.message}</p>}
        </div>
    )
}