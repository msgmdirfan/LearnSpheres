import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      
      <div
        className="bg-primary text-white d-flex flex-column align-items-center justify-content-center"
        style={{ height: "50vh" }}
      >
          <h1 className="text-center">Welcome to our E-learning Platform</h1>
          <p className="text-center"><i>Ignite Your Curiosity, Master Your Future!</i></p>
          <div className="text-center mt-4">
            <Link to="/courses">
              <button className="btn btn-light btn-lg">Get Started</button>
            </Link>
          </div>
      </div>

      
      <div className="bg-light py-5">
        <h1 className="text-center mb-5">Meet Our Expert Educators</h1>
        <div className="container">
          <div className="row">
           
            <div className="col-md-4 mb-4">
              <div className="card course-card h-100">
                <div className="card-body text-center">
                  <h3 className="card-title text-primary">John Smith</h3>
                  <h6 className="card-subtitle mb-3 text-muted">
                    Full-Stack Developer - 10+ Years
                  </h6>
                  <p className="card-text">
                    John is passionate about building scalable web applications 
                    using React, Node.js, and MongoDB. He enjoys mentoring 
                    students to help them become job-ready developers by focusing 
                    on real-world projects.
                  </p>
                </div>
              </div>
            </div>

           
            <div className="col-md-4 mb-4">
              <div className="card course-card h-100">
                <div className="card-body text-center">
                  <h3 className="card-title text-success">Jane Doe</h3>
                  <h6 className="card-subtitle mb-3 text-muted">
                    Data Scientist - 8+ Years
                  </h6>
                  <p className="card-text">
                    Jane specializes in machine learning and data visualization. 
                    She has worked on predictive analytics for top companies 
                    and loves sharing insights on Python, TensorFlow, and Power BI.
                  </p>
                </div>
              </div>
            </div>

           
            <div className="col-md-4 mb-4">
              <div className="card course-card h-100">
                <div className="card-body text-center">
                  <h3 className="card-title text-danger">Michael Brown</h3>
                  <h6 className="card-subtitle mb-3 text-muted">
                    Mobile App Developer - 7+ Years
                  </h6>
                  <p className="card-text">
                    Michael has created award-winning apps using Flutter and 
                    React Native. He teaches app development with a focus on 
                    creating seamless user experiences and leveraging modern APIs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card course-card h-100">
                <div className="card-body text-center">
                  <h3 className="card-title text-warning">Emily Davis</h3>
                  <h6 className="card-subtitle mb-3 text-muted">
                    Cybersecurity Specialist - 9+ Years
                  </h6>
                  <p className="card-text">
                    Emily is dedicated to protecting systems from cyber threats. 
                    She specializes in ethical hacking, network security, and 
                    helping students develop strong foundational skills in cybersecurity.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card course-card h-100">
                <div className="card-body text-center">
                  <h3 className="card-title text-info">Chris Taylor</h3>
                  <h6 className="card-subtitle mb-3 text-muted">
                    DevOps Engineer - 6+ Years
                  </h6>
                  <p className="card-text">
                    Chris teaches automation, CI/CD pipelines, and cloud 
                    infrastructure. He guides students to understand containerization 
                    tools like Docker and orchestration with Kubernetes.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card course-card h-100">
                <div className="card-body text-center">
                  <h3 className="card-title text-secondary">Sophia Lee</h3>
                  <h6 className="card-subtitle mb-3 text-muted">
                    Blockchain Developer - 5+ Years
                  </h6>
                  <p className="card-text">
                    Sophia is an expert in blockchain development. She helps 
                    students understand smart contracts, decentralized apps, and 
                    the intricacies of cryptocurrency platforms like Ethereum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
