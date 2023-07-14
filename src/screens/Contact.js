import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Contact() {
  return (
    <div>
      <Navbar />
      <div className="container my-5" style={{paddingTop: '85px'}}>
        <h2>Contact Us</h2>
        <p>We would love to hear from you! Please feel free to reach out to us if you have any questions, comments, or feedback.</p>

        <div className="row mt-5">
          <div className="col-md-6">
            <h3>Get in Touch</h3>
            <p>We are always available to answer any questions you may have. You can reach us by phone, email, or social media.</p>
            <ul>
              <li><i className="bi bi-telephone"></i> Phone: +92-335-790-3070</li>
              <li><i className="bi bi-telephone"></i> Phone: +92-355-468-8476</li>
              <li><i className="bi bi-envelope"></i> Email: muhammadfaizan9222@gmail.com</li>
            </ul>
            <div className="mt-4">
              <a href="#" className="me-3"><i className="bi bi-facebook"></i></a>
              <a href="#" className="me-3"><i className="bi bi-twitter"></i></a>
            </div>
          </div>
          <div className="col-md-6">
            <h3>Our Location</h3>
            <p>Our restaurant is located in the heart of the city. Come visit us and enjoy some delicious food!</p>
            <ul>
              <li><i className="bi bi-telephone"></i>Shop # 69, Main Boulevard, DHA phase 6, Lahore, Pakistan</li>
            </ul>
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.014936120064!2d-118.39233218478757!3d34.026614680607025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c6b08d2928b5%3A0xb3e6a25a48f3c4af!2sShake%20Shack!5e0!3m2!1sen!2sin!4v1620768808584!5m2!1sen!2sin"
                title="Google Maps"
                className="embed-responsive-item"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
