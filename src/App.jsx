import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './components/Home.jsx'
import Contact from './components/Contact.jsx'
import Layout from './components/Layout.jsx'
import About from './components/About.jsx'
import PageNotFound from './components/PageNotFound.jsx'
import RecipeProvider from './Contexts/RecipeContext.jsx'
import RecipeDetails from './components/RecipeDetails.jsx'
import Favourites from './components/Favourites.jsx'
import Recipes from './components/Recipes.jsx'
import Privacy from './components/Privacy.jsx'

function App() {

  return (
    <>
    <RecipeProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Layout/>} >
            <Route path='' element={<Home />} />
            <Route path='contact' element={<Contact />} />
            <Route path='about' element={<About />} />
            <Route path='favourites' element={<Favourites />} />
            <Route path='recipes' element={<Recipes />} />
            <Route path='recipes/:slug' element={<RecipeDetails />} />
            <Route path='privacy' element={<Privacy />} />
            <Route path='*' element={<PageNotFound />} />
          </Route>
        </Routes>
      </Router>
    </RecipeProvider>
    </>
  )
}

export default App
