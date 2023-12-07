import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Physical.css'
import { Form } from "react-bootstrap";
import { useState } from 'react';
import { useSelector, useDispatch  } from 'react-redux';
import Select from 'react-select';
import { setSearchKey } from '../App/Modules/Search/search.slice';
import { useNavigate } from 'react-router';

const CardsPerPage = 4;

const Physical = ({ courses }) => {
    const [current_page, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const search_key = useSelector((state) => state.search.search_key);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Số lượng Card mỗi trang, điều chỉnh tùy ý
    const CardsPerPage = 6;
    const indexOfLastCard = current_page * CardsPerPage;
    const indexOfFirstCard = indexOfLastCard - CardsPerPage;

    // Lọc danh sách courses khi có categories được chọn hoặc có search term
    const getFilteredCourses = () => {
        return courses.filter((course) => {
            const matchCategory = selectedCategories.length === 0 || selectedCategories.includes(course.category);
            const matchSearch = course.name.toLowerCase().includes(search_key.toLowerCase()) 
            return matchCategory && matchSearch;
        });
    };

    // Lấy ra các khóa học hiện tại sau khi đã lọc và phân trang
    const filteredCourses = getFilteredCourses();
    const currentCourses = filteredCourses.slice(indexOfFirstCard, indexOfLastCard);
    const pageCount = Math.ceil(filteredCourses.length / CardsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    

    const handleSearchChange = (event) => {
        dispatch(setSearchKey({ "search_key": event.target.value}))
        // console.log("search", search_key)
      };

    const handleCategoryChange = (selectedOptions) => {
        setSelectedCategories(selectedOptions.map(option => option.value));
        // Reset về trang đầu tiên sau khi lọc
        setCurrentPage(1);
    };

    // Các tùy chọn cho react-select
    const categoryOptions = [
        { value: 'Nutrition', label: 'Nutritions' },
        { value: 'Exercise', label: 'Exercises' }

    ];

    const handleReadClick = (courseId) => {
        navigate(`/physical/${courseId}`)
    }



    return (
        <div className='PhysicBG' >


            <div className='w-full max-w-7xl mx-auto mt-6 ' style={{ backgroundColor: "#E0FFFF	", borderRadius: "30px", paddingBottom: "10px", backgroundColor: "#E0FFFF", background : "linear-gradient(to right, #E0FFFF, #FFD6E0)" }}>
                <h1 className='title' >Physical Course For Kids</h1>

                <div className="flex justify-center mb-8 ">
                <div className="flex justify-center mb-8 ">
                <input
                    type="text"
                    placeholder="Search courses..."
                    value={search_key}
                    onChange={handleSearchChange}
                    
                    className="shadow appearance-none border rounded py-2 px-3 text-grey-darker w-[400px] rounded-pill"
                />
                
            </div>

                </div>
                <div className="flex justify-center mt-8    "  >
                    <Select
                        isMulti
                        options={categoryOptions}
                        className="basic-multi-select"
                        classNamePrefix="select"
                        onChange={handleCategoryChange}
                        placeholder="Select categories..."
                        
                        
                    />
                </div>


                <div className="grid grid-flow-row grid-cols-3 gap-2 w-full max-w-7xl mx-auto mt-6"  >


                    {currentCourses.map((course) => (

                        <div key={course.id} className='col-span-1 flex justify-around' style={{ marginTop: "90px", marginBottom: "30px" }}>
                            <Card className='BGCard' style={{ width: '23rem', height: '550px', display: 'flex', flexDirection: 'column', borderRadius: "50px" }} >
                                <Card.Img 
                                    variant="top" 
                                    src={course.image} 
                                    className="w-full " 
                                    style={{ borderTopRightRadius: "30px", borderTopLeftRadius: "30px", height: "40%" }} 
                                />
                                <Card.Body className="d-flex flex-column" >
                                    <Card.Title className="cardfont" style={{color: "black"}}>{course.name}</Card.Title>
                                    <Card.Text className="flex-grow">
                                        {course.description}
                                    </Card.Text>
                                    <Button variant="primary" className="mt-auto w-50 self-center " onClick={() => handleReadClick(course.id)}>Read</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center " style={{ marginBottom: "30px" }}>
                    {[...Array(pageCount).keys()].map(number => (
                        <button
                            key={number}
                            onClick={() => paginate(number + 1)}
                            className={`mx-2 px-3 py-1 border rounded ${current_page === number + 1 ? 'bg-blue-500 text-white' : 'bg-white'}`}
                            style={{ marginBottom: "20px" }}

                        >
                            {number + 1}
                        </button>
                    ))}
                </div>

            </div>



            {/* Pagination Links */}

        </div>
    );
};

export default Physical;