import { useState } from "react";
import freeRoomsLogo from "../assets/freeRoomsLogo.png";
import freeRoomsLogoClosed from "../assets/freeroomsDoorClosed.png";
import "./Header.css";

function Header() {
    const [doorOpen, setDoorOpen] = useState(true);

    return (
        <div className="header">
            <div className="logo">
                <img
                    className="logo-img"
                    src={doorOpen ? freeRoomsLogo : freeRoomsLogoClosed}
                    alt="Freerooms_Logo"
                    onClick={() => setDoorOpen(!doorOpen)}
                />
                <h1 className="logo-name">Freerooms</h1>
            </div>
            <div className="icons-container">
                <span className="material-icons icon">search</span>
                <span className="material-icons icon icon-select">grid_view</span>
                <span className="material-icons icon">map</span>
                <span className="material-icons icon">dark_mode</span>
            </div>
        </div>
    );
}

export default Header;