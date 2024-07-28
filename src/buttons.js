import './buttons.css';
let desc = "kk";


export function Buttons() {
    return (
        <>
        <div className="project-buttons">
            <div><button className='Javamon' label='Pokemon in Java' onClick={console.log("clicked")}/></div>
            <div><button className='MarioLuigi' label='Mario and Luigi' onClick={console.log("clicked2")}/></div>
            <div><button className='Pokecrosscss' label='PokeCross' onClick={console.log("clicked3")}/></div>
            <div><button className='TheBigBotcss' label='TheBigBot' onClick={console.log("clicked4")}/></div>
            <div><button className='Thissite' label='This website' onClick={console.log("clicked5")}/></div>
            <div><button className='Lululemon' label='Pokemon in Java' onClick={console.log("clicked6")}/></div>       
        </div>
        <div className="description">
            {desc}
        </div>
        </>
    );
}

