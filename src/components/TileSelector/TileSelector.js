import React from 'react';

import useHover from '../../hooks';

import './TileSelector.css';

const TileSelector = (props) => {
    const [ref, hovered] = useHover();
    const dropdown = (
        <div className="tileSelectorContent">
            <div
                className="number"
                onClick={() => props.handleNumTileChange(4)}
            >
                4
            </div>
            <div
                className="number"
                onClick={() => props.handleNumTileChange(16)}
            >
                16
            </div>
            <div
                className="number"
                onClick={() => props.handleNumTileChange(36)}
            >
                36
            </div>
        </div>
    );

    return (
        <div className="tileSelector">
            <div>Number of Tiles</div>
            <div ref={ref} className="tileSelectorDropdown">
                {props.numTiles}
                {hovered && dropdown}
            </div>
        </div>
    );
};

export default TileSelector;
