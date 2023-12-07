import { useState, useEffect, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import '../../public/homecard.json'
import Carousel from 'react-bootstrap/Carousel';
import './Home.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from '../Footer/Footer';




function Home({ cards }) {
    const [isHovered, setIsHovered] = useState({
        1: false,
        2: false,
        3: false
    });



    return (




        <div>


            <Carousel data-bs-theme="dark" >
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="HomeImage\4.jpg"
                        alt="First slide"
                        style={{ height: '900px' }}
                    />
                    <Carousel.Caption>
                        {/* <h5>First slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>

                    <img
                        className="d-block w-100"
                        src="HomeImage\5.jpg"
                        alt="Second slide"
                        style={{ height: '900px' }}

                    />
                    <Carousel.Caption>
                        {/* <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>

                    <img
                        className="d-block w-100"
                        src="HomeImage\6.png"
                        alt="Third slide"
                        style={{ height: '900px' }}

                    />
                    <Carousel.Caption>
                        {/* <h5>Third slide label</h5>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p> */}
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <h1 className='MyCustomFont'>Skill Learning</h1>
            <div className="flex justify-center items-start flex-wrap -m-4">
                {cards.map((card) => 
                (
                
                    <div key={card.id} className="p-4" style={{ width: '28rem' }}>

                        <Card style={{ height: '650px', backgroundColor: `${card.background}`, borderRadius: "40px" }}
                            onMouseEnter={() => setIsHovered((prev) => ({
                                ...prev,
                                [card.id]: true
                            }))}
                            onMouseLeave={() => setIsHovered((prev) => ({
                                ...prev,
                                [card.id]: false
                            }))}
                        >

                            <div>
                                <Card.Img
                                    variant="top"
                                    src={card.image}
                                    className={`w-full h-auto transition-transform transform ${isHovered[card.id] ? 'scale-110' : 'scale-100'}`}

                                />
                            </div>
                            <Card.Body className="d-flex flex-column">

                                <Card.Title className='cardnamefont' >{card.name}</Card.Title>

                                <Card.Text className="flex-grow-1" style={{ color: "white" }}>
                                    {card.description}
                                </Card.Text>
                                {/* <div>
                                    <Button variant="primary" className="mt-auto w-50 ">Read More</Button>
                                </div> */}
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>

            <div className=''>

            </div>


            <div className='custombackground'>

                <Container fluid>
                    <Row>
                        <Col>
                            <h1 className='activitiesfont hs1' >Other Activites With</h1>
                            <h2 className='activitiesfont hs2' > Kids Zone </h2>
                            <Row>
                                <Col>
                                    <h3 className='activitiesfont hs3'>Craft Corner</h3>
                                    <h4 className='activitiesfont hs4' > Provide step-by-step instructions for fun and easy crafts that kids can do using common household items. Include printable templates and pictures for visual guidance</h4>
                                    <h3 className='activitiesfont hs3'>Science Experiments</h3>
                                    <h4 className='activitiesfont hs4' > Share simple yet fascinating science experiments that children can conduct at home with parental supervision. Include explanations of the scientific principles behind each experiment</h4>
                                    <h3 className='activitiesfont hs3'>Puzzle Mania</h3>
                                    <h4 className='activitiesfont hs4' > Offer a variety of puzzles such as crosswords, word searches, mazes, Sudoku, and riddles designed for different age groups. Create printable versions or interactive online versions</h4>

                                </Col>
                                <Col>
                                    <h3 className='activitiesfont hs3'>Storytime Adventures</h3>
                                    <h4 className='activitiesfont hs4' >Curate a collection of interactive stories, both classic and original, with colorful illustrations. Incorporate activities like fill-in-the-blank story templates or storytelling prompts for kids to create their narratives</h4>
                                    <h3 className='activitiesfont hs3'>Outdoor Games, Activities</h3>
                                    <h4 className='activitiesfont hs4' >Share ideas for outdoor games and activities that encourage physical exercise and play. Include instructions for games like scavenger hunts, relay races, hopscotch, and more</h4>
                                    <h3 className='activitiesfont hs3'>Music and Dance Corner</h3>
                                    <h4 className='activitiesfont hs4' > Introduce kids to music by providing simple music lessons for instruments like the recorder or ukulele. Also, include dance tutorials for popular kids' dances or create-a-dance challenges</h4>

                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <Card.Img
                                src='/HomeImage/sky4.png'
                            />
                        </Col>
                    </Row>
                </Container>
            </div>


            <div>
                <Container fluid>
                    <Row>
                        <Col>
                            <h1 className='choosef hp1'>Why you should choose us?</h1>
                            <h2 className='choosef hp2'>We offer preschool programs for preschool children from 12 months to 6 years old. Parents can choose a standard monolingual English or bilingual English - Vietnamese program for their children.
                                We believe that the enthusiasm and experience of educational experts will bring children wonderful international preschool program experiences.
                            </h2>
                        </Col>
                        <Col>
                            <img
                                className='kidstudyimage'
                                src='/HomeImage/7.jpg'
                            />
                        </Col>
                    </Row>

                </Container>
            </div>

            {/* <div className="flex items-center justify-center h-screen bg-blue-100" style={{ marginTop: "200px" }} >
                <div className="relative w-64 h-64">
                    <div
                        className="absolute w-full h-full bg-cover bg-center hexagon"
                        style={{
                            clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                        }}
                    ></div>
                    <img
                        src="/HomeImage/leader.jpg"
                        alt="Your Image"
                        className="w-full h-full object-cover hexagon"
                        style={{
                            clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                        }}
                    />
                    <h1 className='staff'> Music Teacher </h1>
                    
                </div>
            </div> */}

            {/* <div className='footer'>

            </div> */}

            

            <Footer/>



        </div>
    );
}

export default Home;