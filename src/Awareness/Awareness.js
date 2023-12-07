import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import './Awareness.css'

function Awareness() {
    return (
        <div className='aware'>
            
            <div className='w-full max-w-7xl mx-auto mt-6' style={{backgroundColor: "#E0FFFF	", borderRadius: "30px", paddingBottom: "10px", backgroundColor: "#E0FFFF", background : "linear-gradient(to right, #E0FFFF, #FFD6E0)" }}>
            <h1 className='atitle'>Awareness For Kid</h1>
                <div className='AWBD' >
                    <ButtonGroup aria-label="Basic example" >
                        <Button variant="secondary">ABC</Button>
                        <Button variant="secondary">Animals</Button>
                        <Button variant="secondary">Color</Button>
                    </ButtonGroup>
                </div>
            </div>

            
        </div>
    );
}

export default Awareness;