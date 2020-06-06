import React from 'react';
import Lesson1 from './components/Lesson1';
import Lesson2 from './components/Lesson2';
import Lesson3 from './components/Lesson3';
import Lesson4 from './components/Lesson4';
import Lesson5 from './components/Lesson5';
import Lesson6 from './components/Lesson6';
import Lesson7 from './components/Lesson7';
import Lesson8 from './components/Lesson8';
import MouseContainer from './components/MouseContainer';
import Forms from './components/Forms';

function App() {
    const container = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        height: 'auto',
    };

    return (
        <div style={container}>
            {/* <Forms /> */}
            {/* Lesson1:
            <Lesson1 /> */}
            {/* Lesson2:
            <Lesson2 /> */}
            {/* Lesson3:
            <Lesson3 /> */}
            {/* Lesson4:
            <Lesson4 /> */}
            {/* Lesson5:
            <Lesson5 /> */}
            {/* Lesson6:
            <Lesson6 />
            <MouseContainer /> */}
            {/* Lesson7:
            <Lesson7 /> */}
            Lesson8:
            <Lesson8 />
        </div>
    );
}

export default App;
