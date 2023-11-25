import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import '../../public/homecard.json'


function Home({ courses }) {
    

    console.log('Courses:', courses);
    courses.forEach(course => console.log('Image path for course', course.id, ':', course.image));
    return (
        <div>
            
            <h1>Help children understand</h1>
            <div className="flex justify-center items-start flex-wrap">
                {courses.map((course) => ( 
                
                    <Card key={course.id} style={{ width: '18rem' }}>
                        {console.log(14,course.image)}
                        <Card.Img variant="top" src={course.image} />
                        <Card.Body>
                            <Card.Title>{course.name}</Card.Title>
                            <Card.Text>
                                {course.description}
                            </Card.Text>
                            <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default Home;
