import Course from "./Course";

function Courses({ courses, deleteCard, refreshCourses }) {
  return (
    <div className="Courses">
      <div>
        {courses.length == 0 ? (
          <h1>
            <span>YOU DELETED</span> ALL COURSES!
          </h1>
        ) : (
          <h1>
            <span>MY</span> COURSES
          </h1>
        )}
      </div>
      {courses.length == 0 ? (
        <button onClick={refreshCourses} id="refresh-button">
          Refresh Courses
        </button>
      ) : (
        <div className="courses-cards">
          {courses.map((course) => {
            return (
              <Course key={course.id} {...course} deleteCard={deleteCard} />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Courses;
