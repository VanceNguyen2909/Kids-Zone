import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Physical.css'
import { Form } from "react-bootstrap";
import { useState } from 'react';
import { useSelector } from 'react-redux';

const CardsPerPage = 4;

const Physical = ({ courses }) => {
    const [current_page, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const search_key = useSelector((state) => state.search.search_key)


    const CardsPerPage = 6; // Số lượng Card mỗi trang, điều chỉnh tùy ý
    const indexOfLastCard = current_page * CardsPerPage;
    const indexOfFirstCard = indexOfLastCard - CardsPerPage;

    // Thực hiện việc lọc trên toàn bộ danh sách trước khi phân trang
    const filteredCourses = courses.filter(
        (course) =>
            course.name.toLowerCase().includes(search_key.toLowerCase()) ||
            course.category.toLowerCase().includes(search_key.toLowerCase())
    );

    // Lấy ra các khóa học hiện tại sau khi đã lọc và phân trang
    const currentCourses = filteredCourses.slice(indexOfFirstCard, indexOfLastCard);

    const pageCount = Math.ceil(filteredCourses.length / CardsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
        // Reset về trang đầu tiên sau khi lọc
        setCurrentPage(1);
    };



    return (
        <div style={{ paddingTop: '200px' }}>

            



            {/* Search bar container */}
            {/* <div className="flex justify-center mb-8 ">
                <input
                    type="text"
                    placeholder="Search courses..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    
                    className="shadow appearance-none border rounded py-2 px-3 text-grey-darker w-[400px] rounded-pill"
                />
                
            </div> */}

            <h1>Physical Course For Kids</h1>

            <div className="grid grid-flow-row grid-cols-3 gap-2 w-full max-w-7xl mx-auto mt-6" style={{backgroundColor : "whitesmoke", borderRadius: "30px"}} >
                
                
                {currentCourses.map((course) => (
                    
                    <div key={course.id} className='col-span-1 flex justify-around' style={{marginTop : "90px", marginBottom: "30px"}}>
                        <Card style={{ width: '23rem', height: '550px', display: 'flex', flexDirection: 'column', borderRadius : "50px" }} >
                            <Card.Img variant="top" src={course.image} className="w-full" />
                            <Card.Body className="d-flex flex-column">
                                <Card.Title>{course.name}</Card.Title>
                                <Card.Text className="flex-grow">
                                    {course.description}
                                </Card.Text>
                                <Button variant="primary" className="mt-auto w-50 self-center">Read</Button>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>



            {/* Pagination Links */}
            <div className="flex justify-center mt-8" style={{marginBottom: "30px"}}>
                {[...Array(pageCount).keys()].map(number => (
                    <button
                        key={number}
                        onClick={() => paginate(number + 1)}
                        className={`mx-2 px-3 py-1 border rounded ${current_page === number + 1 ? 'bg-blue-500 text-white' : 'bg-white'}`}
                        
                    >
                        {number + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Physical;