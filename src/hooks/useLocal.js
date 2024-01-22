import { useState, useEffect } from 'react';
function useLocal(key, initialValue) {
    const [value, setValue] = useState(() => {
        const item = localStorage.getItem(key);

        if(item) {
            console.log('local item exits!!');
        }

        return item ? item : initialValue;
    })

    useEffect(() => {
        localStorage.setItem(key, value);
    }, [key, value]);

    // Return a cleanup function
    useEffect(() => {
        return () => {
            // Cleanup function, if needed
        };
    }, []);

    return [value, setValue];
}

export default useLocal;