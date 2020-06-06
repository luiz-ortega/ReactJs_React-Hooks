import React, { useContext } from 'react';
import { UserContext, ChannelContext } from './index';

function ComponentF() {
    const user = useContext(UserContext);
    const channel = useContext(ChannelContext);

    return (
        <>
            {user} {channel}
        </>
    );
}

export default ComponentF;
