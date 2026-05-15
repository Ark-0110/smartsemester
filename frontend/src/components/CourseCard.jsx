function CourseCard({ course }) {

  function getStatusColor() {
    if (course.status === "Completed") {
      return "green";
    }

    if (course.status === "In Progress") {
      return "blue";
    }

    if (course.status === "Planned") {
    return "orange";  
    }

    return "black";
  }

  return (
    <div className="card">
      <h3>{course.code}</h3>
      <p>{course.name}</p>
      <p>Credits: {course.credits}</p>

      <p style={{ color: getStatusColor() }}>
        Status: {course.status}
      </p>
    </div>
  );
}

export default CourseCard;