import "./Color.css"

function Color({Colors}){
    const playSound = (soundUrl) => {
        const audio = new Audio(soundUrl);
        audio.play();
    };
    
    return(
        <div className="cl">
            <h1>Color Learning</h1>
            <h2 style={{paddingRight: "5%", paddingLeft: "5%"}}>"With 7 basic colors ,  it's possible to create thousands, even millions, of different shades."</h2>
            <div className="colr">
                {Colors.map((Color) => (
                    <div key={Color.id} className="ite" onClick={() => playSound(Color.sound)}   > 
                        <img src={Color.image} alt="Color" />
                    </div>
                ))}
            </div>

        </div>
    );
}
export default Color