import React, { useState } from 'react';
import '../styles/styles.css';

function PianoKey({ note, type }) {
    const [isActive, setIsActive] = useState(false);

    const handleKeyDown = () => {
        setIsActive(true);
    };

    const handleKeyUp = () => {
        setIsActive(false);
    };

    return (
        <div
            className={`ReactPiano__Key ReactPiano__Key--${type} ${isActive ? 'ReactPiano__Key--active' : ''}`}
            onMouseDown={handleKeyDown}
            onMouseUp={handleKeyUp}
            onMouseLeave={handleKeyUp}
        >
            <div className={`ReactPiano__NoteLabel ReactPiano__NoteLabel--${type}`}>
                {note}
            </div>
        </div>
    );
}

export default PianoKey;
