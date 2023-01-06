import React, { useState, useEffect } from 'react';
import { database } from './firebase/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import SignInForm from './Pages/SignInPage'
import SignUpForm from './Pages/SignUpPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import Home from './Pages/Home';
import Protected from './components/ProtectedRoute';
import CreatePost from './Pages/CreatePost';
import Feed from './Pages/Feed';
import Post from './Pages/Post';








function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn") ? JSON.parse(localStorage.getItem("isLoggedIn")) : false)
  const [posts, setPosts] = useState([])



  useEffect(() => {
    const getPosts = async () => {
      await getDocs(collection(database, "Articles"))
        .then((res) => {

          setPosts(res.docs)

          localStorage.setItem("posts", JSON.stringify(res.docs))

          console.log(res.docs);






        }).catch((err) => { console.log(err); })
    }
    getPosts()



  }, [])





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

            <Route path='/feed/:id' element={<Protected isLoggedIn={isLoggedIn}><Post posts={posts} /></Protected>} />

          </Route>


        </Routes>
      </BrowserRouter>
    </>
  );
}



export default App;
