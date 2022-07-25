import React from 'react';
import './styles/DetailView.css';
import noImage from '../assets/interrogation.png';

const DetailView = ({ pokemon, pokemonCharacteristic }) => {
    let { id, name, sprite, type } = pokemon;
    let { description } = pokemonCharacteristic;

    if(id){
        id = id.toString().padStart(3, '0');
    }
    else{
        id = '000';
    }

    if(!name){
        name = '???';
    }

    if(!type){
        type = '???';
    }

    if(!description){
        description = 'No description available';
    }

    if(!sprite){
        sprite = noImage;
    }

    return (
        <section className="detail-view">
            <div className='data-wrappe-id'>
                <h3 className='data-name'>{id.toString().padStart(3, '0')}</h3>
            </div>
             <div className='data-wrapper'>
                <h3 className='data-name'>{name}</h3>
            </div>
            <img src={sprite} className='sprite-image' alt="sprite"/>
            <div className='data-wrapper-description'>
                <p>
                    <span className='data-name'>Description: </span>
                    <span className="data-char">{description}</span>
                </p>
                <p>
                    <span className='data-name'>Type: </span>
                    <span className="data-char">{type}</span>
                </p>
            </div>
        </section>
    );
}

export default DetailView;