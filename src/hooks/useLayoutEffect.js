import React, { useEffect, useState, useLayoutEffect, useRef } from 'react';

function App() {
    const [count, setCount] = useState(0);

    useLayoutEffect(() => {
        if (count === 0) {
            const randomNum = 10 + Math.random() * 200
            setCount(10 + Math.random() * 200);
        }
    }, [count]);

    return (
        <div style={{ margin: '20px' }} onClick={() => setCount(0)}>{count}</div>
    );
}

export default App

