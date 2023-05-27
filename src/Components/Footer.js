import React from 'react'

const Footer = () => {
    return (
        <>
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-col">
                    <h3 class="heading">RT's FOOD GUIDE</h3>
                    <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Recipies</a></li>
                     <li><a href="#">Account Info</a></li>
                    </ul>
                    </div>

                    <div class="footer-col">
          <h4>USEFUL LINKS</h4>
          <ul>
            <li><a href="#">Services</a></li>

            <li><a href="#">About Us</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Privacy policy</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>CONTACT US</h4>
          <p> <i class="fas fa-map-marker-alt"></i> : Bandstand,
            Near Mannat,
            Bandra(W) </p>
          <p><i class="fas fa-phone"></i> +91 123456789</p>
          <p><i class="fas fa-envelope"></i> : rtsfoodguide@gmail.com</p>
          <div class="social-links">
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-google-plus-g"></i></a>
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
          </div>
        </div>
        <div class="footer-col">
          <h4>OUR NEWSLETTER</h4>
          <p>To subscribe to our Newsletter</p>
          <input type="email" id="footer-email"/><button id="subscribe">Subscribe</button>
        </div>
                </div>
            </div>

            <div class="footer-bottom">
      <p>@ Copyright <span>RT's FOOD GUIDE</span> All Rights Reserved</p>
      <p>Designed with <i class="fas fa-heart fa-xs "> </i> by Us</p>
    </div>

        </footer>
        </>
    )
}

export default Footer
