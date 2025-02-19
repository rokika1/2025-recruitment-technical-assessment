import { useState } from "react";
import freeRoomsLogo from "../assets/freeRoomsLogo.png";
import freeRoomsLogoClosed from "../assets/freeroomsDoorClosed.png";

function Header() {
    const [doorOpen, setDoorOpen] = useState(true);

    const headerStyle = {
        justifyContent: 'space-between',
        display: 'flex',
        alignItems: 'center',
        padding: '10px 20px',
        borderBottom: '0.5px solid grey'
    };

    const logoStyle = {
        display: 'flex',
        alignItems: 'center',
    }

    const logoImgStyle = {
        width: '80px',
        cursor: 'pointer',
    };

    const logoNameStyle = {
        fontFamily: 'Roboto',
        fontSize: '50px',
        color: "#ea6d00",
        margin: 0,
    };

    const iconsContainerStyle = {
        display: 'flex',
        gap: '15px',
    };

    const iconStlye = {
        fontSize: "40px",
        color: "#ea6d00",
        padding: '10px',
        border: '1px solid #ea6d00',
        borderRadius: '5px',
        cursor: 'pointer',
    }

    return (
        <div style={headerStyle}>
            <div style={logoStyle}>
                <img
                    style={logoImgStyle}
                    src={doorOpen ? freeRoomsLogo : freeRoomsLogoClosed}
                    alt="Freerooms_Logo"
                    onClick={() => setDoorOpen(!doorOpen)}
                />
                <h1 style={logoNameStyle}>Freerooms</h1>
            </div>
            <div style={iconsContainerStyle}>
                <span className="material-icons" style={iconStlye}>search</span>
                <span className="material-icons" style={iconStlye}>grid_view</span>
                <span className="material-icons" style={iconStlye}>map</span>
                <span className="material-icons" style={iconStlye}>dark_mode</span>
            </div>
        </div>
    );
}

export default Header;