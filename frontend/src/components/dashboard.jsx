import { useState } from "react";
import StatsCard from "./statscard";
import CourseCard from "./CourseCard";
import { courseCatalog } from "../data/courses";

function Dashboard() {
  const [gpa, setGpa] = useState(3.8);

  const stats = [
    { title: "Credits Completed", value: "72" },
    { title: "Credits Remaining", value: "48" },
    { title: "Current GPA", value: gpa.toFixed(2) }
  ];

  const [courses, setCourses] = useState([
    {
      code: "IDS 201",
      name: "Introduction to Data Science",
      credits: 3,
      status: "Completed"
    },
    {
      code: "IDS 420",
      name: "Business Model Simulation",
      credits: 3,
      status: "Planned"
    },
    {
      code: "IDS 460",
      name: "Causal Inference",
      credits: 3,
      status: "In Progress"
    }
  ]);
  
  const [selectedCourseCode, setSelectedCourseCode] = useState("");


  function increaseGpa() {
    setGpa(gpa + 0.1);
  }

  function addCourse() {
  const selectedCourse = courseCatalog.find(
    (course) => course.code === selectedCourseCode
  );

  if (!selectedCourse) {
    return;
  }
  
  const courseAlreadyAdded = courses.some(
    (course) => course.code === selectedCourse.code
  );
  
  if (courseAlreadyAdded) {
    return;
  }

  setCourses([...courses, selectedCourse]);
  setSelectedCourseCode("");
}

  return (
    <main>
      <h2>Dashboard</h2>

      <div className="card-container">
        {stats.map((stat, index) => (
          <StatsCard
            key={index}
            title={stat.title}
            value={stat.value}
          />
        ))}
      </div>

      <button onClick={increaseGpa}>
        Increase GPA
      </button>
      
      <h2>Courses</h2>

      <div className="card-container">
        {courses.map((course, index) => (
          <CourseCard
            key={index}
            course={course}
          />
        ))}
      </div>

      <select
        value={selectedCourseCode}
        onChange={(event) => setSelectedCourseCode(event.target.value)}
      >
      <option value="">Select a course</option>

        {courseCatalog.map((course) => (
      <option key={course.code} value={course.code}>
        {course.code} - {course.name}
      </option>
  ))}
      </select>

      <button onClick={addCourse}>
        Add Course
      </button>

    </main>
  );
}

export default Dashboard;