import { useState, useEffect } from 'react';

export default function useFetch(url, deps) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log('useFetch useEffect');
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoading(false);
                    setData(result);
                    console.log(result);
                }
            )
            .catch(error => {
                setIsLoading(false);
                console.log(error);
                setError(error);
            });

    }, [url, deps]);

    return { data, isLoading, error };
}
