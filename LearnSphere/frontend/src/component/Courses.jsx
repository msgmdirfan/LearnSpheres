import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Courses() {
  const [course_list, setCourse_list] = useState([]);
  const isAdmin = localStorage.getItem("isAdmin") === "true"; // Check admin status

  const fetchcourse = async () => {
    try {
      const courses = await axios.get(`${API_BASE_URL}/courses`);
      if (courses) {
        setCourse_list(courses.data);
      }
    } catch (err) {
      console.log("Fetch courses error:", err);
    }
  };

  const handleDelete = async (id) => {
    if (!isAdmin) {
      alert("Only admins can delete courses");
      return;
    }
    const token = localStorage.getItem("token");
    if (!token) {
      alert("No token found, please log in again");
      return;
    }

    try {
      const response = await axios.delete(`${API_BASE_URL}/courses/${id}`, {
        headers: {
          Authorization: token, // Send token without "Bearer" prefix as per backend
          "is-admin": localStorage.getItem("isAdmin"), // Send admin status
        },
      });
      console.log("Delete response:", response.data); // Debug response
      setCourse_list(course_list.filter((course) => course.id !== id)); // Update UI
      alert("Course deleted successfully");
    } catch (err) {
      console.error("Delete error:", err.response?.data || err.message); // Log detailed error
      alert("Error deleting course: " + (err.response?.data?.error || err.message));
    }
  };

  useEffect(() => {
    fetchcourse();
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="text-center mt-4">AVAILABLE COURSES</h1>
        <div className="row justify-content-center">
          {course_list.map((item) => (
            <div
              className="col-12 col-md-4 mt-4 d-flex justify-content-center"
              key={item.id}
            >
              <Card
                className="h-100 rounded-4 course-card"
                style={{ maxWidth: "250px", placeItems: "center" }}
              >
                <div className="text-center">
                  <Card.Img
                    variant="top"
                    src={item.url}
                    style={{ height: "150px", width: "150px", margin: "0 auto" }}
                  />
                </div>
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                  <Link to={`/eachcourse/${item.id}`}>
                    <Button variant="primary">View Course</Button>
                  </Link>
                  {isAdmin && (
                    <Button
                      variant="danger"
                      className="ms-3"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </Button>
                  )}
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}