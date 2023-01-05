import React, { useState } from 'react';
import SignInForm from './Pages/SignInPage'
import SignUpForm from './Pages/SignUpPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import Home from './Pages/Home';
import Protected from './components/ProtectedRoute';
import CreatePost from './Pages/CreatePost';
import Feed from './Pages/Feed';








function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn") ? JSON.parse(localStorage.getItem("isLoggedIn")) : false)



  return (
    <>


      <BrowserRouter>
        <Routes>
          <Route element={<NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} path="/">
            <Route path='/' index element={<Home />} />

            <Route path='/signin' element={<Protected isLoggedIn={!isLoggedIn}><SignInForm setIsLoggedIn={setIsLoggedIn} /></Protected>} />
            <Route path='/signup' element={<Protected isLoggedIn={!isLoggedIn}><SignUpForm setIsLoggedIn={setIsLoggedIn} /></Protected>} />
            <Route path='/createpost' element={<Protected isLoggedIn={isLoggedIn}><CreatePost /></Protected>} />
            <Route path='/feed' element={<Protected isLoggedIn={isLoggedIn}><Feed /></Protected>} />

            <Route path='*' element={<><h1>404 Error: Not found</h1></>} />

          </Route>


        </Routes>
      </BrowserRouter>     
    </>
  );
}



export default App;
