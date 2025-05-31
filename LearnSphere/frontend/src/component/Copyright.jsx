import React from 'react';

export default function Copyright() {
    return (
        <div className="">
            <div className="row align-items-center bg-dark text-white py-5 px-3 mt-3 ">
                
              
                <div className="col-12 col-md-4 ">
                    <h2>Quick Links</h2>
                    <ul className="list-unstyled">
                        <li><a href="/home" className="text-decoration-none ms-3 text-light">Home</a></li>
                        <li><a href="/courses" className="text-decoration-none ms-3 text-light">Courses</a></li>
                        <li><a href="/about" className="text-decoration-none ms-3 text-light">About Us</a></li>
                        <li><a href="/blog" className="text-decoration-none ms-3 text-light">Blog</a></li>
                        <li><a href="/faq" className="text-decoration-none ms-3 text-light">FAQ</a></li>
                    </ul>
                </div>

                
                <div className="col-12 col-md-4 mt-4">
                    <h2>Contact Information</h2>
                    <ul className="list-unstyled">
                        <li>
                            <p className="d-inline">Email:</p>
                            <a href="mailto:support@elearning.com" className="text-decoration-none ms-2 text-light">support@elearning.com</a>
                        </li>
                        <li>
                            <p className="d-inline">Phone:</p>
                            <a href="tel:+1234567890" className="text-decoration-none ms-2 text-light">+123 456 7890</a>
                        </li>
                        <li>
                            <p className="d-inline">Address:</p>
                            <span className="ms-2">123 E-Learning Street, New York, USA</span>
                        </li>
                        <li>
                            <p className="d-inline">Support Hours:</p>
                            <span className="ms-2">Mon-Fri: 9 AM - 6 PM</span>
                        </li>
                    </ul>
                </div>

               
                <div className="col-12 col-md-4 mt-2">
                    <h2>Terms & Policies</h2>
                    <ul className="list-unstyled">
                        <li><a href="#" className="text-decoration-none text-light">Terms of Service</a></li>
                        <li><a href="#" className="text-decoration-none text-light">Privacy Policy</a></li>
                        <li><a href="#" className="text-decoration-none text-light">Refund Policy</a></li>
                        <li><a href="#" className="text-decoration-none text-light">Cookie Policy</a></li>
                    </ul>
                </div>

                
                {/* <div className="col-12 col-md-3 mt-4">
                    <h2>Subscribe to Our Newsletter</h2>
                    <p>Stay updated with the latest courses, offers, and insights.</p>
                    <form>
                        <input 
                            type="email" 
                            className="form-control mb-2" 
                            placeholder="Enter your email"
                            required
                        />
                        <button className="btn btn-primary w-100">Subscribe</button>
                    </form>
                </div> */}

                
                <div className="col-12 col-md-6 mt-3">
                    <h2>Copyright Notice</h2>
                    <p>© 2025 Elearning. All Rights Reserved.</p>
                    <p>
                        All content on this website, including text, graphics, logos, and images, is the exclusive property of 
                        Elearning and is protected by copyright and intellectual property laws.
                    </p>
                    <p>
                        For licensing and permissions, please contact us at 
                        <a href="mailto:support@elearning.com" className="text-decoration-none ms-1 text-light">support@elearning.com</a>.
                    </p>
                </div>

              
                <div className="col-12 col-md-6 mt-5 text-end">
                    <h2>Follow Us</h2>
                    <p>Stay connected through our social media platforms.</p>
                    <a href="#"><img src="https://img.icons8.com/?size=100&id=118497&format=png&color=ffffff" alt="Facebook" className="me-3" style={{ height: "40px", width: "40px" }} /></a>
                    <a href="#"><img src="https://img.icons8.com/?size=100&id=13930&format=png&color=ffffff" alt="LinkedIn" className="me-3" style={{ height: "40px", width: "40px" }} /></a>
                    <a href="#"><img src="https://img.icons8.com/?size=100&id=32323&format=png&color=ffffff" alt="Instagram" className="me-3" style={{ height: "40px", width: "40px" }} /></a>
                    <a href="#"><img src="https://img.icons8.com/?size=100&id=fJp7hepMryiw&format=png&color=000000" alt="Twitter" style={{ height: "40px", width: "40px" }} /></a>
                </div>

            </div>
        </div>
    );
}
