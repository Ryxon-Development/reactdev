import useFetch from "../hooks/useFetch";

export default function Reddit() {

    const { data: posts, isLoading, error } = useFetch("https://www.reddit.com/r/reactjs.json");

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