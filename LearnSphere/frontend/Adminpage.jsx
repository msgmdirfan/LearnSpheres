import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2"; 
import API_BASE_URL from "../config";

export default function MyForm() {
    const [formData, setFormData] = useState({
        id: "",
        name: "",
        description: "",
        url: "",
        link: "",
    });

    const [formData2, setFormData2] = useState({
        id: "",
        url: "",
        title: "",
        content: "",
        foot: "",
        list: "",
    });

    const [course, setCourse] = useState({
        id: "",
        summary: "",
        url: "",
        totalDuration: "",
        originalCost: "",
        discountCost: "",
        instructor: "",
        topics: [
            {
                title: "",
                videoUrl: "",
                quiz: [{ question: "", options: ["", "", "", ""], correctAnswer: "" }],
                referenceLink: { title: "", url: "" },
            },
        ],
        additionalTopics: [
            {
                title: "",
                videoUrl: "",
                quiz: [{ question: "", options: ["", "", "", ""], correctAnswer: "" }],
                referenceLink: { title: "", url: "" },
            },
        ],
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${API_BASE_URL}/addcourses`, { formData });
            if (res.data.success) {
                Swal.fire({
                    icon: "success",
                    title: "Success!",
                    text: "Course Card added successfully",
                    confirmButtonText: "OK",
                });
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Failed to add course",
                    confirmButtonText: "Try Again",
                });
            }
        } catch (err) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "An error occurred while adding the course",
                confirmButtonText: "OK",
            });
            console.log(err);
        }
    };

    const handleChange2 = (e) => {
        setFormData2({ ...formData2, [e.target.name]: e.target.value });
    };

    const handleSubmit2 = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${API_BASE_URL}/enrolls`, { formData2 });
            console.log("Second Form Submitted:", formData2);
            if (res.data.success) {
                Swal.fire({
                    icon: "success",
                    title: "Success!",
                    text: "Enroll added successfully",
                    confirmButtonText: "OK",
                });
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Failed to add form 2",
                    confirmButtonText: "Try Again",
                });
            }
        } catch (err) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "An error occurred while adding form 2",
                confirmButtonText: "OK",
            });
            console.log(err);
        }
    };

    const handleCourseChange = (e) => {
        setCourse({ ...course, [e.target.name]: e.target.value });
    };

    const handleTopicChange = (index, field, value, section = "topics") => {
        const updatedTopics = [...course[section]];
        updatedTopics[index][field] = value;
        setCourse({ ...course, [section]: updatedTopics });
    };

    const handleAdditionalTopicChange = (index, field, value) => {
        handleTopicChange(index, field, value, "additionalTopics");
    };

    const handleQuizChange = (topicIndex, quizIndex, field, value, section = "topics") => {
        const updatedTopics = [...course[section]];
        updatedTopics[topicIndex].quiz[quizIndex][field] = value;
        setCourse({ ...course, [section]: updatedTopics });
    };

    const handleOptionChange = (topicIndex, quizIndex, optionIndex, value, section = "topics") => {
        const updatedTopics = [...course[section]];
        updatedTopics[topicIndex].quiz[quizIndex].options[optionIndex] = value;
        setCourse({ ...course, [section]: updatedTopics });
    };

    const handleReferenceChange = (index, field, value, section = "topics") => {
        const updatedTopics = [...course[section]];
        updatedTopics[index].referenceLink[field] = value;
        setCourse({ ...course, [section]: updatedTopics });
    };

    const addTopic = (section = "topics") => {
        const newTopic = {
            title: "",
            videoUrl: "",
            quiz: [{ question: "", options: ["", "", "", ""], correctAnswer: "" }],
            referenceLink: { title: "", url: "" },
        };
        setCourse({
            ...course,
            [section]: [...course[section], newTopic],
        });
    };

    const addQuiz = (topicIndex, section = "topics") => {
        const updatedTopics = [...course[section]];
        updatedTopics[topicIndex].quiz.push({
            question: "",
            options: ["", "", "", ""],
            correctAnswer: "",
        });
        setCourse({ ...course, [section]: updatedTopics });
    };

    const handleCourseSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${API_BASE_URL}/addlecture`, course);
            console.log("Course Form Submitted:", course);
            if (res.data.success) {
                Swal.fire({
                    icon: "success",
                    title: "Success!",
                    text: "Lecture added successfully",
                    confirmButtonText: "OK",
                });
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Failed to add lecture",
                    confirmButtonText: "Try Again",
                });
            }
        } catch (err) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "An error occurred while adding the lecture",
                confirmButtonText: "OK",
            });
            console.log(err);
        }
    };

    return (
        <div className="container my-5">
            <h1 className="text-center mb-5">My Forms</h1>

            {/* First Form */}
            <div className="row justify-content-center mb-5">
                <div className="col-12 col-md-6">
                    <h2 className="mb-4">Course Form</h2>
                    <form onSubmit={handleSubmit} className="bg-light p-4 rounded shadow">
                        <div className="mb-3">
                            <input
                                type="text"
                                name="id"
                                placeholder="Enter ID"
                                className="form-control"
                                value={formData.id}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter Name"
                                className="form-control"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <textarea
                                name="description"
                                placeholder="Enter Description"
                                className="form-control"
                                value={formData.description}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="url"
                                name="url"
                                placeholder="Enter URL"
                                className="form-control"
                                value={formData.url}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        
                        <button className="btn btn-primary w-100" type="submit">
                            Submit
                        </button>
                    </form>
                </div>
            </div>

            {/* Second Form */}
            <div className="row justify-content-center mb-5">
                <div className="col-12 col-md-6">
                    <h2 className="mb-4">Enroll Form</h2>
                    <form onSubmit={handleSubmit2} className="bg-light p-4 rounded shadow">
                        <div className="mb-3">
                            <input
                                type="text"
                                name="id"
                                placeholder="Enter ID"
                                className="form-control"
                                value={formData2.id}
                                onChange={handleChange2}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="text"
                                name="url"
                                placeholder="Enter URL"
                                className="form-control"
                                value={formData2.url}
                                onChange={handleChange2}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="text"
                                name="title"
                                placeholder="Enter Title"
                                className="form-control"
                                value={formData2.title}
                                onChange={handleChange2}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <textarea
                                name="content"
                                placeholder="Enter Content"
                                className="form-control"
                                value={formData2.content}
                                onChange={handleChange2}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="text"
                                name="foot"
                                placeholder="Enter Foot"
                                className="form-control"
                                value={formData2.foot}
                                onChange={handleChange2}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="text"
                                name="list"
                                placeholder="Enter List"
                                className="form-control"
                                value={formData2.list}
                                onChange={handleChange2}
                                required
                            />
                        </div>
                        <button className="btn btn-primary w-100" type="submit">
                            Submit Second Form
                        </button>
                    </form>
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-12 col-md-8">
                    <h2 className="mb-4">Lecture Form</h2>
                    <form onSubmit={handleCourseSubmit} className="bg-light p-4 rounded shadow">
                        <div className="mb-3">
                            <input
                                type="text"
                                name="id"
                                placeholder="Enter Course ID"
                                className="form-control"
                                value={course.id}
                                onChange={handleCourseChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="text"
                                name="summary"
                                placeholder="Enter Summary"
                                className="form-control"
                                value={course.summary}
                                onChange={handleCourseChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="text"
                                name="url"
                                placeholder="Enter Icon URL"
                                className="form-control"
                                value={course.url}
                                onChange={handleCourseChange}
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="text"
                                name="totalDuration"
                                placeholder="Enter Total Duration (e.g., 9hrs:15min)"
                                className="form-control"
                                value={course.totalDuration}
                                onChange={handleCourseChange}
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="text"
                                name="originalCost"
                                placeholder="Enter Original Cost (e.g., $99)"
                                className="form-control"
                                value={course.originalCost}
                                onChange={handleCourseChange}
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="text"
                                name="discountCost"
                                placeholder="Enter Discount Cost (e.g., $79)"
                                className="form-control"
                                value={course.discountCost}
                                onChange={handleCourseChange}
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="text"
                                name="instructor"
                                placeholder="Enter Instructor Name"
                                className="form-control"
                                value={course.instructor}
                                onChange={handleCourseChange}
                            />
                        </div>

                        <h3 className="mt-4">Topics</h3>
                        {course.topics.map((topic, topicIndex) => (
                            <div key={`topic-${topicIndex}`} className="border p-3 mb-3 rounded">
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        placeholder="Topic Title"
                                        className="form-control"
                                        value={topic.title}
                                        onChange={(e) => handleTopicChange(topicIndex, "title", e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        placeholder="Video URL"
                                        className="form-control"
                                        value={topic.videoUrl}
                                        onChange={(e) => handleTopicChange(topicIndex, "videoUrl", e.target.value)}
                                    />
                                </div>

                                <h4>Quiz Questions</h4>
                                {topic.quiz.map((quiz, quizIndex) => (
                                    <div key={`quiz-${topicIndex}-${quizIndex}`} className="ms-3 mb-3">
                                        <input
                                            type="text"
                                            placeholder="Question"
                                            className="form-control mb-2"
                                            value={quiz.question}
                                            onChange={(e) => handleQuizChange(topicIndex, quizIndex, "question", e.target.value)}
                                            required
                                        />
                                        {quiz.options.map((option, optionIndex) => (
                                            <input
                                                key={`option-${topicIndex}-${quizIndex}-${optionIndex}`}
                                                type="text"
                                                placeholder={`Option ${optionIndex + 1}`}
                                                className="form-control mb-2"
                                                value={option}
                                                onChange={(e) => handleOptionChange(topicIndex, quizIndex, optionIndex, e.target.value)}
                                                required
                                            />
                                        ))}
                                        <input
                                            type="text"
                                            placeholder="Correct Answer"
                                            className="form-control mb-2"
                                            value={quiz.correctAnswer}
                                            onChange={(e) => handleQuizChange(topicIndex, quizIndex, "correctAnswer", e.target.value)}
                                            required
                                        />
                                    </div>
                                ))}
                                <button
                                    type="button"
                                    className="btn btn-outline-secondary mb-3"
                                    onClick={() => addQuiz(topicIndex)}
                                >
                                    Add Quiz Question
                                </button>

                                <h4>Reference Link</h4>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        placeholder="Reference Title"
                                        className="form-control"
                                        value={topic.referenceLink.title}
                                        onChange={(e) => handleReferenceChange(topicIndex, "title", e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        placeholder="Reference URL"
                                        className="form-control"
                                        value={topic.referenceLink.url}
                                        onChange={(e) => handleReferenceChange(topicIndex, "url", e.target.value)}
                                    />
                                </div>
                            </div>
                        ))}
                        <button
                            type="button"
                            className="btn btn-outline-primary mb-3"
                            onClick={() => addTopic("topics")}
                        >
                            Add Topic
                        </button>

                        <h3 className="mt-4">Additional Topics</h3>
                        {course.additionalTopics.map((topic, topicIndex) => (
                            <div key={`additional-topic-${topicIndex}`} className="border p-3 mb-3 rounded">
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        placeholder="Additional Topic Title"
                                        className="form-control"
                                        value={topic.title}
                                        onChange={(e) => handleAdditionalTopicChange(topicIndex, "title", e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        placeholder="Video URL"
                                        className="form-control"
                                        value={topic.videoUrl}
                                        onChange={(e) => handleAdditionalTopicChange(topicIndex, "videoUrl", e.target.value)}
                                    />
                                </div>

                                <h4>Quiz Questions</h4>
                                {topic.quiz.map((quiz, quizIndex) => (
                                    <div key={`additional-quiz-${topicIndex}-${quizIndex}`} className="ms-3 mb-3">
                                        <input
                                            type="text"
                                            placeholder="Question"
                                            className="form-control mb-2"
                                            value={quiz.question}
                                            onChange={(e) => handleQuizChange(topicIndex, quizIndex, "question", e.target.value, "additionalTopics")}
                                            required
                                        />
                                        {quiz.options.map((option, optionIndex) => (
                                            <input
                                                key={`additional-option-${topicIndex}-${quizIndex}-${optionIndex}`}
                                                type="text"
                                                placeholder={`Option ${optionIndex + 1}`}
                                                className="form-control mb-2"
                                                value={option}
                                                onChange={(e) => handleOptionChange(topicIndex, quizIndex, optionIndex, e.target.value, "additionalTopics")}
                                                required
                                            />
                                        ))}
                                        <input
                                            type="text"
                                            placeholder="Correct Answer"
                                            className="form-control mb-2"
                                            value={quiz.correctAnswer}
                                            onChange={(e) => handleQuizChange(topicIndex, quizIndex, "correctAnswer", e.target.value, "additionalTopics")}
                                            required
                                        />
                                    </div>
                                ))}
                                <button
                                    type="button"
                                    className="btn btn-outline-secondary mb-3"
                                    onClick={() => addQuiz(topicIndex, "additionalTopics")}
                                >
                                    Add Quiz Question
                                </button>

                                <h4>Reference Link</h4>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        placeholder="Reference Title"
                                        className="form-control"
                                        value={topic.referenceLink.title}
                                        onChange={(e) => handleReferenceChange(topicIndex, "title", e.target.value, "additionalTopics")}
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        placeholder="Reference URL"
                                        className="form-control"
                                        value={topic.referenceLink.url}
                                        onChange={(e) => handleReferenceChange(topicIndex, "url", e.target.value, "additionalTopics")}
                                    />
                                </div>
                            </div>
                        ))}
                        <button
                            type="button"
                            className="btn btn-outline-primary mb-3"
                            onClick={() => addTopic("additionalTopics")}
                        >
                            Add Additional Topic
                        </button>

                        <button className="btn btn-success w-100" type="submit">
                            Submit Course
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}