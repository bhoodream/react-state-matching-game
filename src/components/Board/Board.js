import React from 'react';

import Tile from '../Tile';

import './Board.css';

const Board = (props) => {
    const gridConfig = {
        gridTemplateColumns: `repeat(${Math.sqrt(props.numTiles)}, 1fr)`,
        gridTemplateRows: `repeat(${Math.sqrt(props.numTiles)}, 1fr)`,
    };

    return (
        <div className="Board" style={gridConfig}>
            {props.tiles.map((tile, index) => (
                <Tile key={index} {...tile} />
            ))}
        </div>
    );
};

export default Board;
