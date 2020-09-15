import React from 'react';
import characters from './Characters.json';
import CharPage from './CharPage.js';

class CharGrid extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showCharPage: false,
            charName: '',
        }
    }

    showCharPage = (event) => {
        if(this.state.showCharPage) {
            this.setState({
                showCharPage: false,
            });
        } else {
            this.setState({
                showCharPage: true,
                charName: event.target.closest('.charTile').dataset.name,
            });
        }
    }

    render() {
        return(
            <div id='charGrid'>
                {characters.map(char => (
                 <div className='charTile' onClick={this.showCharPage} data-name={char.name} key={char.name}>
                     <img src={char.cardImg} />
                     <div className='charTileText'>
                         <p>{char.name}</p>
                         <p>{char.nameJP}</p>
                     </div>
                 </div>
                 ))}
                 {this.state.showCharPage && <CharPage charName={this.state.charName} showCharPage={this.showCharPage} />}
            </div>
         )
    }
}

export default CharGrid;