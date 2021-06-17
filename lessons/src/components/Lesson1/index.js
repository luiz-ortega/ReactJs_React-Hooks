import React, { useState } from 'react';

function Lesson1() {
    const [count, setCounter] = useState(0);
    return (
        <>
            <button onClick={() => setCounter(count + 1)}>Count {count}</button>
        </>
    );
}

export default Lesson1;
