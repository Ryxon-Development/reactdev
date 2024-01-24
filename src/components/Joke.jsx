import React from "react";
import { useQuery } from "react-query";

export default function Joke() {
    //using react-query to fetch data from reddit api
    const {
        data: joke,
        isLoading,
        isError,
        error,
        isSuccess,
        refetch

    } = useQuery(
        "joke",
        fetchJoke,
        {
            staleTime: 6000,
            refetchOnWindowFocus: false,
            retry: false,
        },
    );

    function fetchJoke() {
        return fetch("https://official-joke-api.appspot.com/jokes/random")
            .then((res) => {
                return res.json();
            });
    }

    function newJoke() {
        refetch();

        // console.log(joke);
    }

    return (
        <div>
            {isLoading && <p>Loading...</p>}
            {isError && <p>ERROR: {error.message}</p>}
            {joke && joke.type === 'error' && <p>ERROR: {joke.message}</p>}

            {isSuccess && (
                <div>
                    <p className="mt-4 bg-green-400">{joke.setup}</p>
                    <p className="font-bold mt-4 underline">{joke.punchline}</p>
                    <button className="mybutton mt-4" onClick={newJoke}>Get another joke</button>
                </div>
            )}
        </div>
    )
}