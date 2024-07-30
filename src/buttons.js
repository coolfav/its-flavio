import './buttons.css';
import { Stars } from './stars.js';
let desc = "kk";
let which = '';

if (which == 'javamon') {
    desc = 'java';
} else if (which == 'mario') {
   desc = 'mario'; 
} else if (which == 'pokecross') {
    desc = 'pokecross'; 
} else if (which == 'bigbot') {
    desc = 'bigbot'; 
} else if (which == 'this') {
    desc = 'this'; 
} else if (which == 'lulu') {
    desc = 'lulu'; 
}

export function Buttons() {
    return (
        <>
        <Stars clicked={which}/>
        <div className="project-buttons">
            <div><button type='button' className='Javamon' onClick={() => {which = 'javamon'; console.log('click77' + which);}}>Pokemon in Java</button></div>
            <div><button className='MarioLuigi' onClick={() => {which = 'mario'; console.log('click77' + which);}}>Mario and Luigi</button></div>
            <div><button className='Pokecrosscss' onClick={() => {which = 'pokecross'; console.log('click77' + which);}}>PokeCross</button></div>
            <div><button className='TheBigBotcss' onClick={() => {which = 'bigbot'; console.log('click77' + which);}}>TheBigBot</button></div>
            <div><button className='Thissite' onClick={() => {which = 'this'; console.log('click77' + which);}}>This website</button></div>
            <div><button className='Lululemon' onClick={() => {which = 'lulu'; console.log('click77' + which);}}>Lululemon</button></div>       
        </div>
        <div className="description">
            {desc}
        </div>
        </>
    );
}

