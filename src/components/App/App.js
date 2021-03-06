import React, { Component } from 'react';
import OptionsPanel from '../OptionsPanel';
import Board from '../Board';

import './App.css';

import { createTiles, indexOfSelected } from '../../misc/utils';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            numTiles: 36,
            playing: false,
            previousTileIndex: null,
            tiles: [],
            toBeCleared: null,
        };
    }

    startGame = () => {
        this.setState((state) => ({
            playing: true,
            previousTileIndex: null,
            toBeCleared: null,
            tiles: createTiles(state.numTiles, this.handleTileClicked),
        }));
    };

    handleNumTileChange = (numTiles) =>
        this.setState({
            numTiles,
            playing: false,
            tiles: [],
        });

    handleTileClicked = (id, color) => {
        this.setState((state) => {
            let { tiles, toBeCleared, previousTileIndex } = state;
            const selectedTileIndex = indexOfSelected(tiles, id, color);

            if (toBeCleared !== null) {
                tiles[toBeCleared[0]].selected = tiles[
                    toBeCleared[1]
                ].selected = false;

                toBeCleared = null;
            }

            tiles[selectedTileIndex].selected = true;

            if (previousTileIndex !== null) {
                const previousTile = tiles[previousTileIndex];
                const selectedTile = tiles[selectedTileIndex];

                if (
                    previousTile.id !== selectedTile.id &&
                    previousTile.color === color
                ) {
                    selectedTile.matched = previousTile.matched = true;

                    previousTileIndex = null;
                } else {
                    toBeCleared = [previousTileIndex, selectedTileIndex];
                    previousTileIndex = null;
                }
            } else {
                previousTileIndex = selectedTileIndex;
            }

            return {
                tiles,
                toBeCleared,
                previousTileIndex,
            };
        });
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">Turbo-Matcher</header>
                <OptionsPanel
                    handleNumTileChange={this.handleNumTileChange}
                    startGame={this.startGame}
                    playing={this.state.playing}
                    numTiles={this.state.numTiles}
                />
                <Board
                    numTiles={this.state.numTiles}
                    tiles={this.state.tiles}
                />
            </div>
        );
    }
}

export default App;
