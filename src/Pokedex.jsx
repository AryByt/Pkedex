import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';
class Pokedex extends Component {
  static defaultProps = {
    pokemon: [
      { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
      { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
      { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
      { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 },
      { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
      { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
      { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
      { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
    ],
  };
  render() {
    return (
      <div className="Pokedex">
        <h1>Pokedex!</h1>
        <p>Total Experience: {this.props.exp}</p>
        <p>{this.props.isWinner ? 'You Won' : 'You Lost'}</p>
        <div className="Pokedex-cards">
          {this.props.pokemon.map(p => (
            <Pokecard id={p.id} name={p.name} exp={p.base_experience} type={p.type} />
          ))}
        </div>
      </div>
    );
  }
}
export default Pokedex;
