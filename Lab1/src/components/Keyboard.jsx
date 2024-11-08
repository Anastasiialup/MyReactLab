import React from 'react';
import PianoKey from './PianoKey';

// Білий ряд клавіш
const whiteKeys = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
// Чорні клавіші розташовані в таких позиціях (C#, D#, F#, G#, A#)
const blackKeys = [null,'C#', 'D#', null, 'F#', 'G#', 'A#', null];

function Keyboard() {
    return (
        <div className="ReactPiano__Keyboard">
            {whiteKeys.map((note, index) => (
                <div key={index} className="ReactPiano__KeyWrapper">
                    {/* Біла клавіша */}
                    <PianoKey note={note} type="natural" />
                    {/* Якщо є чорна клавіша, рендеримо її між білими */}
                    {blackKeys[index] && (
                        <PianoKey note={blackKeys[index]} type="accidental" />
                    )}
                </div>
            ))}
        </div>
    );
}

export default Keyboard;
