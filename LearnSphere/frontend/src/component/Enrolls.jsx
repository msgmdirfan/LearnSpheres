import React, { useEffect, useState } from 'react';
import { useParams, Link } from "react-router-dom";
import Rating from './Rating';
import axios from 'axios';
import VideoPlayer from './VideoPlayer';
import API_BASE_URL from "../../config";
export default function Enrolls() {
    const { id } = useParams();
    const [lecture, setLecture] = useState([]);
    useEffect(() => {
        const fetchLecture = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/lectures`);
                setLecture(response.data);
            } catch (err) {
                console.error("Error fetching lectures:", err);
            }
        };

        fetchLecture();
    }, []);

    const item = lecture.find((item) => item.id === id);

    if (!item) {
        return <h2 className="text-center text-danger">Lecture not found</h2>;
    }

    return (
        <div className="container my-5">
            <div className="row align-items-center shadow-lg p-4 rounded bg-light">
                <div className='col-12 col-md-7'>
                    <h1 className="text-primary fw-bold">{item.summary} Essentials</h1>
                    <h3 className="text-secondary">Master {item.summary} Fundamentals</h3>
                    <p className="text-muted">Learn the foundations of {item.summary} and its core concepts.</p>

                    <div className="d-flex align-items-center mb-2">
                        <h4 className='mt-2'>Rating:</h4>
                        <Rating />
                    </div>

                    <h5 className="d-inline">Instructor: </h5>
                    <h6 className="d-inline text-info"><i>{item.instructor}</i></h6>

                    <div className="mt-4">
                        <details className="mt-3 border rounded p-3 bg-white">
                            <summary className="fw-bold text-primary">📖 Module - I</summary>
                            {item.topics.map((topic, index) => (
                                <div key={index} className="d-flex flex-row justify-content-between border p-2 mb-1 mt-3 bg-light rounded-3">
                                    <p className="m-0">{topic.title}</p>
                                    
                                    <Link to={`/video/${encodeURIComponent(topic.videoUrl)}`} className="btn btn-sm btn-primary">Watch</Link>
                                </div>
                            ))}
                        </details>

                        <details className="mt-3 border rounded p-3 bg-white">
                            <summary className="fw-bold text-success">📚 Module - II</summary>
                            {item.additionalTopics.map((extra, idx) => (
                                <div key={idx} className="d-flex flex-row justify-content-between border p-2 mb-1 mt-3 bg-light rounded-3">
                                    <p className="m-0">{extra.title}</p>
                                    
                                    <Link to={`/video/${encodeURIComponent(extra.videoUrl)}`} className="btn btn-sm btn-success">Watch</Link>
                                </div>
                            ))}
                        </details>
                    </div>

                </div>
                <div className='mb-5 mt-5 col-12 col-md-5 p-3'>
                    <div className="card p-3 shadow-lg" style={{ width: '20rem', borderRadius: "10px" }}>
                        <img src={item.url} className="card-img-top rounded" alt="Course Thumbnail" />
                        <div className="card-body d-flex align-items-center  ">
                            <h5 className="card-title text-success fw-bold">{lecture.discountCost}</h5>
                            <del className="text-danger ms-2" style={{ fontSize: '14px' }}>{lecture.originalCost}</del>
                        </div>

                        <div className="card-body d-flex align-items-center  ">
                            <h5 className="card-title text-success fw-bold">{item.discountCost}</h5>
                            <del className="text-danger ms-2" style={{ fontSize: '14px' }}>{item.originalCost}</del>
                        </div>

                        <div className="text-muted text-center">
                            <div className="d-flex align-items-center justify-content-center gap-2">
                                <img src="https://img.icons8.com/?size=100&id=qdQpy48X3Rjv&format=png&color=FFB000" style={{ height: "16px", width: "16px" }} alt="Rating" />
                                <span>5</span>
                                <span>|</span>

                                <img src="https://img.icons8.com/?size=100&id=423&format=png&color=808080" style={{ height: "16px", width: "16px" }} alt="Duration" />
                                <span>{item.totalDuration}</span>
                                <span>|</span>

                                <img src="https://img.icons8.com/?size=100&id=1j70jY2x25VE&format=png&color=808080" style={{ height: "16px", width: "16px" }} alt="Lessons" />
                                <span>5 lessons</span>
                            </div>
                        </div>


                        {/* <div className='mt-3 text-center'>
                            <button className="btn btn-primary w-100 fw-bold shadow-sm" style={{ borderRadius: "10px" }}>
                                Enroll Now
                            </button>
                        </div> */}


                        <h5 className="mt-3 text-center text-dark fw-bold">What's in the Course</h5>
                        <ul className=" text-muted" style={{ fontSize: "14px" }}>
                            <li> Comprehensive Lessons</li>
                            <li> Hands-on Projects</li>
                            <li> Expert Guidance</li>
                            <li> Lifetime Access</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
