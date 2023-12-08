import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import './Awareness.css'
import Abc from './Abc';
import { useEffect, useState,  } from 'react';
import Footer from '../Footer/Footer';

function Awareness() {

    // get data from ABC.json
    const  [alphabets, setAlphabets] = useState([]);
    const [filterAlphabets, setFilterAlphabets] = useState([]);

     // State to control the visibility of the Abc component
     const [showAbc, setShowAbc] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
          try {
            
    
            //get data from ABC.json
            const alphabetJson = await fetch('ABC.json');
            const alphabetData = await alphabetJson.json();
            setAlphabets(alphabetData)
            setFilterAlphabets(alphabetData)
            // console.log(100,filterAlphabets)
    
    
            
    
    
    
          } catch (error) {
            console.log('error reading json')
          }
        };
        fetchData();
      }, []);

    const handleAbcClick = () => {
        setShowAbc(true); // This will show the Abc component when the ABC button is clicked
    };

    return (
        <div className='aware'>
            
            <div className='w-full max-w-7xl mx-auto mt-6' style={{backgroundColor: "#E0FFFF	", borderRadius: "30px", paddingBottom: "10px", backgroundColor: "#E0FFFF", background : "linear-gradient(to right, #E0FFFF, #FFD6E0)", marginTop : "10%", paddingTop : "2%", paddingBottom: "2%", paddingLeft: "2%",paddingRight: "2%" }}>
            <h1 className='atitle'>Awareness For Kid</h1>
                <div className='AWBD' >
                    <ButtonGroup aria-label="Basic example" >
                        <Button variant="secondary" onClick={handleAbcClick}>ABC</Button>
                        <Button variant="secondary">Animals</Button>
                        <Button variant="secondary">Color</Button>
                    </ButtonGroup>
                </div>
                {showAbc && (
                    <div>
                        <Abc alphabets={filterAlphabets} />
                    </div>
                )}
                
            </div>

            <Footer/>

            
        </div>
    );
}

export default Awareness;