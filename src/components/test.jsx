import React from 'react';
import NavBar from './navbar';
import { useState } from 'react';

const MiComponente = () => {

    const [value, setValue] = useState("")

    function sendChildMessage(message) {
        console.log(message);
        setValue(message)
    }

    return (
        <div>
            <h1>Mi Componente</h1>
        </div>
    );
};

export default MiComponente;