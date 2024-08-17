import './buttons.css';
import { Stars } from './stars.js';
import * as React from "react";

const { useState } = React;


let descjava = "pokejav";
let descmario = "mario";
let descpokec = "pokecros";
let descbigbot = "bigbot";
let desclulu = "lulu";
let descthis = "this";

export function Buttons() {
    const [desc, setDesc] = useState("");
    const [which, setWhich] = useState("");
    return (
        <>
        <Stars clicked={which}/>
        <div className="project-buttons">
            <div><button type='button' className='Javamon' onClick={() => {setWhich("javamon"); setDesc(descjava); console.log('click77' + which);}}>Pokemon in Java</button></div>
            <div><button className='MarioLuigi' onClick={() => {setWhich("mario"); setDesc(descmario); console.log('click77' + which);}}>Mario and Luigi</button></div>
            <div><button className='Pokecrosscss' onClick={() => {setWhich("pokecross"); setDesc(descpokec); console.log('click77' + which);}}>PokeCross</button></div>
            <div><button className='TheBigBotcss' onClick={() => {setWhich("bigbot"); setDesc(descbigbot); console.log('click77' + which);}}>TheBigBot</button></div>
            <div><button className='Lululemon' onClick={() => {setWhich("lulu"); setDesc(desclulu); console.log('click77' + which);}}>Lululemon</button></div>       
            <div><button className='Thissite' onClick={() => {setWhich("this"); setDesc(descthis); console.log('click77' + which);}}>This website</button></div>
        </div>
        <div className="description">
            {desc}
        </div>
        </>
    );
}

