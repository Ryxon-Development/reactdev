import React, {useEffect, useState} from "react";
import Reddit from "../Reddit";
import Joke from "../Joke";

export default function About() {
    const [redditVisible, setRedditVisible] = useState(false);
    const [jokeVisible, setJokeVisible] = useState(false);

    useEffect(() => {
        console.log("Effect in About component executed");
    }, []);

    const toggleRedditVisible = () => {
        setRedditVisible(prevState => !prevState);
    };

    const toggleJokeVisible = () => {
        setJokeVisible(prevState => !prevState);
    };

    return (
        <div className="w-3/4 m-auto text-center mt-10">
            <p>This is the ABOUT page, were making API calls here...</p>

            <div className="flex">
                <div className="w-1/2 mt-6 border border-black border-solid mr-2 p-5">
                    <div className="">
                        <button className={`mybutton`} onClick={toggleRedditVisible}>Reddit Data</button>
                        <div className="mt-4 border-t-2 border-dashed border-red-400 py-4">
                            {redditVisible && <Reddit />}
                        </div>
                    </div>
                </div>
                <div className="w-1/2 mt-6 border border-black border-solid ml-2 p-5">
                    <div className="">
                        <button className={`mybutton`} onClick={toggleJokeVisible}>Get Joke</button>
                        <div className="mt-4 border-t-2 border-dashed border-red-400 py-4 min-h-16">
                            {jokeVisible && <Joke />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}