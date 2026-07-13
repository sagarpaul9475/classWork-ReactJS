import { useSearchParams } from "react-router-dom";
import {useState} from "react";

const Home = () => {
  const [searchParams] = useSearchParams();

  const name = searchParams.get("name");
  const age = searchParams.get("age");
  const [email,setemail]=useState("");
  const [students,setstudents]=useState<{ email: string }[]>([]);
  console.log(students);

  return (
    <div>
      <h1>Home Page</h1>

      <h2>Name: {name}</h2>
      <h2>Age: {age}</h2>
      <input onChange={(e)=>setemail(e.target.value)} />
      <button onClick={()=>{
        setstudents([...students, {email}])
      }}>ADD</button>
      <ul>
        {students.map((student, index) => (
          <li key={index}>{student.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;