import NavBar from '../components/navbar';
import Card from '../components/card';
import Arduino from './Arduino';

import dataJson from '../data/info_microcontrolers.json'

import { useState } from 'react';

import ArduinoImg from '../img/arduino.jpg'
import Esp32Img from '../img/esp32.jpg'

export default function App() {
    const [value, setValue] = useState("")


    function sendChildMessage(message) {
        console.log(message);
        setValue(message)
    }

    if (value === 1) {
        return (
            <>
                <NavBar sendChildMessage={sendChildMessage} />
                <Arduino></Arduino>
            </>
        )
    }

    if (value === 2) {
        return(
            <>
                <NavBar sendChildMessage={sendChildMessage} />
            </>
        )
    }

    return (
        <>
            <NavBar sendChildMessage={sendChildMessage} />
            <div className='container containerMain'>
                <Card title_one={dataJson.arduino.title} text_one={dataJson.arduino.data} img_one={ArduinoImg} languaje_one={dataJson.arduino.programming_languaje} title_two={dataJson.esp32.title} text_two={dataJson.esp32.data} img_two={Esp32Img} />
                <h1>¿Cómo se programan?</h1>
                <p>{dataJson.arduino.programming_languaje}</p>
                <p>{dataJson.esp32.programming_languaje}</p>
            </div>
        </>
    )
}
