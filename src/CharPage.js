import React from 'react';
import characters from './Characters.json';

function CharPage(props) {

    function removeSpoiler(event) {
        if(event.target.closest('.spoiler')) {
            event.target.closest('.spoiler').classList.remove('spoiler');
        }
    }

    let char;
    for(let i = 0; i < characters.length; i++) {
        if(characters[i].name == props.charName) {
            char = characters[i];
            break;
        }
    }

    return(
        <>
        <div className='overlay' />
        <div className='charPage'>
            <button onClick={props.showCharPage} />
                <div className='charName'>
                    <h1>{char.name}</h1>
                    <h2>{char.nameJP}</h2>
                    <p>CV: {char.cv}</p>
                </div>
                <div className='charText'>
                    <table>
                        <tbody>
                        <tr>
                            <td>Real name</td>
                            <div className='spoiler' onClick={removeSpoiler}>
                                <td>{char.realName}</td>
                                <td>{char.realNameJP}</td>
                            </div>
                        </tr>
                        <tr>
                            <td>Guild</td>
                            <div>
                                <td>{char.guild}</td>
                                <td>{char.guildJP}</td>
                            </div>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className='charCard'>
                    <div className='iconDiv'>
                        <img src={char.icon}/>
                        <img src={char.line} className='line' />
                    </div>
                    <div className='skillsPanel'>
                        <div className='skill'>
                            <img src={char.skillUB}/>
                            <p>{char.skillUBdis}</p>
                        </div>
                        <div className='skill'>
                            <img src={char.skill1}/>
                            <p>{char.skill1dis}</p>
                        </div>
                        <div className='skill'>
                            <img src={char.skill2}/>
                            <p>{char.skill2dis}</p>
                        </div>
                        <div className='skill'>
                            <img src={char.skill3}/>
                            <p>{char.skill3dis}</p>
                        </div>
                    </div>
                </div>
    
                <img id='fullBody' src={char.fullBody}/>
        </div>
        </>
        )
    }

export default CharPage;