import "./Abc.css"

function Abc({ alphabets }) {
    console.log(100, alphabets);
    
    
    if (!Array.isArray(alphabets)) {
        console.error('Prop "alphabets" phải là một mảng');
        return <div>Không có dữ liệu</div>;
    }
    
    return (
        <div className="alp">
            {alphabets.map((alphabet) => (
                <div key={alphabet.id}> 
                    <img src={alphabet.image} alt="Alphabet" />
                </div>
            ))}
        </div>
        
    );
}

export default Abc;