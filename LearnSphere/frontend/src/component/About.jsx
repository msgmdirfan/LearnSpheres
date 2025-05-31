import React from 'react'


export default function About() {
  return (
    <div>

      <div className="row align-items-center bg-primary      ">

        <div className="col-12 col-md-6 mt-5 ms-2 ">
          <img
            src="https://img.freepik.com/free-vector/digital-online-education-concept-blank-space-laptop_255625-422.jpg?t=st=1738985216~exp=1738988816~hmac=3b98360db3cd987bababfb7e5a36ebf36181e6290429bef3f467ea66c6e694f5&w=900"
            alt="Why Us" height="150px" width="150px"
            className="img-fluid rounded w-100 mb-3"
          />
        </div>

        <div className="col-12 col-md-5">
          <h1>Why Us?</h1>
          <p>
            At LearnSphere, we are committed to delivering high-quality education through expert instructors, flexible
            learning options, and a vast course library that caters to diverse interests. Our affordable pricing, certification
            opportunities, and career support ensure that your learning journey leads to tangible outcomes. With engaging tools,
            interactive resources, and a thriving community of learners, we create an innovative and supportive environment that empowers
            you to achieve your goals and unlock your full potential.
          </p>
        </div>
      </div>
      <div className="container-fluid bg-light p-4 rounded">
  <h2 className="text-center mt-4 text-primary"><b>Learners' Voices</b></h2>
  <div className="row justify-content-center mt-4 g-4">
    {/* Card 1 */}
    <div className="col-md-4 d-flex justify-content-center">
      <div className="card course-card shadow-sm p-3 bg-white rounded hover-effect" style={{ width: "18rem" }}>
        <div className="card-body text-center">
          <h5 className="card-title fw-bold text-primary">Amelia</h5>
          <h6 className="card-subtitle mb-3 text-muted">Computer Science Student</h6>
          <p className="card-text">
            This course was excellent! The concepts were explained clearly, and
            the assignments were very helpful in solidifying my understanding.
          </p>
        </div>
      </div>
    </div>

    {/* Card 2 */}
    <div className="col-md-4 d-flex justify-content-center">
      <div className="card course-card shadow-sm p-3 bg-white rounded hover-effect" style={{ width: "18rem" }}>
        <div className="card-body text-center">
          <h5 className="card-title fw-bold text-primary">Michel</h5>
          <h6 className="card-subtitle mb-3 text-muted">Computer Science Student</h6>
          <p className="card-text">
            This course was excellent! The concepts were explained clearly, and
            the assignments were very helpful in solidifying my understanding.
          </p>
        </div>
      </div>
    </div>

    <div className="col-md-4 d-flex justify-content-center">
      <div className="card course-card shadow-sm p-3 bg-white rounded hover-effect" style={{ width: "18rem" }}>
        <div className="card-body text-center">
          <h5 className="card-title fw-bold text-primary">Johnny</h5>
          <h6 className="card-subtitle mb-3 text-muted">Computer Science Student</h6>
          <p className="card-text">
            This course was excellent! The concepts were explained clearly, and
            the assignments were very helpful in solidifying my understanding.
          </p>
        </div>
      </div>
    </div>

    <div className="col-md-4 d-flex justify-content-center">
      <div className="card course-card shadow-sm p-3 bg-white rounded hover-effect" style={{ width: "18rem" }}>
        <div className="card-body text-center">
          <h5 className="card-title fw-bold text-primary">Adrian</h5>
          <h6 className="card-subtitle mb-3 text-muted">Computer Science Student</h6>
          <p className="card-text">
            This course was excellent! The concepts were explained clearly, and
            the assignments were very helpful in solidifying my understanding.
          </p>
        </div>
      </div>
    </div>

    <div className="col-md-4 d-flex justify-content-center">
      <div className="card course-card shadow-sm p-3 bg-white rounded hover-effect" style={{ width: "18rem" }}>
        <div className="card-body text-center">
          <h5 className="card-title fw-bold text-primary">Julian</h5>
          <h6 className="card-subtitle mb-3 text-muted">Computer Science Student</h6>
          <p className="card-text">
            This course was excellent! The concepts were explained clearly, and
            the assignments were very helpful in solidifying my understanding.
          </p>
        </div>
      </div>
    </div>

    <div className="col-md-4 d-flex justify-content-center">
      <div className="card course-card shadow-sm p-3 bg-white rounded hover-effect" style={{ width: "18rem" }}>
        <div className="card-body text-center">
          <h5 className="card-title fw-bold text-primary">Sebastian</h5>
          <h6 className="card-subtitle mb-3 text-muted">Computer Science Student</h6>
          <p className="card-text">
            This course was excellent! The concepts were explained clearly, and
            the assignments were very helpful in solidifying my understanding.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>


  )
}
