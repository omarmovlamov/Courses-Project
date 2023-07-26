import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Courses from "./Courses";
import Loading from "./Loading";

function App() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCourses = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:3000/courses");
      setCourses(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const deleteCard = (id) => {
    const deletecard = courses.filter((course) => course.id !== id);
    setCourses(deletecard);
  };

  const refreshCourses = () => {
    fetchCourses();
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loading />
      ) : (
        <Courses
          courses={courses}
          deleteCard={deleteCard}
          refreshCourses={refreshCourses}
        />
      )}
    </div>
  );
}

export default App;
