import React from 'react';
import './Nav.css';

function Nav() {
    return (
        <div className="nav">
            <button className="nav-button">
                <span className="material-icons nav-icon">filter_alt</span>
                <span>Filters</span>
            </button>
            <div className="search-container">
                <span className="material-icons search-icon">search</span>
                <input
                    type="text"
                    placeholder="Search for a building..."
                    className="search-bar"
                    aria-label="Search for a building"
                />
            </div>
            <button className="nav-button">
                <span className="material-icons nav-icon">filter_list</span>
                <span>Sort</span>
            </button>
        </div>
    );
}

export default Nav;