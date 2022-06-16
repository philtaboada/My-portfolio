import './App.css'
import AboutMe from './components/AboutMe'
import Main from './components/Main'
import MyHabilities from './components/MyHabilities'
import Navbar from './components/Navbar'


function App() {


  return (
    <div className='App'>
      <Navbar />
      <Main />
      <AboutMe />
      <MyHabilities />
    </div>
  )
}

export default App
