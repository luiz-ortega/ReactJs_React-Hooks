import React, { createContext } from 'react';
import ComponentC from './ComponentC';

export const UserContext = createContext();
export const ChannelContext = createContext();

function Lesson9() {
    return (
        <>
            <UserContext.Provider value={'This is the users name'}>
                <ChannelContext.Provider value={'This is the channels name'}>
                    <ComponentC />
                </ChannelContext.Provider>
            </UserContext.Provider>
        </>
    );
}

export default Lesson9;
