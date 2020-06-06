import React, { useState, useEffect } from 'react';

function Lesson7() {
    const [count, setCount] = useState(0);

    const tick = () => {
        setCount((prevCount) => prevCount + 1);
    };

    useEffect(() => {
        function doSomething() {
            console.log(count);
        }

        doSomething();

        const interval = setInterval(tick, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [count]);

    return <>{count}</>;
}

export default Lesson7;
