import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import './Awareness.css'
import Abc from './Abc';
import { useEffect, useState,  } from 'react';
import Footer from '../Footer/Footer';
import Color from './Color';

function Awareness() {

    // get data from ABC.json
    const  [alphabets, setAlphabets] = useState([]);
    const [filterAlphabets, setFilterAlphabets] = useState([]);
    //get data from Color.json
    const [colors, setColors] = useState([]);
    const [filterColors, setFilterColors] = useState([]);

    // State to control the visibility of the Abc component
    const [showAbc, setShowAbc] = useState(false);
    // State to control the visibility of the Color component
    const [showColor, setShowColor] = useState(false);
    

    useEffect(() => {
        const fetchData = async () => {
          try {
            
    
            //get data from ABC.json
            const alphabetJson = await fetch('ABC.json');
            const alphabetData = await alphabetJson.json();
            setAlphabets(alphabetData)
            setFilterAlphabets(alphabetData)
            // console.log(100,filterAlphabets)
            
            //get data from Color.json
            const colorJson = await fetch('Color.json');
            const colorData = await colorJson.json();
            setColors(colorData)
            setFilterColors(colorData)
    
    
            
    
    
    
          } catch (error) {
            console.log('error reading json')
          }
        };
        fetchData();
      }, []);

    const handleAbcClick = () => {
        setShowAbc(true); 
        setShowColor(false);
    };
    const handleColorClick = () => {
        setShowColor(true);
        setShowAbc(false);
    };

    return (
        <div className='aware'>
            
            <div className='w-full max-w-7xl mx-auto mt-6' style={{backgroundColor: "#E0FFFF	", borderRadius: "30px", paddingBottom: "10px", backgroundColor: "#E0FFFF", background : "linear-gradient(to right, #E0FFFF, #FFD6E0)", marginTop : "10%", paddingTop : "2%", paddingBottom: "2%", paddingLeft: "2%",paddingRight: "2%" }}>
                <h1 className='atitle'>Awareness For Kid</h1>
                <div className='AWBD' >
                    <ButtonGroup aria-label="Basic example" >
                        <Button variant="secondary" onClick={handleAbcClick}>ABC</Button>
                        <Button variant="secondary" >Animals</Button>
                        <Button variant="secondary" onClick={handleColorClick}>Color</Button>
                    </ButtonGroup>
                </div>
                {showAbc && (
                <div>
                    <Abc alphabets={filterAlphabets} />
                </div>
                )}
                {showColor && (
                <div>
                    <Color Colors={filterColors} />
                </div>
                )}
                

                {!showAbc && !showColor && (
                <div>
                    <h1>Let's sing this song!</h1>
                    <video width="100%" height="auto" controls>
                        <source src="AwarenessVideo/PhonicsSong.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                )}

                
            </div>

            <Footer/>

            
        </div>
    );
}

export default Awareness;