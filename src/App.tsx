import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App(props: { name: string }) {
  const [count, setCount] = useState(0);
  const students=[
    {id:1,name:"John",age:20},
    {id:2,name:"Jane",age:25},
    {id:3,name:"Bob",age:30},
  ]
  // useEffect(()=>{
  //   sum();
  //   console.log("useEffect called");
  // },[count]);
  useEffect(()=>{
    students.map((student)=>{
      console.log("Student Name:",student.name);
    });
  });
  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started {props.name}</h1>
          <p>
            Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App;
export const studentCard=(students: any[])=>{
  return (
    <>
      {students.map((student)=>{
        return (
          <div key={student.id}>
            <h1>{student.name}</h1>
            <p>{student.age}</p>
          </div>
        )
      })
    }
    </>
  )
}
export const Header = (props: { headerName: any; subText: any; type: any }) => {
  console.log("Header-props",props);
  const {headerName,subText,type}=props;
  return (
    <>
    <header>
      <h1>Welcome {headerName} {subText} {type}</h1>
    </header>
    <Footer footerName={headerName}/>
    <Greet />
    <RegistrationForm />
    <UserList />
    </>
  )
}
export const Footer = (props: { footerName: any }) => {
  console.log("Footer-props",props);
  const {footerName}=props;
  return (
    <>
    <footer>
      <h1>Footer {footerName}</h1>
    </footer>
    <TogglePages />
    </>
  )
}
export const Greet=()=>{
  const [greet,SetGreet]=useState("Hello");
  return (
    <>
    <h1>{greet}</h1>
    <input
      value={greet}
      onChange={(e)=>SetGreet(e.target.value)}
    />
    </>
  )
}
export const TogglePages=()=>{
  const [page,setPage]=useState(false);
  const isStudent=false;
  return(
    <>
    {page? <h1>Home Page</h1> : <h1>About Page</h1>}
    <button onClick={()=>{
      setPage(!page);
    }}>{page?"logout":"login"}</button>
    {(page ||isStudent) && (page ||isStudent) && (page ||isStudent) && (page ||isStudent) &&<h2>Welcome User</h2>}
    </>
  )
}
export const UserList=()=>{
  const users=[
    {id:1,name:"John",age:20},
    {id:2,name:"Jane",age:25},
    {id:3,name:"Bob",age:30},
  ]
  return(
    <>
    <h1>User List</h1>
    <ul>
      {users.map((user)=>(
        <li key={user.id}>{user.name} - {user.age}</li>
      ))}
    </ul>
    </>
  )
}
export const RegistrationForm=()=>{
  const submit=(e: { preventDefault: () => void })=>{
    e.preventDefault();
    console.log("Form Submitted");
  }
  return(
    <form onSubmit={submit}>
      <input type="text" placeholder='Enter Name'/>
      <input type="email" placeholder='Enter Email'/>
      <input type="password" placeholder='Enter Password'/>
      <button type='submit'>Submit</button>
    </form>
  )
}