import {Route, Routes,BrowserRouter} from 'react-router-dom'

import Header from './components/Header'
import About from './components/About'
import Home from './components/Home'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
import BlogItemDetails from './components/BlogItemDetails'
import './App.css'

const App = () => (
  <BrowserRouter>
  <div className="app-container">
    <div className="responsive-container">
      <Header />
      <div className="app-body">
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/about" Component={About} />
          <Route exact path="/contact" Component={Contact} />
          <Route exact path="/blogs/:id" Component={BlogItemDetails}/>

          <Route path="*" Component={NotFound} />
        </Routes>
      </div>
    </div>
  </div>
  </BrowserRouter>
)

export default App
