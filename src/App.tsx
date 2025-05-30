import './App.css'
import HomePage from './Components/home'
import Projects from './Components/projects'
import Education from './Components/education'
// import Misc from './Components/misc'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/education" element={<Education />} />
        {/* <Route path="/misc" element={<Misc />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
