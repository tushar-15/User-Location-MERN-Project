import { useState, useCallback } from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import Users from './Users/Pages/Users'
import NewPlaces from './Places/Pages/NewPlaces'
import MainNavigation from './Shared/Components/Navigation/MainNavigation'
import UserPlaces from './Places/Pages/UserPlaces'
import UpdatePlace from './Places/Pages/UpdatePlace'
import Auth from './Users/Pages/Auth'
import { AuthContext } from './Shared/Context/auth-context'

function App() {
  const [isLoggedIn, setIsLoggedIn] =useState(false);

  const login= useCallback(()=> {
    setIsLoggedIn(true);
  });

  const logout= useCallback(()=> {
    setIsLoggedIn(false);
  })
  let routes;
  if(isLoggedIn){
    routes=(<><Routes>
        <Route path="/" exact={true} element={<Users />} />
        <Route path="/:userId/places" exact element={<UserPlaces />}  />  
        <Route path="/place/:placeId" exact element={<UpdatePlace/>}  />        
        <Route path="/place/new" exact={true} element={<NewPlaces />} />
        {/* Catch-all route to redirect unknown paths */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes></>
    );
  }else{
    routes=(<><Routes>
          <Route path="/" exact={true} element={<Users />} />
          <Route path="/auth" exact={true} element={<Auth />} />
          <Route path="/:userId/places" exact element={<UserPlaces />}  />  
          <Route path="*" element={<Navigate to="/auth" />} />
        </Routes></>);
  }

  return (
    <AuthContext.Provider value={{isLoggedIn: isLoggedIn,login: login, logout:logout}}>
      <Router>
        {/* <header> <h3>Hello, Welcome </h3></header> */}
        <MainNavigation />
        <main>
          {routes}
        </main>
      </Router>
    </AuthContext.Provider>
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