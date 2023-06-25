import '../css/navbar.css'
import logo from '../img/unnamed.png'

function NavBar({ sendChildMessage }){
    function sendStatus(num){
        sendChildMessage(num)
    }

    const firstOption = () => {
        sendStatus(1)
    }

    const secondOption = () => {
        sendStatus(2)
    }


    const home = () => {
        sendStatus(0)
    }

    return(
        <>
            <nav className="navbar navbar-expand-lg backgroundColor">
                <div className="container-fluid">
                    <a className="navbar-brand return-home" onClick={home}>
                        <img src={logo} className='logo'/>
                        MicroHelp
                    </a>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle dropdown-hover" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Microcontroladores
                        </a>
                        <ul className="dropdown-menu options">
                            <li><button className="options-item" onClick={firstOption}>Arduino</button></li>
                            <li><button className="options-item" onClick={secondOption}>ESP32</button></li>
                        </ul>
                    </li>
                </div>
            </nav>
        </>
    )
}

export default NavBar