import { useState } from "react";
import data from "../data.json";
import "./Buildings.css";

function Buildings() {
    const [buildings, setBuildings] = useState(data);

    return (
        <div className="buildings-container">
            {buildings.map((building, index) => (
                <div key={index} className="building-card">
                    <img
                        className="building-image"
                        src={building.building_picture || building.building_file}
                        alt={building.name}
                    />
                    <h2 className="building-name">{building.name}</h2>
                    <p className="building-info">{building.rooms_available} rooms available</p>
                </div>
            ))}
        </div>
    );
}

export default Buildings;