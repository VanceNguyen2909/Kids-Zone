import React from "react";
import styled from "styled-components";
import './contact.css'

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;

   
    }
  `;

  return (


    <Wrapper>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.276225356416!2d106.6807076748184!3d10.790143258941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528d34ca09b81%3A0x1ef201bbf2cee6d!2zMzE5IMSQLiBOYW0gS-G7syBLaOG7n2kgTmdoxKlhLCBQaMaw4budbmcgMTQsIFF14bqtbiAzLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1701579726235!5m2!1svi!2s"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>

      <section class="contact-section">
        <div class="contact-bg">
          <h3>Get in Touch with Us</h3>
          <h2>contact us</h2>
          <div class="line">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <p class="text">I have a heart filled with dangerous seeds sprinkled with love that touches her</p>
        </div>


        <div class="contact-body">
          <div class="contact-info">
            <div>
              <span><i class="fas fa-mobile-alt"></i></span>
              <span>Phone No.</span>
              <span class="text">+84 123456789</span>
            </div>
            <div>
              <span><i class="fas fa-envelope-open"></i></span>
              <span>E-mail</span>
              <span class="text">example@gmail.com</span>
            </div>
            <div>
              <span><i class="fas fa-map-marker-alt"></i></span>
              <span>Address</span>
              <span class="text">319A, Nam Ki Khoi Nghia, Quan 3, TPHCM</span>
            </div>
            <div>
              <span><i class="fas fa-clock"></i></span>
              <span>Opening Hours</span>
              <span class="text">Monday - Sunday (9:00 AM to 5:00 PM)</span>
            </div>
          </div>

          <div class="contact-form">
            <form>
              <div>
                <input type="text" class="form-control" placeholder="First Name" />
                <input type="text" class="form-control" placeholder="Last Name" />
              </div>
              <div>
                <input type="email" class="form-control" placeholder="E-mail" />
                <input type="text" class="form-control" placeholder="Phone" />
              </div>
              <textarea rows="5" placeholder="Message" class="form-control"></textarea>
              <input type="submit" class="send-btn" value="send message" />
            </form>

            <div>
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </section>



    </Wrapper>


  );
};

export default Contact;


