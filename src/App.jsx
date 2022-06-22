import './App.css'
import AboutMe from './components/AboutMe'
import ContactUs from './components/ContactUs'
import Main from './components/Main'
import MyHabilities from './components/MyHabilities'
import MyPortfolio from './components/MyPortfolio'
import Navbar from './components/Navbar'
import FooterPortfolio from './FooterPortfolio'


function App() {


  return (
    <div className='App'>
      <Navbar />
      <Main />
      <AboutMe />
      <MyHabilities />
      <MyPortfolio />
      <ContactUs />
      <FooterPortfolio />
    </div>
  )
}

export default App
