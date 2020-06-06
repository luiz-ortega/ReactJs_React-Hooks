import React, { useState } from 'react';

function Lesson3() {
    const [name, setName] = useState({ firstName: '', lastName: '' });

    return (
        <>
            <input
                type="text"
                value={name.firstName}
                onChange={(e) =>
                    setName({ ...name, firstName: e.target.value })
                }
            />
            <input
                type="text"
                value={name.lastName}
                onChange={(e) => setName({ ...name, lastName: e.target.value })}
            />
            <h2>FirstName: {name.firstName}</h2>
            <h2>LastName: {name.lastName}</h2>
        </>
    );
}

export default Lesson3;
