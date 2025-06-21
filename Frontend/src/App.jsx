import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import Users from './Users/Pages/Users'
import NewPlaces from './Places/Pages/NewPlaces'
import MainNavigation from './Shared/Components/Navigation/MainNavigation'
import UserPlaces from './Places/Pages/UserPlaces'

function App() {
  
  return (
    <Router>
      {/* <header> <h3>Hello, Welcome </h3></header> */}
      <MainNavigation />
      <main>
      {/* <Route path='/' Component={} /> */}
      <Routes>
        <Route path="/" exact={true} element={<Users />} />
        <Route path="/:userId/places" exact element={<UserPlaces />}  />  
        <Route path="/place/new" exact={true} element={<NewPlaces />} />
        {/* Catch-all route to redirect unknown paths */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      </main>
    </Router>
  )
}

export default App
/**
 
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
 */