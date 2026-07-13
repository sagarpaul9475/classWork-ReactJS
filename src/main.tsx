import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './home.tsx'
import App, { Header } from "./App";
import {BrowserRouter,Routes,Route} from 'react-router-dom';

const headerContent={
  headerName:"sagar",
  subText:"this is subtext",
  type:"header"
}
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Header {...headerContent}/><App name="sagar"/></>} />
        <Route path="/home" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
