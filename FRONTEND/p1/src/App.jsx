import React from 'react'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import CreatePost from './assets/Pages/CreatePost'
import Feed from './assets/Feed'

const App = () => {
  return (
    // <div>App</div>h

   <Router>
      <Routes>
        <Route path='/createPost' element={<CreatePost/>}></Route>
        <Route path='/feed' element={<Feed/>}></Route>
      </Routes>
    </Router>
  )
}

export default App