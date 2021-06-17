import React, { useState, useEffect } from 'react';

function Lesson5() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    useEffect(() => {
        document.title = `${count}`;
        console.log(`CLicked ${count} times`);
    }, [name]);

    return (
        <div>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={() => setCount(count + 1)}>{count}</button>
        </div>
    );
}

export default Lesson5;
