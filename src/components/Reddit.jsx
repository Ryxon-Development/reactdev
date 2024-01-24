// import useFetch from "../hooks/useFetch";
import { useQuery } from "react-query";

export default function Reddit() {

    //using useFetch custom hook to fetch data from reddit api
    // const { data: posts, isLoading, error } = useFetch("https://www.reddit.com/r/reactjs.json");

    //using react-query to fetch data from reddit api
    const {
        data: posts,
        isLoading,
        // isError,
        error,
        // isSuccess
    } = useQuery("posts", fetchPosts, {
        retry: false,
        staleTime: 6000,
    });

    function fetchPosts() {
        return fetch("https://www.reddit.com/r/reactjs.json")
            .then(res => res.json());
    }

    return (
        <div>
            <p>Reddit API call</p>
            {isLoading && <p>Loading...</p>}

            {error ? (
                <p className="text-red-500 font-bold">ERROR: {error.message}</p>
            ) : (
                !isLoading && posts && posts.data && (
                    <ul>
                        {posts.data.children.map(post => (
                            <li className="my-2.5" key={post.data.id}>
                                <a className="text-blue-500 underline" href={post.data.url} target="_blank" rel="noreferrer">{post.data.title}</a>
                            </li>
                        ))}
                    </ul>
                )
            )}
        </div>
    )
}