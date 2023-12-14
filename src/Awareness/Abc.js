import "./Abc.css"

function Abc({ alphabets }) {
    console.log(100, alphabets);
    const playSound = (soundUrl) => {
        const audio = new Audio(soundUrl);
        audio.play();
    };
    
    
    if (!Array.isArray(alphabets)) {
        return <div>None</div>;
    }
    
    return (
        <div>
            <h1>Alphabet Learning</h1>
            <div className="alp">
                {alphabets.map((alphabet) => (
                    <div key={alphabet.id} className="itm" onClick={() => playSound(alphabet.sound)}   > 
                        <img src={alphabet.image} alt="Alphabet" />
                    </div>
                ))}
            </div>
        </div>
        
    );
}

export default Abc;