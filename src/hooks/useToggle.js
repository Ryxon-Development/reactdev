import { useState } from 'react';
function useToggle(initialValue = true) {
    const [visible, setVisible] = useState(initialValue);
    const toggle = () => setVisible(!visible);
    return [visible, toggle];
}

export default useToggle;