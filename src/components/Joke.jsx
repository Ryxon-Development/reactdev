import React, {useState, useEffect} from "react";

export default function Reddit() {
    const [joke, setJoke] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [triggerFetch, setTriggerFetch] = useState(false);

    useEffect(() => {
        fetch("https://official-joke-api.appspot.com/jokes/random")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoading(false);
                    console.log(result);
                    setJoke(result);
                }
            )
            .catch(error => {
                console.log(error);
                setIsLoading(false);
                setError(error);
            });
    }, [triggerFetch]);

    function newJoke() {
        setIsLoading(true);
        setTriggerFetch(!triggerFetch);
    }

    return (
        <div>
            {isLoading && <p>Loading...</p>}
            {error && <p>{error.message}</p>}
            {!isLoading && (
                <div>
                    <p className="mt-4 bg-green-400">{joke.setup}</p>
                    <p className="font-bold mt-4 underline">{joke.punchline}</p>
                    <button className="mybutton mt-4" onClick={newJoke}>Get another joke</button>
                </div>
            )}
        </div>
    )
}