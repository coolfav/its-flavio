import './buttons.css';
let desc = "kk";


export function Buttons() {
    return (
        <>
        <div className="project-buttons">
            <div><button type='button' className='Javamon' onClick={console.log("clicked")}>Pokemon in Java</button></div>
            <div><button className='MarioLuigi' onClick={console.log("clicked2")}>Mario and Luigi</button></div>
            <div><button className='Pokecrosscss' onClick={console.log("clicked3")}>PokeCross</button></div>
            <div><button className='TheBigBotcss' onClick={console.log("clicked4")}>TheBigBot</button></div>
            <div><button className='Thissite' onClick={console.log("clicked5")}>This website</button></div>
            <div><button className='Lululemon' onClick={console.log("clicked6")}>Lululemon</button></div>       
        </div>
        <div className="description">
            {desc}
        </div>
        </>
    );
}

