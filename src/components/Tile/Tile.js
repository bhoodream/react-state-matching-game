import React from 'react';

import './Tile.css';

const Tile = (props) => {
    const { svg: Svg, selected, matched, color } = props;
    const isSelected = selected || matched;
    const style = isSelected ? { backgroundColor: color } : null;

    return (
        <div style={style} className="Tile">
            {isSelected ? <Svg /> : null}
        </div>
    );
};

export default Tile;
