import List from "../components/list";
import CardGroup from "../components/card-group";
import Card from "../components/card";

import "../css/Arduino.css";
import dataJson from "../data/info_microcontrolers.json";

import { HelloWorld, Blink, AnalogRead, PWM, Functions } from "../data/codes";

import ArduinoIDEImg from "../img/arduino_ide.png";
import TinkercadLogo from "../img/tinkercad_logo.png";
import WokwiLogo from "../img/wokwi_logo.png";

import ArduinoImgDiagramLedOne from "../img/led_13.png";
import ArduinoImgDiagramLedTwo from "../img/led_3.png";
import ArduinoImgDiagramPot from "../img/pot_A0.png";

export default function Arduino() {
    //console.log(SyntaxHighlighter.supportedLanguages);

    function downloadArduinoIde() {
        window.open("https://www.arduino.cc/en/software", "_blank");
    }

    return (
        <>
            <div className="container animation_in">
                <h1 className="title-center" data-bs-toggle="collapse">
                    Arduino Basics
                </h1>

                <div className="collapseContainer">
                    <button
                        className="btn-collapse h3"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#arduinoCards"
                        aria-expanded="false"
                        aria-controls="arduinoCards"
                    >
                        &gt; Arduino Placas
                    </button>
                </div>
                {/**NOTE - Lista de placas de arduino*/}
                <ul className="collapse" id="arduinoCards">
                    <p className="center">
                        Existen diferentes placas de desarrollo de arduino, las siguientes
                        solo son algunas de las que existen
                    </p>
                    <List text={dataJson.arduino.placas[0]} />
                    <List text={dataJson.arduino.placas[1]} />
                    <List text={dataJson.arduino.placas[2]} />
                    <List text={dataJson.arduino.placas[3]} />
                    <List text={dataJson.arduino.placas[4]} />
                    <List text={dataJson.arduino.placas[5]} />
                    <List text={dataJson.arduino.placas[6]} />
                    <List text={dataJson.arduino.placas[7]} />
                    <List text={dataJson.arduino.placas[8]} />
                    <List text={dataJson.arduino.placas[9]} />
                    <List text={dataJson.arduino.placas[10]} />
                    <List text={dataJson.arduino.placas[11]} />
                    <List text={dataJson.arduino.placas[12]} />
                    <List text={dataJson.arduino.placas[13]} />
                    <List text={dataJson.arduino.placas[14]} />
                    <List text={dataJson.arduino.placas[15]} />
                    <List text={dataJson.arduino.placas[16]} />
                    <List text={dataJson.arduino.placas[17]} />
                    <List text={dataJson.arduino.placas[18]} />
                    <List text={dataJson.arduino.placas[19]} />
                    <List text={dataJson.arduino.placas[20]} />
                    <List text={dataJson.arduino.placas[21]} />
                    <List text={dataJson.arduino.placas[22]} />
                    <List text={dataJson.arduino.placas[23]} />
                    <List text={dataJson.arduino.placas[24]} />
                    <List text={dataJson.arduino.placas[25]} />
                    <List text={dataJson.arduino.placas[26]} />
                </ul>

                <div className="collapseContainer">
                    <button
                        className="btn-collapse h3"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#arduinoIde"
                        aria-expanded="false"
                        aria-controls="arduinoCards"
                    >
                        &gt; Arduino IDE
                    </button>
                </div>

                <div className="collapse " id="arduinoIde">
                    <p>{dataJson.arduino.IDE[0]}</p>
                    <p>{dataJson.arduino.IDE[1]}</p>
                    <p>
                        {dataJson.arduino.IDE[2]}
                        <button
                            className="btn-collapse btn-link"
                            onClick={downloadArduinoIde}
                        >
                            Descargar
                        </button>
                    </p>
                    <img className="rounded img" src={ArduinoIDEImg} />
                </div>

                <div className="collapseContainer">
                    <button
                        className="btn-collapse h3"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#arduino_vs_code"
                        aria-expanded="false"
                        aria-controls="arduinoCards"
                    >
                        &gt; VS Code Setup
                    </button>
                </div>

                <div className="collapseContainer">
                    <button
                        className="btn-collapse h3"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#arduino_simulator"
                        aria-expanded="false"
                        aria-controls="arduinoCards"
                    >
                        &gt; Simuladores
                    </button>
                </div>
                <div className="collapse" id="arduino_simulator">
                    <Card
                        title_one={dataJson.arduino.simuladores.Tinkercad.title}
                        title_two={dataJson.arduino.simuladores.Wokwi.title}
                        text_one={dataJson.arduino.simuladores.Tinkercad.description}
                        text_two={dataJson.arduino.simuladores.Wokwi.description}
                        img_one={TinkercadLogo}
                        img_two={WokwiLogo}
                        url_one={dataJson.arduino.simuladores.Tinkercad.url}
                        url_two={dataJson.arduino.simuladores.Wokwi.url}
                    />
                </div>

                <hr />

                <h2 className="title-center">Código Básico</h2>

                <div className="collapseContainer">
                    <button
                        className="btn-collapse h3"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#arduino_Hello_World"
                        aria-expanded="false"
                        aria-controls="arduinoCards"
                    >
                        &gt; "Hello World"
                    </button>
                </div>

                <div className="collapse" id="arduino_Hello_World">
                    <CardGroup
                        code={HelloWorld}
                        img={ArduinoImgDiagramLedOne}
                        title_card_one="Código"
                        title_card_two="Diagrama"
                    />
                </div>

                <div className="collapseContainer">
                    <button
                        className="btn-collapse h3"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#arduino_Blink"
                        aria-expanded="false"
                        aria-controls="arduinoCards"
                    >
                        &gt; Blink
                    </button>
                </div>

                <div className="collapse" id="arduino_Blink">
                    <CardGroup
                        code={Blink}
                        img={ArduinoImgDiagramLedOne}
                        title_card_one="Código"
                        title_card_two="Diagrama"
                    />
                </div>

                <div className="collapseContainer">
                    <button
                        className="btn-collapse h3"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#arduino_AnalogRead"
                        aria-expanded="false"
                        aria-controls="arduinoCards"
                    >
                        &gt; AnalogRead
                    </button>
                </div>

                <div className="collapse" id="arduino_AnalogRead">
                    <CardGroup
                        code={AnalogRead}
                        img={ArduinoImgDiagramPot}
                        title_card_one="Código"
                        title_card_two="Diagrama"
                    />
                </div>

                <div className="collapseContainer">
                    <button
                        className="btn-collapse h3"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#arduino_PWM"
                        aria-expanded="false"
                        aria-controls="arduinoCards"
                    >
                        &gt; PWM
                    </button>
                </div>

                <div className="collapse" id="arduino_PWM">
                    <CardGroup
                        code={PWM}
                        img={ArduinoImgDiagramLedTwo}
                        title_card_one="Código"
                        title_card_two="Diagrama"
                    />
                </div>

                <div className="collapseContainer">
                    <button
                        className="btn-collapse h3"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#arduino_Functions"
                        aria-expanded="false"
                        aria-controls="arduinoCards"
                    >
                        &gt; Funciones
                    </button>
                </div>
                <div className="collapse" id="arduino_Functions">
                    <CardGroup
                        code={Functions}
                        img={ArduinoImgDiagramLedTwo}
                        title_card_one="Código"
                        title_card_two="Diagrama"
                    />
                </div>
            </div>
        </>
    );
}
