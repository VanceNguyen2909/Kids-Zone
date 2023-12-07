import React from "react";
import { Container, Row, Col } from "reactstrap";
import CountUp from "react-countup";
import "./about.css";

const AboutUs = () => {
  return (
    <div>
    
    
    <div className="abbody">
      <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__img">
              <img src={"AboutUsImage/project13.jpg"} alt="" className="w-100" style={{marginTop: "30px"}} />
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__content">
              <h2>About Us</h2>
              <p>
              NURTURE FUTURE GENERATION</p>
              <p>Dear parents,</p>
<p>KIDSZONE was founded in 2023, by a team of educators who are passionate and have a vision for preschool education, with the principle of creating future citizens, and providing a healthy educational environment - child-centered. be the center. We have been accompanying our beloved students in this extremely important early stage of their development. They will grow up and mature in an educational environment of international standards.
At KIDSZONE, children are always respected to develop important 21st century skills such as social communication skills, self-service skills and common scientific knowledge.</p>
              
              <div className="about__counter">
                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={25} duration={2} suffix="K" />
                    </span>

                    <p className="counter__title">Children who are studying</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={12} duration={2} suffix="M" />
                    </span>

                    <p className="counter__title">Children Around World</p>
                  </div>
                </div>

                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={95} duration={2} suffix="M" />
                    </span>

                    <p className="counter__title">Experience the activity</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={5} duration={2} suffix="K" />
                    </span>

                    <p className="counter__title">Categories </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        
      </Container>
    </section>
    </div>
    </div>
  );
};

export default AboutUs;