const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected Successfully"))
  .catch((err) => console.error("MongoDB Connection Error:", err));


const quizSchema = new mongoose.Schema({
  id: { type: String, required: true },        // group id as string
  question: { type: String, required: true },
  options: [{ type: String, required: true }],
  correctAnswer: { type: String, required: true },
});

const Quiz = mongoose.models.quizzes || mongoose.model("quizzes", quizSchema);

module.exports = Quiz;


const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const courseschema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  url: { type: String, required: true },
});

const enrollschema = new mongoose.Schema({
  id: { type: String, required: true },
  url: { type: String, required: true },
  content: { type: String, required: true },
  foot: { type: String, required: true },
  list: { type: String, required: true },
});

const lectureSchema = new mongoose.Schema({
  id: { type: String, required: true },
  summary: { type: String, required: true },
  url: { type: String, required: true },
  topics: [
    {
      title: { type: String, required: true },
      explanation: { type: String,required: true},
      videoUrl: { type: String, required: true },
      quiz: [
        {
          question: { type: String, required: true },
          options: [{ type: String, required: true }],
          correctAnswer: { type: String, required: true }
        }
      ],
      referenceLink: {
        title: { type: String, required: true },
        url: { type: String, required: true }
      }
    }
  ],
  additionalTopics: [
    {
      title: { type: String, required: true },
      videoUrl: { type: String, required: true },
      quiz: [
        {
          question: { type: String, required: true },
          options: [{ type: String, required: true }],
          correctAnswer: { type: String, required: true }
        }
      ],
      referenceLink: {
        title: { type: String, required: true },
        url: { type: String, required: true }
      }
    }
  ],
  totalDuration: { type: String, required: true },
  originalCost: { type: String },
  discountCost: { type: String, required: true },
  instructor: { type: String, required: true }
});

const User = mongoose.models.user || mongoose.model("user", userSchema);
const Enroll = mongoose.models.enrolls || mongoose.model("enrolls", enrollschema);
const Course = mongoose.models.course || mongoose.model("course", courseschema);
const Lecture = mongoose.models.lectures || mongoose.model("lectures", lectureSchema);

// Middleware to verify token
const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];
  console.log("Token received:", token); // Debug log
  if (!token) return res.status(403).json({ error: "No token provided" });

  jwt.verify(token, "secretkey", (err, decoded) => {
    if (err) {
      console.log("Token verification error:", err); // Debug log
      return res.status(401).json({ error: "Invalid token" });
    }
    req.userId = decoded.id;
    next();
  });
};

// Middleware to verify admin status
const verifyAdmin = (req, res, next) => {
  const isAdmin = req.headers["is-admin"] === "true";
  console.log("isAdmin check:", isAdmin); // Debug log
  if (!isAdmin) return res.status(403).json({ error: "Admin access required" });
  next();
};

// Routes

app.get("/quizzes/:id", async (req, res) => {
  try {
    const quizQuestions = await Quiz.find({ id: req.params.id });
    res.json(quizQuestions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    console.error("Signup error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, "secretkey", { expiresIn: "1h" });
    const isAdmin = password === "Irfan@2005"; 
    res.json({ 
      token,
      name: user.name,
      isAdmin
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/lectures", async (req, res) => {
  try {
    const lecture = await Lecture.find({});
    res.json(lecture);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/enroll", async (req, res) => {
  try {
    const enroll = await Enroll.find({});
    res.json(enroll);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/courses", async (req, res) => {
  try {
    const courses = await Course.find({});
    res.json(courses);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.delete("/courses/:id", verifyToken, verifyAdmin, async (req, res) => {
  const { id } = req.params;
  console.log("Deleting course with id:", id); // Debug log
  try {
    const courseResult = await Course.deleteOne({ id });
    const enrollResult = await Enroll.deleteOne({ id });
    const lectureResult = await Lecture.deleteOne({ id });

    console.log("Delete results:", { courseResult, enrollResult, lectureResult }); // Debug log

    if (courseResult.deletedCount === 0) {
      return res.status(404).json({ error: "Course not found" });
    }

    res.json({ success: true, message: "Course and related data deleted" });
  } catch (err) {
    console.log("Delete error:", err); // Debug log
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/addcourses", async (req, res) => {
  const { formData } = req.body;
  try {
    const result = await Course.insertMany(formData);
    res.json({ success: true });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/addlecture", async (req, res) => {
  try {
    await Lecture.insertMany(req.body);
    res.json({ success: true });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/enrolls", async (req, res) => {
  const { formData2 } = req.body;
  try {
    const result = await Enroll.insertMany(formData2);
    res.json({ success: true });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});
