import React, { useState, useEffect } from 'react';

function Lesson6() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logMousePosition = (e) => {
        console.log('mouse event');
        setX(e.clientX);
        setY(e.clientY);
    };

    // componentDidMount
    useEffect(() => {
        console.log('useEffect called');
        window.addEventListener('mousemove', logMousePosition);

        // componentWillUnmount
        return () => {
            console.log('useEffect unmounted');
            window.removeEventListener('mousemove', logMousePosition);
        };
    }, []);

    return (
        <div>
            Hooks X - {x} Y - {y}
        </div>
    );
}

export default Lesson6;
