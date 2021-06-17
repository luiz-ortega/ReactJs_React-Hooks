import React, { useState } from 'react';
import Lesson6 from '../Lesson6';

function MouseContainer() {
    const [display, setDisplay] = useState(true);
    return (
        <div>
            <button onClick={() => setDisplay(!display)}>Toggle display</button>
            {display && <Lesson6 />}
        </div>
    );
}

export default MouseContainer;
